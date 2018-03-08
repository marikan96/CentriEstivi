using System;
using System.Collections.Generic;

namespace CentriEstivi.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Street { get; set; }
        public string StreetNr { get; set; }
        public string Cap { get; set; }
        public string City { get; set; }
        public string Password { get; set; }
        public string Code { get; set; }
        public string Telephone { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
