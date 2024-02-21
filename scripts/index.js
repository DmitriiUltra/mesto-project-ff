// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.places');
const cardsList = places.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    //const deleteButton = cardElement.querySelector('.card__delete-button').addEventListener('click', deleteButton);

    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__image').src = link;

    return cardElement;
}

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
initialCards.forEach((elem) => {
})