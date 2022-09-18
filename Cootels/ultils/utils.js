import { initialCardsAbout, initialCardsReservation, aboutContainer, reservationContainer } from './variables.js'
import AboutCard from "../components/AboutCard.js";
import ReservationCard from "../components/ReservationCard.js";

initialCardsAbout.forEach(item => {
  const card = new AboutCard(item, '.card-about');
  const newCard = card.generate();
  aboutContainer.append(newCard);
  
});

initialCardsReservation.forEach(item => {
  const card = new ReservationCard(item, '.card-reservation');
  const newCard = card.generate();
  reservationContainer.append(newCard);
});

const aboutCardContainer = aboutContainer.querySelectorAll('.card-about__container');
const cardAboutimg = aboutContainer.querySelectorAll('.card-about__img');

aboutCardContainer[1].style.flexDirection = 'row-reverse'
cardAboutimg[1].style.cssText = `
  margin-right: 0px;
  margin-left: 126px
`

const onEntry = (entry) => {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}
export {
  initialCardsAbout, 
  initialCardsReservation, 
  aboutCardContainer, 
  cardAboutimg,
  onEntry
}
