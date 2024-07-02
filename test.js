function bigImg(x) {
    x.style.fontSize = "3.0vw";
  }
  
  function normalImg(x) {
    x.style.fontSize = "2.4vw";
  }

let text = document.querySelector('.rainbow-text-loop');

  var delayInMilliseconds = 1429; //1.5 second

  setTimeout(function() {
    //your code to be executed after 1.5 second
    text.style.display='block'
  }, delayInMilliseconds);

let pc = document.querySelector('.center');



pc.addEventListener('click', function(){
  text.style.display='none';
  pc.src='PC_ShutdownCrop.gif';
  setTimeout(function(){
    window.location.href='home.html';
  }, delayInMilliseconds)
});