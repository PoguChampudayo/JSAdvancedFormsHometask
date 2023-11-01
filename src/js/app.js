import Popover from './popover';

const form = document.forms.buttonForPopover;

const popoverFactory = new Popover();
let actualMessages = [];

const showPopover = (element) => {
  actualMessages.push({
    name: element.name,
    id: popoverFactory.showPopover(element),
  });
};

const hidePopover = (element) => {
  const currentErrorMessage = actualMessages.find((item) => item.name === element.name);
  if (currentErrorMessage) {
    popoverFactory.hidePopover(currentErrorMessage.id);
    actualMessages = actualMessages.filter((m) => m.id !== currentErrorMessage.id);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (actualMessages[0]) {
    hidePopover(e.target.button);
  } else {
    showPopover(e.target.button);
  }
});
