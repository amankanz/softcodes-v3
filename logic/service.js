const filterBtn = document.getElementById('filter-btn');
const menuContainer = document.getElementById('menu-container');
const closeBtn = document.getElementById('close-btn');
const navItems = document.getElementsByClassName('links');

filterBtn.addEventListener('click', () => {
  filterBtn.style.display = 'none';
  menuContainer.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  filterBtn.style.display = 'block';
  menuContainer.style.left = '-35rem';
});

// Add event listener to each navigation item
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    filterBtn.style.display = 'block';
    menuContainer.style.left = '-35rem';
  });
}
