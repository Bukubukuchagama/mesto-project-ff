// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(card, deleteCard) {
  
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener("click", deleteCard);
  
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (card) {
  placesList.append(addCard(card, deleteCard));
});
