using System;
using System.Collections.Generic;

namespace CentriEstivi.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public string Via { get; set; }
        public string Numero { get; set; }
        public string Cap { get; set; }
        public string Citta { get; set; }
        public string Password { get; set; }
        public string Cf { get; set; }
        public string Telefono { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsAdmin { get; set; }
        public int? IdCentro { get; set; }
    }
}
