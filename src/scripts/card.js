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
  
    likeButton.addEventListener('click', () => likeCard(likeButton));
    deleteButton.addEventListener('click', () => deleteCard(cardElement));
    cardImg.addEventListener('click', () => openLargeCard({name, link}));

    return cardElement;
  }
  
  // Функция удаления карточки
  function deleteCard(cardElement) {  
    cardElement.remove(); 
  };  

  // Функция лайка карточки
  function likeCard(evt) {
    evt.classList.toggle('card__like-button_is-active');
  }
  
  export {createCard, deleteCard, likeCard};