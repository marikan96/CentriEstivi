export class Feedback {
  id: number;
  giudizio: string;
  commento: string;
  coordinate = {
    display: true,
    lat: null,
    lng: null,
  };
  creationUserId: number;
  createDate: Date;
}
