export default class SubmitForm {
  constructor({ selector }) {
    this._selector = selector;
  }

  _getElement() {
    const formElement = document
      .querySelector(this._selector)
      .content.querySelector(".form")
      .cloneNode(true);

    return formElement;
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._element.reset();
    });
  }

  generateForm() {
    this._element = this._getElement();
    this._setEventListeners();

    return this._element;
  }
}
