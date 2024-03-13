import '../pages/index.css';
import { createCard, deleteCard, initialCards } from './cards.js';

//DOM узлы
const cardsList = document.querySelector('.places__list');

const closeButton = document.querySelector('.popup__close');

//Вывести карточки на страницу
initialCards.forEach((item) => {
    const cardElement = createCard(item.name, item.link, deleteCard);
    cardsList.append(cardElement);
})
