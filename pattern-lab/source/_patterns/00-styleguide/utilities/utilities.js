function jsOpenLink() {

  // find elements with class js-link-to
  var el = document.getElementsByClassName('js-link-to');

  // define function to grab URL from data-linkto, open in new tab
  function jsLinkClicked() {
    var url = this.getAttribute('data-linkto');
    window.open(url, '_blank');
  }

  // find any anchor tags within the clickable parent
  var childLinks = document.querySelectorAll('.js-link-to a');

  // prevent children from executing the parent click event
  Array.from(childLinks).forEach(function(link){
    link.addEventListener('click', function(e){
      e.stopPropagation();
    });
  });

  // attach click event listener to the parent
  Array.from(el).forEach(function(element) {
    element.addEventListener('click', jsLinkClicked);
  });
}

module.exports = () => {
  jsOpenLink();
}
