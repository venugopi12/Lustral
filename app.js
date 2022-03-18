function getElement(evt, cityName) {
  var i, x, tab;
  x = document.getElementsByClassName("output");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " red";
}
document.querySelector('.output').style.width='500px';
document.querySelector('.output').style.height='250px';
document.querySelector('.output').style.overflow='auto';