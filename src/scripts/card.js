import {likeCard, deleteLike} from './api.js';

// // Функция создает карточку и вешает обработчики событий
//   function createCard(name, link, likes, toggleLike, deleteCardElement, openLargeCard, isOwner, openDeleteConfirmationPopup, card, profileId) {
//     const cardTemplate = document.querySelector('#card-template').content;
//     const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
//     const cardImg = cardElement.querySelector('.card__image');
//     const deleteButton = cardElement.querySelector('.card__delete-button');
//     const likeButton = cardElement.querySelector('.card__like-button');
//     const likeBox = cardElement.querySelector('.card__like-box');

//     cardElement.querySelector('.card__title').textContent = name;
//     cardElement.setAttribute('id', card._id);
//     cardImg.src = link;
//     cardImg.alt = name;
//     likeBox.textContent = likes;

//     if (isOwner) {
//         deleteButton.style.display = 'block';
//         deleteButton.addEventListener('click', () => openDeleteConfirmationPopup(card._id));

//     } else {
//         deleteButton.style.display = 'none';
//     } if (checkLike(card.likes, profileId)) {
//         likeButton.classList.add('card__like-button_is-active');
//     }

//     likeButton.addEventListener('click', () => toggleLike(card._id, likeButton, likeBox));
//     cardImg.addEventListener('click', () => openLargeCard({name, link}));

//     return cardElement;
// };


function createCard(card, toggleLike, deleteCardElement, openLargeCard, isOwner, openDeleteConfirmationPopup, profileId) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const likeBox = cardElement.querySelector('.card__like-box');

    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.setAttribute('id', card._id);
    cardImg.src = card.link;
    cardImg.alt = card.name;
    likeBox.textContent = card.likes.length;

    if (isOwner) {
        deleteButton.style.display = 'block';
        deleteButton.addEventListener('click', () => openDeleteConfirmationPopup(card._id));

    } else {
        deleteButton.style.display = 'none';
    } if (checkLike(card.likes, profileId)) {
        likeButton.classList.add('card__like-button_is-active');
    }

    likeButton.addEventListener('click', () => toggleLike(card._id, likeButton, likeBox));
    cardImg.addEventListener('click', () => openLargeCard(card));

    return cardElement;
};



// Функция удаляет элемент карточки из DOM
function deleteCardElement(cardId) {
    document.getElementById(cardId)?.remove();
};

// Переключение состояния лайка карточки
function toggleLike(cardId, likeButton, likeBox) {
    const isLiked = likeButton.classList.contains('card__like-button_is-active');
    const likeMethod = isLiked ? deleteLike : likeCard;

    likeMethod(cardId)
        .then((updatedCard) => {
            likeBox.textContent = updatedCard.likes.length;
            likeButton.classList.toggle('card__like-button_is-active');
        })
        .catch((err) => {
            console.error('Ошибка лайка:', err);
        });
};

// Проверка лайков: возвращает true, если в массиве хотя бы один лайк совпадает с идентификатором пользователя
function checkLike(cardLikes, profileId) {
    return cardLikes.some(like => {
      return like._id === profileId
    })
  };



export {createCard, toggleLike, deleteCardElement};
