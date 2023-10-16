/* 
 _____   __      __   __       __   ________   __     __   __     __   _____    _
|  ___| |  |____|  | |  |_____|  | |  ____  | |  \   |  | |  |   |  | |   __|  | | 
| |___  |   _  _   | |   _   _   | | |____| | |   \  |  | |  |   |  | |  |__   | |
|  ___| |  ||_| |  | |  | |_| |  | |   __   | | |\ \_|  | |  |   |  | |   __|  | |
| |____ |  |    |  | |  |     |  | |  |  |  | | |  \    | |  |___|  | |  |___  | |___
|______||__|    |__| |__|     |__| |__|  |__| |_|    \__| |_________| |______| |_____|

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
      // this.className += 'active-btn';
      this.classList.add('active-btn');
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

   // ### theme toggle ### //
   let themebtn = document.querySelector('.theme-btn');
   themebtn.addEventListener('click', (e) => {
      e.preventDefault();
      let element = document.body;
      element.classList.toggle('dark-mode');
   });
 }
PageTransitions();


// ### detect user's connection statues ### //
let network_status = document.querySelector('.network_status');
function Network_state() {  

window.addEventListener('offline', ()=>{
   setTimeout(() => {
      network_status.style.visibility = "hidden";
   }, 3000);
   network_status.style.visibility = "visible";
   document.querySelector(".network_text").innerHTML = "We are offline"
});

window.addEventListener('online', ()=>{
   setTimeout(() => {
      network_status.style.visibility = "hidden";
   }, 3000);
   network_status.style.visibility = "visible";
   document.querySelector(".network_text").innerHTML = "We are back online"
})
}
Network_state();


//### onscroll animated effect ###//
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


// ### page preloader ### // 
main_content.style.display = "none";
   setTimeout(() => {
   main_content.style.display = "block";
   preloader.style.display = "none";
}, 3000);
