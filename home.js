function bigImg(x) {
    x.style.fontSize = "3.0vw";
  }
  
  function normalImg(x) {
    x.style.fontSize = "2.4vw";
  }

  let text = document.querySelector('.hide')

  var delayInMilliseconds = 1429; //1.5 second

  setTimeout(function() {
    //your code to be executed after 1.5 second
    text.style.display='block'
  }, delayInMilliseconds);


let pc = document.querySelector('.center');
let aboutMe = document.querySelector('.aboutMe');
let projects = document.querySelector('.projects');
let future = document.querySelector('.future');
let skills = document.querySelector('.skills');
let contact = document.querySelector('.contact');
let source = document.querySelector('.sources');



aboutMe.addEventListener('click', function(){
  text.style.display='none';
  pc.src='PC_ShutdownCrop.gif';
  setTimeout(function(){
    window.location.href='aboutMe.html';
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

source.addEventListener('click', function(){
  text.style.display='none';
  pc.src='PC_ShutdownCrop.gif';
  setTimeout(function(){
    window.location.href='sources.html';
  }, delayInMilliseconds)
});
