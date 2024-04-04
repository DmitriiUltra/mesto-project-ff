import {likeCard, deleteLike} from './api.js';

// Функция создает карточку и вешает обработчики событий
function createCard(name, link, likes, toggleLike, deleteCardElement, openLargeCard, isOwner, openDeleteConfirmationPopup, card) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const likeBox = cardElement.querySelector('.card__like-box');

    cardElement.querySelector('.card__title').textContent = name;
    cardElement.setAttribute('id', card._id);
    cardImg.src = link;
    cardImg.alt = name;
    likeBox.textContent = likes;

    if (isOwner) {
        deleteButton.style.display = 'block';
      } else {
        deleteButton.style.display = 'none';
      }
  
    likeButton.addEventListener('click', () => toggleLike(card._id, likeButton, likeBox));
    cardImg.addEventListener('click', () => openLargeCard({name, link}));
    deleteButton.addEventListener('click', () => openDeleteConfirmationPopup(card._id));

    return cardElement;
  };

// Функция удаляет элемент карточки из DOM
function deleteCardElement(cardId) {
    const cardToDelete = document.getElementById(cardId);
    if (cardToDelete) {
        cardToDelete.remove();
    }
};

// Переключение состояния лайка карточки
function toggleLike(cardId, likeButton, likeBox) {
    const isLiked = likeButton.classList.contains('card__like-button_is-active');
    if (isLiked) {
        deleteLike(cardId)
            .then((updatedCard) => {
                likeBox.textContent = updatedCard.likes.length;
                likeButton.classList.remove('card__like-button_is-active');
            })
            .catch((err) => {
                console.error('Ошибка лайка:', err);
            });
    } else {
        likeCard(cardId)
            .then((updatedCard) => {
                likeBox.textContent = updatedCard.likes.length;
                likeButton.classList.add('card__like-button_is-active');
            })
            .catch((err) => {
                console.error('Ошибка лайка:', err);
            });
    }
};

  export {createCard, toggleLike, deleteCardElement};
