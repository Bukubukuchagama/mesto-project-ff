import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal } from "./components/modal.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";

// DOM узлы
const popup = document.querySelectorAll(".popup");
const placesList = document.querySelector(".places__list");
const editProfileButton = document.querySelector(".profile__edit-button");
const addProfileButton = document.querySelector(".profile__add-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeImage = document.querySelector(".popup_type_image");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

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
popup.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () => {
    closeModal(popup);
  });
});

popup.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeModal(popup);
    }
  });
});

// Обработчик события submit при отправке формы
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(
  ".profile__description"
);

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
