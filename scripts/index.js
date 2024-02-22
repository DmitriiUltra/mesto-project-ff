// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.places');
const cardsList = content.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__image').src = link;

    deleteButton.addEventListener('click', deleteCard);

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(event) {
    const deleteItem = event.target.closest('.card');

    deleteItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    cardElement = createCard(item.name, item.link, deleteCard);
    cardsList.append(cardElement);
})
