import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, deleteCard, likeCard} from './card.js';
import {openModal, closeModal, closeModalForOverlay} from './modal.js';

// DOM узлы
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonsPopupClose = document.querySelectorAll('.popup__close');

const cardPlace = document.querySelector('.places__list');

const popupOverlays = document.querySelectorAll('.popup');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupEditProfile = document.querySelector('.popup_type_edit');

const profileEditForm = popupEditProfile.querySelector('.popup__form');
const profileEditNameInput = document.querySelector('.popup__input_type_name');
const profileEditAboutInput = document.querySelector('.popup__input_type_description');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const newCardForm = popupAddCard.querySelector('.popup__form');
const newCardNameInput = newCardForm.querySelector('.popup__input_type_card-name');
const newCardLinkInput = newCardForm.querySelector('.popup__input_type_url');

const largeImagePopup = document.querySelector('.popup_type_image');
const imagePopup = largeImagePopup.querySelector('.popup__image');
const titlePopup = largeImagePopup.querySelector('.popup__caption');

// Вывести карточки на страницу
initialCards.forEach((item) => {
    const cardElement = createCard(item.name, item.link, deleteCard, likeCard, openLargeCard);
    cardPlace.append(cardElement);
});

// Открытие модального окна редактирования профиля
buttonEditProfile.addEventListener('click', function() {
    profileEditNameInput.value = profileTitle.textContent;
    profileEditAboutInput.value = profileDescription.textContent;
    openModal(popupEditProfile);
});

// Слушатель клика по закрывающей кнокпе модального окна // закрывает окно
buttonsPopupClose.forEach((item) => {
    const popup = item.closest('.popup');
    item.addEventListener('click', () => closeModal(popup));
});

// Слушатель клика по оверлею // закрывает окно
popupOverlays.forEach((item) => {
    item.addEventListener('click', closeModalForOverlay);
});

// Обработчик отправки формы редактирования профиля
function handleFormEditProfileSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = profileEditNameInput.value;
    profileDescription.textContent = profileEditAboutInput.value;
    closeModal(popupEditProfile);
};

// Слушатель события на форме редактирования профиля
profileEditForm.addEventListener('submit', handleFormEditProfileSubmit); 

// Открытие модального окна новой карточки
buttonAddCard.addEventListener('click', function() {
    openModal(popupAddCard);
});

// Добавление новой карточки из модального окна
function createNewCard(evt) {
    evt.preventDefault();
    cardPlace.prepend(createCard(newCardNameInput.value, newCardLinkInput.value, deleteCard, likeCard, openLargeCard));
    newCardForm.reset();
    closeModal(popupAddCard);
};

// Слушатель добавления новой карточки из формы
newCardForm.addEventListener('submit', createNewCard);

// Функция открытия большой карточки
function openLargeCard({name, link}) {
    imagePopup.src = link;
    imagePopup.alt = name;
    titlePopup.textContent = name;
    openModal(largeImagePopup);
  }