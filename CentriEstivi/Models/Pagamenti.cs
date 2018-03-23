using System;
using System.Collections.Generic;

namespace CentriEstivi.Models
{
    public partial class Pagamenti
    {
        public int IdPagamento { get; set; }
        public DateTime DataPagamento { get; set; }
        public double Importo { get; set; }
        public int IdBambino { get; set; }
    }
}
