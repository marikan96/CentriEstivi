export class Bambino {



  constructor(b: Bambino) {
    this.idBambino = b.idBambino;
    this.idCentro = b.idCentro;
    this.cognome = b.cognome;
    this.nome = b.nome;
    this.dataNascita = b.dataNascita;
    this.citta = b.citta;
    this.via = b.via;
    this.numero = b.numero;
    this.provincia = b.provincia;
    this.cf = b.cf;
    this.certificatoMedico = b.certificatoMedico;
    this.dataScadenzaCertificato = b.dataScadenzaCertificato;
    this.intolleranze = b.intolleranze;
    this.bollo = b.bollo;
    this.impostaBollo = b.impostaBollo;
    this.totale = b.totale;
    this.daPagare = b.daPagare;
    this.aics = b.aics;
    this.adultiAutorizzati = b.adultiAutorizzati;
    this.orarioAutorizzato = b.orarioAutorizzato;
    this.telefono1 = b.telefono1;
    this.telefono2 = b.telefono2;
    this.telefono3 = b.telefono3;
    this.telefono4 = b.telefono4;
    this.email = b.email;
    this.dataTesseramento = b.dataTesseramento;
    this.dataInserimento = b.dataInserimento;
    this.descrizioneCentro = b.descrizioneCentro;
  }

  idBambino: number;
  idCentro: number;
  cognome: string;
  nome: string;
  dataNascita: Date;
  citta: string;
  via: string;
  numero: string;
  provincia: string;
  cf: string;
  certificatoMedico: string;
  dataScadenzaCertificato: Date;
  intolleranze: string;
  bollo: number;
  impostaBollo: number;
  totale: number;
  daPagare: number;
  aics: Date;
  adultiAutorizzati: string;
  orarioAutorizzato: string;
  telefono1: string;
  telefono2: string;
  telefono3: string;
  telefono4: string;
  email: string;
  dataTesseramento: Date;
  dataInserimento: Date;
  descrizioneCentro: string;

}
