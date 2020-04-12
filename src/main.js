var ideaListArray = [];

var menuIcon = document.querySelector(".menu-icon");
var menu = document.querySelector(".menu");
var overlay = document.querySelector(".overlay");
var saveButton = document.querySelector(".save-button");

menuIcon.addEventListener('click', expandMenu);
saveButton.addEventListener('click', makeIdeaCard);

function expandMenu() {
  if (menu.classList.contains("menu-expanded")) {
    overlay.classList.add('hidden');
    menu.classList.remove("menu-expanded");
    menuIcon.src = 'Assets/menu.svg';
    menu.style.removeProperty('z-index');
  } else {
    menu.style.zIndex = '11';
    overlay.classList.remove('hidden');
    menu.classList.add("menu-expanded");
    menuIcon.src = 'Assets/delete.svg';
  }
}

function makeIdeaCard(event) {
  event.preventDefault();
  var titleInput = document.querySelector("#title-input");
  var bodyInput = document.querySelector("#body-input");
  var currentIdeaCard = new Idea(titleInput.value, bodyInput.value)
  ideaListArray.push(currentIdeaCard);
  titleInput.value = '';
  bodyInput.value = '';
}
