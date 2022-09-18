import Card from "./Card.js";

export default class AboutCard extends Card{
  constructor(data, selector) {
    super(selector) 
    this._image = data.image;
    this._title = data.title;
    this._text = data.text;
    this._button = data.button;
  }

  generate() {
    this._element = super._getElements()

    this._element.querySelector('.card__img').src = this._image;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__text').textContent = this._text;
    this._element.querySelector('.card__button').textContent = this._button

    return this._element
  }
}