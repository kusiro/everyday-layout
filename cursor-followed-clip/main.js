let clip = document.querySelector('.background');
window.addEventListener('mousemove', function(e){
  clip.style.webkitMaskPositionX = e.pageX - 150 +"px";
  clip.style.webkitMaskPositionY = e.pageY - 150 +"px"; 
})