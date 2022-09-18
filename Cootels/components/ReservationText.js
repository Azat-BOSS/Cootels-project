import { reservationTitle, reservationText, reservationButton } from '../ultils/variables.js'
import data from '../data/data.json' assert { type: "json"};

export default class ReservationText {
  constructor(title, text, button) {
    this._title = title;
    this._text = text;
    this._button = button
  }

  _getReservationText () {
    this._title.textContent = data.links[1].titleReservation,
    this._text.textContent = data.links[1].textReservation;
    this._button.textContent = data.links[1].buttonReservation;
  }
}

const reservation = new ReservationText(reservationTitle, reservationText, reservationButton)
reservation._getReservationText()