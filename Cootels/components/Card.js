export default class Card {
  constructor(selector) {
    this._selector = selector;
  }

  _getElements () {
    const cardElement = document
    .querySelector(this._selector)
    .content
    .querySelector('.card__container')
    .cloneNode(true)
    
    return cardElement
  }
}