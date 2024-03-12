// import arhyzImage from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
// import chelOblImage from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
// import ivanovoImage from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
// import kamchatkaImage from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
// import kholmAreaImage from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
// import baykalImage from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

// const initialCards = [
//     { name: 'Архыз', link: arhyzImage },
//     { name: 'Челябинская область', link: chelOblImage },
//     { name: 'Иваново', link: ivanovoImage },
//     { name: "Камчатка", link: kamchatkaImage },
//     { name: "Холмогорский район", link: kholmAreaImage },
//     { name: "Байкал", link: baykalImage }
// ];


const arhyzImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
const chelOblImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url);
const kamchatkaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
const kholmAreaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
const baykalImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url);

const initialCards = [
    { name: 'Архыз', link: arhyzImage },
    { name: 'Челябинская область', link: chelOblImage },
    { name: 'Иваново', link: ivanovoImage },
    { name: "Камчатка", link: kamchatkaImage },
    { name: "Холмогорский район", link: kholmAreaImage },
    { name: "Байкал", link: baykalImage }
];


// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   }
// ];