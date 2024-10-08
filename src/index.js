import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal } from "./components/modal.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import {
  popups,
  placesList,
  editProfileButton,
  addProfileButton,
  popupTypeEdit,
  popupTypeImage,
  nameInput,
  jobInput,
  popupNewCard,
  popupImage,
  popupCaption,
} from "./components/constants.js";

// Вывести карточки на страницу
initialCards.forEach((card) => {
  placesList.append(createCard(card, deleteCard, likeCard, openImage));
});

// Функция открытия модального окна картинки
function openImage(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openModal(popupTypeImage);
}

// Редактирование имени и информации о себе
addProfileButton.addEventListener("click", () => {
  openModal(popupNewCard);
});
editProfileButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;

  openModal(popupTypeEdit);
});

// Функции обработчика закрытия модального

// изначальная версия

// popups.forEach((popup) => {
//   const closeButton = popup.querySelector(".popup__close");
//   closeButton.addEventListener("click", () => {
//     closeModal(popup);
//   });
// });

// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup")) {
//       closeModal(popup);
//     }
//   });
// });

// улучшения от ревьюера "как можно объединить обработчики нажатия на крестик и на оверлей"
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    //Благодаря всплытию при клике на крестик мы поймаем событие на элементе попапа.
    //Проверяем что кликнули на оверлей или на крестик.
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close")
    ) {
      //В currentTarget у нас всегда будет элемент на котором мы поймали событие, т.е. попап.
      closeModal(popup);
    }
  });
});

// Обработчик события submit при отправке формы
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closeModal(popupTypeEdit);
}
const formElementProf = document.querySelector('[name="edit-profile"]');
formElementProf.addEventListener("submit", handleFormSubmit);

const newPlace = document.querySelector('[name="new-place"]');
const typeCardName = document.querySelector(".popup__input_type_card-name");
const typeUrl = document.querySelector(".popup__input_type_url");

function clearForm(form) {
  form.reset();
}

newPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const cardNameValue = typeCardName.value;
  const urlValue = typeUrl.value;

  const newCard = {
    name: cardNameValue,
    link: urlValue,
  };
  const cardElementNew = createCard(newCard, deleteCard, likeCard, openImage);
  placesList.prepend(cardElementNew);

  clearForm(newPlace);

  closeModal(popupNewCard);
});
