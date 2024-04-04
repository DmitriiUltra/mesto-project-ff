import '../pages/index.css';
import {createCard, toggleLike, deleteCardElement} from './card.js';
import {openModal, closeModal, closeModalForOverlay} from './modal.js';
import {enableValidation, clearValidation} from './validation.js';
import {editMyProfile, sendNewCard, deleteCard, editMyAvatar, myProfileData, cardsData} from './api.js';

// DOM узлы
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonsPopupClose = document.querySelectorAll('.popup__close');

const cardPlace = document.querySelector('.places__list');

const popupOverlays = document.querySelectorAll('.popup');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupDeleteCard = document.querySelector('.popup_delete_card');

const popupAvatarChange = document.querySelector('.popup_avatar_change');
const avatarChangeForm = popupAvatarChange.querySelector('.popup__form');

const profileEditForm = popupEditProfile.querySelector('.popup__form');
const profileEditNameInput = document.querySelector('.popup__input_type_name');
const profileEditAboutInput = document.querySelector('.popup__input_type_description');

const profileImage = document.querySelector('.profile__image');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const newCardForm = popupAddCard.querySelector('.popup__form');
const newCardNameInput = newCardForm.querySelector('.popup__input_type_card-name');
const newCardLinkInput = newCardForm.querySelector('.popup__input_type_url');

const largeImagePopup = document.querySelector('.popup_type_image');
const imagePopup = largeImagePopup.querySelector('.popup__image');
const titlePopup = largeImagePopup.querySelector('.popup__caption');

const validationConfig = {
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__button',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__error_visible'
};

// Вызов функции валидации
enableValidation(validationConfig);

// Ожидание выполнения запросов на получение данных о профиле и карточках с сервера
Promise.all([myProfileData, cardsData])
  .then(([profile, cards]) => {
    profileImage.style.backgroundImage = `url(${profile.avatar})`;
    profileTitle.textContent = profile.name;
    profileDescription.textContent = profile.about;
    cards.forEach((card) => {
    const isOwner = card.owner._id === profile._id;
    const cardElement = createCard(card.name, card.link, card.likes.length, toggleLike, deleteCardElement, openLargeCard, isOwner, openDeleteConfirmationPopup, card);
    cardPlace.append(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Открытие модального окна редактирования профиля
buttonEditProfile.addEventListener('click', function() {
    profileEditNameInput.value = profileTitle.textContent;
    profileEditAboutInput.value = profileDescription.textContent;
    clearValidation(profileEditForm, validationConfig);
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
    item.classList.add('popup_is-animated');
});

// Функция для обработки отправки формы редактирования профиля
function handleFormEditProfileSubmit(evt) {
    evt.preventDefault();
    const newName = profileEditNameInput.value;
    const newAbout = profileEditAboutInput.value;

    turnLoading(true, profileEditForm.querySelector('.popup__button'));
    editMyProfile(newName, newAbout)
        .then(() => {
            profileTitle.textContent = newName;
            profileDescription.textContent = newAbout;
            closeModal(popupEditProfile);
        })
        .catch((err) => {
            console.error('Ошибка при редактировании профиля:', err);
        })
        .finally(() => {
            turnLoading(false, profileEditForm.querySelector('.popup__button'))
        });
};

// Слушатель события на форме редактирования профиля
profileEditForm.addEventListener('submit', handleFormEditProfileSubmit);

// Открытие модального окна новой карточки
buttonAddCard.addEventListener('click', function() {
    clearValidation(newCardForm, validationConfig);
    openModal(popupAddCard);
    newCardForm.reset();
});

// Добавление новой карточки из модального окна
function createNewCard(evt) {
    evt.preventDefault();

    turnLoading(true, newCardForm.querySelector('.popup__button'));
    sendNewCard(newCardNameInput.value, newCardLinkInput.value)
        .then((card) => {
            // 1. Пропустил данные по лайкам
            // 2. Не передал собственно card, которая возврщается из апи
            // 3. Я передал isOwner как true по умолчанию, тк при создании она все равно не может быть чужой
            cardPlace.prepend(createCard(newCardNameInput.value, newCardLinkInput.value, card.likes.length, toggleLike, deleteCardElement, openLargeCard, true, openDeleteConfirmationPopup, card));
            closeModal(popupAddCard);
        })
        .catch((err) => {
            console.error('Ошибка при добавлении новой карточки:', err);
        })
        .finally(() => {
            turnLoading(false, newCardForm.querySelector('.popup__button'));
        })
};

// Слушатель добавления новой карточки из формы
newCardForm.addEventListener('submit', createNewCard);

// Функция открытия большой карточки
function openLargeCard({name, link}) {
    imagePopup.src = link;
    imagePopup.alt = name;
    titlePopup.textContent = name;
    openModal(largeImagePopup);
  };

// // Открытие модального окна подтверждения удаления карточки
// function openDeleteConfirmationPopup(deleteButton, cardElement) {
//     openModal(popupDeleteCard);
//     const delCardForm = popupDeleteCard.querySelector('.popup__form');

//     delCardForm.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//         deleteCard(cardElement);
//         closeModal(popupDeleteCard);
//     });
// };

// Функция для открытия модального окна подтверждения удаления карточки
function openDeleteConfirmationPopup(cardId) {
    openModal(popupDeleteCard);
    const delCardForm = popupDeleteCard.querySelector('.popup__form');

    delCardForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        deleteCard(cardId)
            .then(() => {
                deleteCardElement(cardId);
                closeModal(popupDeleteCard);
            })
            .catch((err) => {
                console.error('Ошибка при удалении карточки:', err);
            });
    });
}

// Слушатель на клик по изображению профиля
profileImage.addEventListener('click', function() {
    clearValidation(avatarChangeForm, validationConfig)
    openModal(popupAvatarChange)
    avatarChangeForm.reset()
});

// Слушатель события на отправку формы изменения аватара
avatarChangeForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const newAvatarUrl = avatarChangeForm.elements['avatar'].value;

    turnLoading(true, avatarChangeForm.querySelector('.popup__button'));
    editMyAvatar(newAvatarUrl)
        .then(() => {
            profileImage.style.backgroundImage = `url(${newAvatarUrl})`;
            closeModal(popupAvatarChange);
        })
        .catch((err) => {
            console.error('Ошибка при обновлении аватара:', err);
        })
        .finally(() => {
            turnLoading(false, avatarChangeForm.querySelector('.popup__button'));
        });
});


// Функция для управления состоянием загрузки кнопки отправки формы
function turnLoading(form, button) {
    const textSave = 'Сохранить';
    const textLoad = 'Сохранение...';
    if (form) {
      button.textContent = textLoad;
    } else {
      button.textContent = textSave;
    }
  }