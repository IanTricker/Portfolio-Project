let text = document.querySelector('.hide')

var delayInMilliseconds = 1429; //1.5 second

setTimeout(function() {
  //your code to be executed after 1.5 second
  text.style.display='block'
}, delayInMilliseconds);


let pc = document.querySelector('.center');
let home = document.querySelector('.home');
let projects = document.querySelector('.projects');
let future = document.querySelector('.future');
let skills = document.querySelector('.skills');
let contact = document.querySelector('.contact');



home.addEventListener('click', function(){
text.style.display='none';
pc.src='PC_ShutdownCrop.gif';
setTimeout(function(){
  window.location.href='home.html';
}, delayInMilliseconds)
});


projects.addEventListener('click', function(){
text.style.display='none';
pc.src='PC_ShutdownCrop.gif';
setTimeout(function(){
  window.location.href='projects.html';
}, delayInMilliseconds)
});

future.addEventListener('click', function(){
text.style.display='none';
pc.src='PC_ShutdownCrop.gif';
setTimeout(function(){
  window.location.href='future.html';
}, delayInMilliseconds)
});

skills.addEventListener('click', function(){
text.style.display='none';
pc.src='PC_ShutdownCrop.gif';
setTimeout(function(){
  window.location.href='skills.html';
}, delayInMilliseconds)
});

contact.addEventListener('click', function(){
text.style.display='none';
pc.src='PC_ShutdownCrop.gif';
setTimeout(function(){
  window.location.href='contact.html';
}, delayInMilliseconds)
});