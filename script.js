function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  // sorting out the images
  var aboutHeader = document.getElementById("about-header");
  var katePic = document.getElementById("kate-pic");
  var joePic = document.getElementById("joe-pic");

  leftContent = document.getElementsByClassName("left-content");

  for (i = 0; i < leftContent.length; i++) {
    leftContent[i].classList.add("hidden");
  }
  if (cityName == "Us") {
    aboutHeader.classList.remove("hidden");
  } else if (cityName == "Kate") {
    katePic.classList.remove("hidden");
  } else if ((cityName = "Joe")) {
    joePic.classList.remove("hidden");
  }
}

// get first item to show automatically

document.getElementById("defaultOpen").click();