import data from '../data/data.json' assert { type: "json"};
import { headerHeroTitle, headerHeroText, headerHeroBtn } from '../ultils/variables.js';

export default class HeaderHero {
  constructor( title, text, button ) {
    this._title = title;
    this._text = text;
    this._button = button;
  }

  _renderText () {
    this._title.textContent = data.links[0].title;
    this._text.textContent = data.links[0].text;
    this._button.textContent = data.links[0].button;
  } 
}


const headerHero = new HeaderHero(headerHeroTitle, headerHeroText, headerHeroBtn)
headerHero._renderText()
