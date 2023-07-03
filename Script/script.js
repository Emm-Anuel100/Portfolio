/* 

 _____   __      __   __       __   ________   __     __   __     __   ______
|  ___| |  |____|  | |  |_____|  | |  ____  | |  \   |  | |  |   |  | |   ___| |
| |___  |   _  _   | |   _   _   | | |____| | |   \  |  | |  |   |  | |  |___
|  ___| |  ||_| |  | |  | |_| |  | |   __   | | |\ \_|  | |  |   |  | |   ___|
| |____ |  |    |  | |  |     |  | |  |  |  | | |  \    | |  |___|  | |  |____
|______||__|    |__| |__|     |__| |__|  |__| |_|    \__| |_________| |_______|

*/

/* ########## References ########### */
let page_sections = document.querySelectorAll('.section');
let sectbtns = document.querySelectorAll('.controls');
let sectbtn = document.querySelectorAll('.control');
let allSections = document.querySelector('.main-content'); 
let preloader = document.querySelector('.preloader');
let main_content = document.querySelector('#main-content');


function PageTransitions() {
   // button clicked for active classlist
   for (let i = 0; i < sectbtn.length; i++) {
    sectbtn[i].addEventListener('click', function() {
      let current_btn = document.querySelectorAll('.active-btn');
      current_btn[0].className = current_btn[0].className.replace('active-btn', '');
      this.className += 'active-btn';
    })
      
   }

   // active class for sections
   allSections.addEventListener('click', (e) =>{
      const id = e.target.dataset.id;
      if (id) {
         // remove selected from other btns
         sectbtns.forEach((btn) =>{
            btn.classList.remove('active');
         })
         e.target.classList.remove('active');

         // remove other sections
         page_sections.forEach((section) =>{
            section.classList.remove('active');
         })

         const element = document.getElementById(id);
         element.classList.add('active');
      }
   })

   // dark theme and light theme toggle
   let themebtn = document.querySelector('.theme-btn');
   themebtn.addEventListener('click', function() {
      let element = document.body;
      element.classList.toggle('light-mode');
   })
 }
PageTransitions();




window.addEventListener('scroll', () =>{

   let reveals  = document.querySelectorAll('.reveal'); 
   for (var i = 0; i < reveals.length; i++){
       let windowheight = window.innerHeight;
       let revealtop = reveals[i].getBoundingClientRect().top;
       let revealpoint = 120;


       if (revealtop  <  windowheight + revealpoint) {
           reveals[i].classList.add('reveal-active');
       } else {
           reveals[i].classList.remove('reveal-active');
       }
   }
});



// preloader actions
main_content.style.display = "none";
setTimeout(() => {
   main_content.style.display = "block";
   preloader.style.display = "none";
}, 3500);
