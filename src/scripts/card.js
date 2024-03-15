import {openModal} from './modal.js';

// Функция создания карточки
function createCard(name, link, deleteCard, likeCard, openLargeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    
    cardElement.querySelector('.card__title').textContent = name;
    cardImg.src = link;
    cardImg.alt = name;
  
    likeButton.addEventListener('click', likeCard);
    deleteButton.addEventListener('click', deleteCard);
    cardImg.addEventListener('click', openLargeCard);
  
    return cardElement;
  }
  
  // Функция удаления карточки
  function deleteCard(evt) {
    const deleteItem = evt.target.closest('.card');
    deleteItem.remove();
  }

  // Функция лайка карточки
  function likeCard(evt) {
    const buttonLike = evt.target.closest('.card__like-button');
    buttonLike.classList.toggle('card__like-button_is-active');
  }

  // Функция открытия большой карточки
  function openLargeCard(evt) {
    const image = evt.target;
    const largeImagePopup = document.querySelector('.popup_type_image');
    const imagePopup = largeImagePopup.querySelector('.popup__image');
    const titlePopup = largeImagePopup.querySelector('.popup__caption');

    imagePopup.src = image.src;
    imagePopup.alt = image.alt;
    titlePopup.alt = image.alt;
    openModal(largeImagePopup);
  }
  
  export {createCard, deleteCard, likeCard, openLargeCard};