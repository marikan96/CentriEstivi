using System;
using System.Collections.Generic;

namespace CentriEstivi.Models
{
  public partial class v_Pagamenti
  {
    public int IdPagamento { get; set; }
    public DateTime DataPagamento { get; set; }
    public double Importo { get; set; }
    public int IdBambino { get; set; }
    public string Nome { get; set; }
    public string Cognome { get; set; }
    public string CF { get; set; }
    public int IdCentro { get; set; }
  }
}
