export default class Popover {
  constructor() {
    this.popovers = [];

    this.showPopover = this.showPopover.bind(this);
    this.hidePopover = this.hidePopover.bind(this);
  }

  showPopover(element) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popoverTitle');
    popoverTitle.textContent = 'Popover title';
    const popoverContent = document.createElement('div');
    popoverContent.classList.add('popoverContent');
    popoverContent.textContent = element.dataset.content;
    popoverElement.appendChild(popoverTitle);
    popoverTitle.insertAdjacentElement('afterend', popoverContent);

    const id = performance.now();

    this.popovers.push({
      id,
      element: popoverElement,
    });

    document.body.appendChild(popoverElement);
    const { left, top } = element.getBoundingClientRect();

    popoverElement.style.left = `${left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
    popoverElement.style.top = `${top - popoverElement.offsetHeight - 5}px`;

    return id;
  }

  hidePopover(id) {
    const popover = this.popovers.find((t) => t.id === id);

    popover.element.remove();

    this.popovers = this.popovers.filter((t) => t.id !== id);
  }
}
