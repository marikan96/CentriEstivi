using CentriEstivi.Models;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using EPPlus.Core.Extensions;

namespace CentriEstivi
{
  public class Dal
  {

    #region user login/registration

    public static int RegisterUser(Users user)
    {
      using (var db = new CentriEstiviCustomContext())
      {
        var existingUser = db.Users.Where(u => u.Email == user.Email).FirstOrDefault();
        if (existingUser == null)
        {

          byte[] passwordHash, passwordSalt;
          CreatePasswordHash(user.Password, out passwordHash, out passwordSalt);

          user.PasswordHash = passwordHash;
          user.PasswordSalt = passwordSalt;
          user.Password = null;

          db.Users.Add(user);
          db.SaveChanges();

          var id = db.Users.Where(u => u.Email == user.Email).FirstOrDefault().Id;
          return id;
        }
        else
        {
          throw new Exception("Questo username esiste già");
        }
      }
    }

    public static Users AuthenticateUser(string username, string password)
    {
      if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
        return null;
      using (var db = new CentriEstiviCustomContext())
      {
        var user = db.Users.SingleOrDefault(x => x.Email == username);

        // check if username exists
        if (user == null)
          return null;

        // check if password is correct
        if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
          return null;

        // authentication successful
        return user;
      }
    }

    private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
      if (password == null) throw new ArgumentNullException("password");
      if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

      using (var hmac = new System.Security.Cryptography.HMACSHA512())
      {
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
      }
    }

    private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
    {
      if (password == null) throw new ArgumentNullException("password");
      if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
      if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
      if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

      using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
      {
        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        for (int i = 0; i < computedHash.Length; i++)
        {
          if (computedHash[i] != storedHash[i]) return false;
        }
      }

      return true;
    }

    #endregion

    #region bambini

    public static v_Bambini getBambino(int idbambino)
    {
      using (var db = new CentriEstiviCustomContext())
      {
        return db.v_Bambini.Find(idbambino);
      }
    }

    public static List<v_Bambini> getListaBambini(int idcentro, int idutente)
    {
      using (var db = new CentriEstiviCustomContext())
      {
        bool imAdmin = isAdmin(idutente);
        if (imAdmin)
        {
          return db.v_Bambini.OrderBy(b => b.IdCentro).ThenBy(b1 => b1.Cognome).ThenBy(b2 => b2.Nome).ToList();
        }
        else
        {
          return db.v_Bambini.Where(b => b.IdCentro == idcentro).OrderBy(b1 => b1.Cognome).ThenBy(b2 => b2.Nome).ToList();
        }
      }
    }

    public static string DeleteBambino(int idbambino)
    {
      if (idbambino == 0)
        return "Id non ricevuto";
      using (var db = new CentriEstiviCustomContext())
      {
        var bambino = db.Bambini.Find(idbambino);
        if (bambino == null)
        {
          return "Bambino non trovato";
        }

        db.Bambini.Remove(bambino);
        db.SaveChanges();
        return string.Empty;
      }
    }

    public static v_Bambini SaveBambino(Bambini b)
    {
      if (b == null || b.IdCentro == 0 || string.IsNullOrEmpty(b.Cognome) || string.IsNullOrEmpty(b.Nome)
        || string.IsNullOrEmpty(b.Citta)
        || string.IsNullOrEmpty(b.Via)
        || b.DataNascita == null)
        return null;
      using (var db = new CentriEstiviCustomContext())
      {

        db.Bambini.Add(b);
        db.SaveChanges();

        //load saved data
        //b contiene già l'id generato     
        var savedB = db.v_Bambini.Find(b.IdBambino);
        return savedB;
      }
    }

    #endregion

    #region pagamenti   

    public static List<v_Pagamenti> getListaPagamenti(int idcentro, int idutente)
    {
      using (var db = new CentriEstiviCustomContext())
      {
        bool imAdmin = isAdmin(idutente);
        if (imAdmin)
        {
          return db.v_Pagamenti.OrderBy(b => b.IdCentro).ThenBy(b1 => b1.DataPagamento).ToList();
        }
        else
        {
          return db.v_Pagamenti.Where(b => b.IdCentro == idcentro).OrderBy(b1 => b1.DataPagamento).ToList();
        }
      }
    }

