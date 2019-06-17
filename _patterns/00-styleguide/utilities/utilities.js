function jsOpenLink() {
  // find elements with attribute data-linkto
  const el = document.querySelectorAll('[data-linkto]');

  // ensure event fires on click or enter keystroke, define function to grab URL from data-linkto, open in new tab
  function jsLinkClicked(e) {
    if (e.type === 'click' || e.keyCode === 13) {
      const url = this.getAttribute('data-linkto');
      window.open(url, '_blank');
    }
  }

  // find any anchor tags within the clickable parent
  const childLinks = document.querySelectorAll('[data-linkto] a');

  // prevent children from executing the parent click event
  Array.from(childLinks).forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
    });
  });

  // attach click event listener to the parent
  Array.from(el).forEach(element => {
    element.addEventListener('click', jsLinkClicked);
  });

  // attach keyboard event listener to the parent
  Array.from(el).forEach(element => {
    element.addEventListener('keyup', jsLinkClicked);
  });
}

function checkboxToggle() {
  const el = document.querySelector('.site-header__button');

  function handleCheckboxEvent(e) {
    const checkbox = document.querySelector('.site-header-toggle');
    if (e.keyCode === 13) {
      checkbox.checked = !checkbox.checked;
    }
  }

  el.addEventListener('keydown', handleCheckboxEvent);
}

module.exports = () => {
  jsOpenLink();
  checkboxToggle();
};
