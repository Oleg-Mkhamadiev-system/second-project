import Section from "../components/Section.js";
import SubmitForm from "../components/SubmitForm.js";
import UserMessage from "../components/UserMessage.js";
import DefaultMessage from "../components/DefaultMessage.js";
import {
  messageList,
  cardListSection,
  formSection,
} from "../utils/constants.js";

const cardList = new Section(
  {
    data: messageList,
    renderer: (messageItem) => {
      const message = messageItem.isOwner
        ? new UserMessage(messageItem, ".message-template_type_user")
        : new DefaultMessage(messageItem, ".message-template_type_default");

      const messageElement = message.generate();

      cardList.setItem(messageElement);
    },
  },
  cardListSection
);

cardList.renderItems();

const form = new SubmitForm({
  selector: ".form-template",
});

// инициализация формы
const formRenderer = new Section(
  {
    data: [],
  },
  formSection
);

const formElement = form.generateForm();

formRenderer.setItem(formElement);
