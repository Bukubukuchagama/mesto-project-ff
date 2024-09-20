// Функция открытия модального окна
function openModal(element) {
  document.addEventListener("keydown", closePopupByEsc);
  element.classList.add("popup_is-animated");
  setTimeout(() => {
    element.classList.add("popup_is-opened");
  }, 1);
}

// Функция закрытия модального окна
function closeModal(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByEsc);
}

// Функция закрытия модального окна на ESC
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const currentPopup = document.querySelector(".popup_is-opened");
    closeModal(currentPopup);
  }
}

export { openModal, closeModal, closePopupByEsc };
