"use strict";

/* 
 _____   __      __   __       __   ________   __     __   __     __   _____    _
|  ___| |  |____|  | |  |_____|  | |  ____  | |  \   |  | |  |   |  | |   __|  | | 
| |___  |   _  _   | |   _   _   | | |____| | |   \  |  | |  |   |  | |  |__   | |
|  ___| |  ||_| |  | |  | |_| |  | |   __   | | |\ \_|  | |  |   |  | |   __|  | |
| |____ |  |    |  | |  |     |  | |  |  |  | | |  \    | |  |___|  | |  |___  | |___
|______||__|    |__| |__|     |__| |__|  |__| |_|    \__| |_________| |______| |_____|

*/

/* ########## References ########### */
var page_sections = document.querySelectorAll('.section');
var sectbtns = document.querySelectorAll('.controls');
var sectbtn = document.querySelectorAll('.control');
var allSections = document.querySelector('.main-content');
var preloader = document.querySelector('.preloader');
var main_content = document.querySelector('#main-content');

function PageTransitions() {
  // button clicked for active classlist
  for (var i = 0; i < sectbtn.length; i++) {
    sectbtn[i].addEventListener('click', function () {
      var current_btn = document.querySelectorAll('.active-btn');
      current_btn[0].className = current_btn[0].className.replace('active-btn', ''); // this.className += 'active-btn';

      this.classList.add('active-btn');
    });
  } // active class for sections


  allSections.addEventListener('click', function (e) {
    var id = e.target.dataset.id;

    if (id) {
      // remove selected from other btns
      sectbtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      e.target.classList.remove('active'); // remove other sections

      page_sections.forEach(function (section) {
        section.classList.remove('active');
      });
      var element = document.getElementById(id);
      element.classList.add('active');
    }
  }); // ### theme toggle ### //

  var themebtn = document.querySelector('.theme-btn');
  themebtn.addEventListener('click', function (e) {
    e.preventDefault();
    var element = document.body;
    element.classList.toggle('dark-mode');
  });
}

PageTransitions(); // ### detect user's connection statues ### //

var network_status = document.querySelector('.network_status');

function Network_state() {
  window.addEventListener('offline', function () {
    setTimeout(function () {
      network_status.style.visibility = "hidden";
    }, 3000);
    network_status.style.visibility = "visible";
    document.querySelector(".network_text").innerHTML = "We are offline";
  });
  window.addEventListener('online', function () {
    setTimeout(function () {
      network_status.style.visibility = "hidden";
    }, 3000);
    network_status.style.visibility = "visible";
    document.querySelector(".network_text").innerHTML = "We are back online";
  });
}

Network_state(); //### onscroll animated effect ###//

window.addEventListener('scroll', function () {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 120;

    if (revealtop < windowheight + revealpoint) {
      reveals[i].classList.add('reveal-active');
    } else {
      reveals[i].classList.remove('reveal-active');
    }
  }
}); // ### page preloader ### // 

main_content.style.display = "none";
setTimeout(function () {
  main_content.style.display = "block";
  preloader.style.display = "none";
}, 3000);