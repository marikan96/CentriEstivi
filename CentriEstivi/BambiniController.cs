using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
//using AspNetWebApi.Extensions;
using System.IO;
using System.Net;
using System.Web;
//using System.Web.Http;
using System.Data.SqlClient;
using System.Runtime.Serialization.Json;
using Microsoft.CSharp;
using CentriEstivi.Models;
//using System.Web.Http;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
//using WebApi.Entities;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using System.Net.Http.Headers;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CentriEstivi
{

  [Authorize(AuthenticationSchemes = "Bearer")]
  [Route("api/[controller]")]
  public class BambiniController : Controller
  {

    [HttpGet("{idbambino}")]
    public object Get(int idbambino)
    {
      return Dal.getBambino(idbambino);
    }

    [HttpGet("{idcentro}/{idutente}")]
    [Route("getlistabambini")]
    public object GetListaBambini(int idcentro, int idutente)
    {
      return Dal.getListaBambini(idcentro, idutente);
    }

    [HttpDelete("{idbambino}")]
    public IActionResult DeleteBambino(int idbambino)
    {
      try
      {
        string result = Dal.DeleteBambino(idbambino);
        if (result == string.Empty)
        {
          return Ok();
        }
        else
        {
          return BadRequest(result);
        }
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    [Route("savebambino")]
    public IActionResult SaveBambino([FromBody]Bambini b)
    {
      try
      {
        //return Ok();
        v_Bambini savedBambino = Dal.SaveBambino(b);
        if (savedBambino == null)
        {
          return BadRequest("Informazioni mancanti");
        }

        //return Ok(Dal.mapFeedback(savedfeedback));
        return Ok(savedBambino);
      }
      catch (Exception ex)
      {
        // return error message if there was an exception
        return BadRequest(ex.Message);
      }
    }


    //  [HttpPost]
    //  [AllowAnonymous]
    //  [Route("exportfeedbacks")]
    //  public IActionResult ExportFeedbacks([FromBody]int year)  
    //  {
    //    if (year == 0)
    //      year = DateTime.Now.Year;
    //    //byte[] data = Dal.ExportFeedbacks(year);
    //    string data = Dal.ExportFeedbacksSave(year);
    //    //HttpResponseMessage response = new HttpResponseMessage();
    //    //response.Content = new ByteArrayContent(data);
    //    //response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    //    //response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
    //    ////return Ok(new { body = data });
    //    //return response;

    //    return Ok(new {data=data});

    //    //HttpResponseMessage httpResponseMessage = new HttpResponseMessage();
    //    //httpResponseMessage.Content = new ByteArrayContent(data);
    //    //httpResponseMessage.Content.Headers.Add("x-filename", "Report.xlsx");
    //    //httpResponseMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    //    //httpResponseMessage.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
    //    //httpResponseMessage.Content.Headers.ContentDisposition.FileName = "Report.xlsx";
    //    //httpResponseMessage.Content.Headers.ContentLength = data.Length;
    //    //httpResponseMessage.StatusCode = HttpStatusCode.OK;
    //    //return httpResponseMessage;

    //    //const string contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    //    //HttpContext.Response.ContentType = contentType;
    //    //HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");

    //    //var fileContentResult = new FileContentResult(data, contentType)
    //    //{
    //    //  FileDownloadName = "Feedbacks.xlsx"
    //    //};

    //    //return fileContentResult;
    //  }

  }
}
