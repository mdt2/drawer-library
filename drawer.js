var drawerHolder = document.getElementById('drawer-holder');
var activeIcon = false;

createDrawer();
createIcon();

function createDrawer() {
  var drawerDiv = document.createElement('div');
  var drawerUl = document.createElement('ul');
  drawerDiv.id = 'drawer';
  drawerUl.id = 'drawer-ul';
  drawerHolder.appendChild(drawerDiv);
  drawerDiv.appendChild(drawerUl);
}

function createIcon() {
  var iconDiv = document.createElement('div');
  var hamDiv = document.createElement('div');
  iconDiv.id = 'icon';
  hamDiv.className = 'hamburger';
  drawerHolder.appendChild(iconDiv);
  iconDiv.appendChild(hamDiv);
  clickIcon();
}

function clickIcon() {
  var icon = document.getElementById('icon');
  icon.addEventListener('click', function() {
    if (activeIcon == false) {
      icon.classList.add('active');
      drawer.classList.add('active');
      activeIcon = true;
    } else {
      icon.classList.remove('active');
      drawer.classList.remove('active');
      activeIcon = false;
    }
  });
}

class Drawer {
  constructor() {
    this.list = document.getElementById('drawer-ul');
    this.drawer = document.getElementById('drawer');
    this.drawer.style.height = window.innerHeight + 'px';
  }
  
  setWidth(width) {
    this.drawer.width = width + 'px';
    return this;
  }
  
  /* This function expects an array of objects, for example: addListItems([{href: 'yourhref.com', content: 'list title'}]); */
  addListItems(items) {
    for (var i = 0; i < items.length; i++) {  
      this.list.innerHTML += '<li><a href="' + items[i].href + '">' + items[i].content + '</a></li>';
    };
    return this;
  }
  
  setFontSize(fontSize) {
    this.list.style.fontSize = fontSize + 'px';
    return this;
  }
  
  setListItemColor(listItemColor) {
    document.documentElement.style.setProperty('--anchor-text-color', listItemColor);
    return this;
  }
  
  setDrawerBackgroundColor(drawerBackgroundColor) {
    this.drawer.style.backgroundColor = drawerBackgroundColor;
    return this;
  }
  
  setHamMenuBackgroundColor(hamMenuBackgroundColor) {
    document.documentElement.style.setProperty('--ham-background-color', hamMenuBackgroundColor);
    return this;
  }
  
  setHamMenuBackgroundColorActive(hamMenuBackgroundColorActive) {
    document.documentElement.style.setProperty('--ham-background-color-hover', hamMenuBackgroundColorActive);
    return this;
  }
}