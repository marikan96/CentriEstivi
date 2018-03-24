using System;
using System.Collections.Generic;

namespace CentriEstivi.Models
{
    public partial class Bambini
    {
        public int IdBambino { get; set; }
        public int IdCentro { get; set; }
        public string Cognome { get; set; }
        public string Nome { get; set; }
        public DateTime DataNascita { get; set; }
        public string Citta { get; set; }
        public string Via { get; set; }
        public string Numero { get; set; }
        public string Provincia { get; set; }
        public string Cf { get; set; }
        public string CertificatoMedico { get; set; }
        public DateTime? DataScadenzaCertificato { get; set; }
        public string Intolleranze { get; set; }
        public double Bollo { get; set; }
        public double? ImpostaBollo { get; set; }
        public double Totale { get; set; }
        public double? DaPagare { get; set; }
        public DateTime? Aics { get; set; }
        public string AdultiAutorizzati { get; set; }
        public string OrarioAutorizzato { get; set; }
        public string Telefono1 { get; set; }
        public string Telefono2 { get; set; }
        public string Telefono3 { get; set; }
        public string Telefono4 { get; set; }
        public string Email { get; set; }
        public DateTime? DataTesseramento { get; set; }
        public DateTime DataInserimento { get; set; }
    }
}
