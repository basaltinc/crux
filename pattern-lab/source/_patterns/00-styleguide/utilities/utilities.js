function jsOpenLink() {
  // find elements with attribute data-linkto
  const el = document.querySelectorAll('[data-linkto]');

  // define function to grab URL from data-linkto, open in new tab
  function jsLinkClicked() {
    const url = this.getAttribute('data-linkto');
    window.open(url, '_blank');
  }

  // find any anchor tags within the clickable parent
  const childLinks = document.querySelectorAll('[data-linkto] a');

  // prevent children from executing the parent click event
  Array.from(childLinks).forEach((link) => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // attach click event listener to the parent
  Array.from(el).forEach((element) => {
    element.addEventListener('click', jsLinkClicked);
  });
}

module.exports = () => {
  jsOpenLink();
};
