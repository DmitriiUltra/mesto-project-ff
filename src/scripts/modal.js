// Функция открытия модального окна
function openModal(popup) {
    popup.classList.add('popup_is-opened');
    popup.classList.remove('popup_is-animated');
    document.addEventListener('keydown', closeModalForEsc);
};

// Функция закрытия модального окна
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    popup.classList.add('popup_is-animated');
    document.removeEventListener('keydown', closeModalForEsc);
};

// Функция обработчик удаления по клику Esc
function closeModalForEsc(evt) {
    if(evt.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}; 

// Функция закрытия модального окна по крестику
function closeModalForButton(evt) {
    closeModal(evt.target.closest('.popup'));
};

// Функция закрытия модального окна по клику на оверлей
function closeModalForOverlay(evt) {
    if(evt.target === evt.currentTarget) { 
        closeModal(evt.target);
        console.log(evt)
        console.log(evt.target)
        console.log(evt.currentTarget)
    }  
};

export {openModal, closeModal, closeModalForButton, closeModalForOverlay};