    public static string DeletePagamento(int idpagamento)
    {
      if (idpagamento == 0)
        return "Id non ricevuto";
      using (var db = new CentriEstiviCustomContext())
      {
        var p = db.Pagamenti.Find(idpagamento);
        if (p == null)
        {
          return "Bambino non trovato";
        }

        db.Pagamenti.Remove(p);
        db.SaveChanges();
        return string.Empty;
      }
    }

    public static v_Pagamenti SavePagamento(Pagamenti p)
    {
      if (p == null || p.IdBambino==0 || p.Importo==0
        || p.DataPagamento == null)
        return null;
      using (var db = new CentriEstiviCustomContext())
      {

        db.Pagamenti.Add(p);
        db.SaveChanges();

        //load saved data
        //b contiene già l'id generato     
        var savedP = db.v_Pagamenti.Find(p.IdBambino);
        return savedP;
      }
    }

    #endregion

    private static bool isAdmin(int idutente)
    {
      using (var db = new CentriEstiviCustomContext())
      {
        return db.Users.Find(idutente).IsAdmin;
      }
    }

    public static List<object> GetUserFeedbacks(int userId)
    {
      if (userId == 0)
        return null;
      //using (var db = new CentriEstiviContext())
      //{
      //  var list = db.Feedbacks.Where(f => f.CreationUserId == userId).ToList();
      //  List<object> mappedList = new List<object>();
      //  foreach (var f in list)
      //  {
      //    mappedList.Add(mapFeedback(f));
      //  }

      //  return mappedList;
      //}

      return null;
    }

    public static byte[] ExportFeedbacks(int year)
    {
      //using (var db = new CentriEstiviContext())
      //{
      //  //var obj = db.Feedbacks.Where(f => f.CreateDate.Year == year).ToXlsx();

      //  //EXPORT EXCEL FUNZIONANTE
      //  var obj = db.Feedbacks.Where(f => f.CreateDate.Year == year).ToList().ToXlsx();
      //  return obj;
      //  //FINE EXPORT EXCEL FUNZIONANTE


      // // File.WriteAllBytes(Environment.CurrentDirectory + "\\report.xlsx", obj); // Requires System.IO
      //                                           //var file = File.Create(Environment.CurrentDirectory + "\\report.xlsx");
      //                                           //obj.SaveAs(file);


      //  // var list = new List<object[]>();
      //  // list.Add(obj);

      //  //MemoryStream stream = new MemoryStream();
      //  //using (ExcelPackage excel = new ExcelPackage(stream))
      //  //{          
      //  //  var workSheet = excel.Workbook.Worksheets.Add("Sheet1");          
      //  //  workSheet.Cells[1, 1].LoadFromArrays(list);
      //  //  var f = File.Create(Environment.CurrentDirectory + "\\report.xlsx");
      //  //  excel.SaveAs(f);
      //  //  //return excel.GetAsByteArray();
      //  //  return null;
      //  //}          
      //}
      return null;
    }

    public static string ExportFeedbacksSave(int year)
    {
      //using (var db = new CentriEstiviContext())
      //{
      //  var obj = db.Feedbacks.Where(f => f.CreateDate.Year == year).ToXlsx();                

      //   File.WriteAllBytes(Environment.CurrentDirectory + "\\TempReport\\Feedbacks.xlsx", obj); // Requires System.IO
      //  return Environment.CurrentDirectory + "\\TempReport\\Feedbacks.xlsx";
      //}
      return null;
    }

    #region map methods

    //public static object mapFeedback(Feedbacks f)
    //{
    //  var obj = new
    //  {

    //    id = f.Id,
    //    giudizio = f.Giudizio,
    //    commento = f.Commento,
    //    coordinate = new
    //    {
    //      display = true,
    //      lat = f.Lat,
    //      lng = f.Lng,
    //    },
    //    creationUserId = f.CreationUserId,
    //    createDate = f.CreateDate
    //  };
    //  return obj;
    //}

    public static object mapUser(Users user, string tokenString = "")
    {
      var obj = new
      {
        Id = user.Id,
        Username = user.Email,
        FirstName = user.Nome,
        LastName = user.Cognome,
        address = user.Via,
        house_number = user.Numero,
        cap = user.Cap,
        city = user.Citta,
        fiscal_code = user.Cf,
        tel_number = user.Telefono,
        Token = tokenString
      };
      return obj;
    }

    #endregion

  }
}
