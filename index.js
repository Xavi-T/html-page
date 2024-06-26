function toggleSidebar() {
  const sidebar = document.getElementById('mySidebar');
  const body = document.body;
  const icon = document.querySelector('.toggle-icon');

  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    body.classList.add('body-no-scroll');
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x');
  } else {
    sidebar.style.display = 'none';
    body.classList.remove('body-no-scroll');
    icon.classList.remove('bi-x');
    icon.classList.add('bi-list');
  }
}

// toggle submenu
function toggleSubmenu(event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document body
  var subMenu = document.querySelector('.sub-menu');
  subMenu.classList.toggle('sub-menu-open'); // Toggle the class
}

document.body.addEventListener('click', function (event) {
  var seikoLink = document.querySelector('.seiko');
  var subMenu = document.querySelector('.sub-menu');
  if (!event.target.closest('.seiko')) {
    // Check if the clicked element or its ancestors contain the .seiko class
    subMenu.classList.remove('sub-menu-open'); // Remove the class
  }
});

// toggle search box
function toggleSearchBox() {
  const body = document.body;
  const searchComponent = document.querySelector('.search-component');

  if (searchComponent.style.display === 'none') {
    searchComponent.style.display = 'block';
    body.classList.add('body-no-scroll');
    body.classList.add('modal-overlay');
    // icon.classList.remove('bi-list');
    // icon.classList.add('bi-x');
  } else {
    searchComponent.style.display = 'none';
    body.classList.remove('body-no-scroll');
    body.classList.remove('modal-overlay');
    // icon.classList.remove('bi-x');
    // icon.classList.add('bi-list');
  }
}
