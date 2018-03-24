using System;
using System.Collections.Generic;

namespace CentriEstivi.Models
{
    public partial class Feedbacks
    {
        public int Id { get; set; }
        public string Commento { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
        public int CreationUserId { get; set; }
        public bool Visible { get; set; }
        public string Giudizio { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
