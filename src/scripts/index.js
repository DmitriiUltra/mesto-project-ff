import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, deleteCard, likeCard, openLargeCard} from './card.js';
import {openModal, closeModal, closeModalForButton, closeModalForOverlay} from './modal.js';

// DOM узлы
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonPopupClose = document.querySelectorAll('.popup__close');

const cardsList = document.querySelector('.places__list');

const popupOverlay = document.querySelectorAll('.popup');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupEditProfile = document.querySelector('.popup_type_edit');

const profileEditForm = popupEditProfile.querySelector('.popup__form');
const profileEditNameInput = document.querySelector('.popup__input_type_name');
const profileEditAboutInput = document.querySelector('.popup__input_type_description');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const newCardForm = popupAddCard.querySelector('.popup__form');

// Вывести карточки на страницу
initialCards.forEach((item) => {
    const cardElement = createCard(item.name, item.link, deleteCard, likeCard, openLargeCard);
    cardsList.append(cardElement);
});

// Открытие модального окна редактирования профиля
buttonEditProfile.addEventListener('click', function() {
    profileEditNameInput.value = profileTitle.textContent;
    profileEditAboutInput.value = profileDescription.textContent;
    openModal(popupEditProfile);
});

// Слушатель клика по закрывающей кнокпе модального окна
buttonPopupClose.forEach((item) => {
    item.addEventListener('click', closeModalForButton);
});

// Слушатель клика по оверлею
popupOverlay.forEach((item) => {
    item.addEventListener('click', closeModalForOverlay);
});

// Обработчик отправки формы
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = profileEditNameInput.value;
    profileDescription.textContent = profileEditAboutInput.value;
    closeModal(popupEditProfile);
};

// Слушатель события на форме редактирования профиля
profileEditForm.addEventListener('submit', handleFormSubmit); 

// Открытие модального окна новой карточки
buttonAddCard.addEventListener('click', function() {
    openModal(popupAddCard);
});

// Добавление новой карточки из модального окна
function createNewCard(evt) {
    evt.preventDefault();
    const newCardNameInput = document.querySelector('.popup__input_type_card-name');
    const newCardLinkInput = document.querySelector('.popup__input_type_url');
    cardsList.prepend(createCard(newCardNameInput.value, newCardLinkInput.value, deleteCard, likeCard, openLargeCard));
    newCardForm.reset();
    closeModal(popupAddCard);
};

// Слушатель добавления новой карточки из формы
newCardForm.addEventListener('submit', createNewCard);

