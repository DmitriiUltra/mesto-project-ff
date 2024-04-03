  const dataProfile = '/users/me';
  const dataAvatar = '/users/me/avatar';
  const dataCards = '/cards';

  const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-10',
    headers: {
      authorization: 'a09ab031-12d4-47e4-9c1b-c5118b379ccc',
      'Content-Type': 'application/json'
    }
  };

  const cardsData = getData(dataCards);
  const myProfileData = getData(dataProfile);

  console.log(myProfileData)
  console.log(cardsData)


  // Получения данных с сервера
  function getData(dataItem) {
    return fetch(config.baseUrl + dataItem, {
        method: 'GET',
        headers: {
            authorization: config.headers.authorization
        }
    })
    .then(checkServerAnswer)
  };

  // Функция для отправки запроса на сервер для обновления данных профиля
  function editMyProfile(name, about) {
    return fetch(config.baseUrl + dataProfile, {
        method: 'PATCH',
        headers: {
            authorization: config.headers.authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
    .then(checkServerAnswer)
  };

  // Запрос на сервер для добавления новой карточки
  function sendNewCard(name, link) {
    return fetch(config.baseUrl + dataCards, {
        method: 'POST',
        headers: {
            authorization: config.headers.authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(checkServerAnswer)
  };

  // Запрос на сервер для удаления карточки
  function deleteCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: config.headers.authorization
        }
    })
    .then(checkServerAnswer);
};

// Запрос на сервер для обновления аватара пользовател
function editMyAvatar(newAvatarUrl) {
    return fetch(config.baseUrl + dataAvatar, {
        method: 'PATCH',
        headers: {
            authorization: config.headers.authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: newAvatarUrl
        })
    })
    .then(checkServerAnswer);
};

// Запрос на сервер для установки лайка карточке
  function likeCard(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: config.headers.authorization
        }
    })
    .then(checkServerAnswer);
}

// Запрос на сервер для удаления лайка с карточки.
function deleteLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: config.headers.authorization
        }
    })
    .then(checkServerAnswer);
}

// Проверка ответа от сервера
function checkServerAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

export {likeCard, deleteLike, editMyProfile, sendNewCard, deleteCard, editMyAvatar, myProfileData, cardsData}

