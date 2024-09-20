// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(card, deleteCard, likeCard, openImage) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const imageCard = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const titleCard = cardElement.querySelector(".card__title");

  imageCard.src = card.link;
  imageCard.alt = card.name;
  titleCard.textContent = card.name;

  imageCard.addEventListener("click", openImage);
  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", likeCard);

  return cardElement;
}

// Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
}

// Функция обрабатки события лайка
function likeCard(evt) {
  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
}

export { createCard, deleteCard, likeCard };
