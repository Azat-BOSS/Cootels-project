const initialCardsAbout = [
  {
    image: './images/cozy-home.png',
    title: 'Cozy and Down to Earth Cootage Hotel in Norway.',
    text: 'Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.',
    button: 'Learn more'
  },
  {
    image: './images/cabin-activ.png',
    title: 'Cabin Activities',
    text: 'Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.',
    button: 'Learn more'
  },
  {
    image: './images/org-food.png',
    title: '100% Organic Food',
    text: 'We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.',
    button: 'Learn more'
  }
]

const initialCardsReservation = [
  {
    image: './images/single-room.png',
    title: 'Single Room',
    text: 'Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.',
    button: 'Learn more'
  },
  {
    image: './images/double-room.png',
    title: 'Double Room',
    text: 'Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two',
    button: 'Learn more'
  },
  {
    image: './images/cootage.png',
    title: 'Cootage',
    text: 'Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends',
    button: 'Learn more'
  }
]

const headerHeroContainer = document.querySelector('.header-hero__block-text');
const headerHeroTitle = headerHeroContainer.querySelector('.header-hero__title');
const headerHeroText = headerHeroContainer.querySelector('.header-hero__text');
const headerHeroBtn = headerHeroContainer.querySelector('.header-hero_button');

const reservationTitle = document.querySelector('.reservation__title')
const reservationText = document.querySelector('.reservation__text')
const reservationButton = document.querySelector('.reservation__button')

const aboutContainer = document.querySelector('.about');
const reservationContainer = document.querySelector('.reservation__block')

export { 
  headerHeroTitle, 
  headerHeroText, 
  headerHeroBtn, 
  initialCardsAbout, 
  initialCardsReservation, 
  aboutContainer, 
  reservationContainer, 
  reservationTitle, 
  reservationText, 
  reservationButton,
}

