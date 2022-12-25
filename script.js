var time = 10;
setInterval(()=>{

  var push = document.querySelector('.timer')
  var show = document.querySelector('.tag')
  push.innerHTML = time;
  time--;

  if(time<=-1){
    clearInterval(setInterval);
    push.style.display = "none"
    show.style.display = "block"
    show.style.color = "white"
    document.querySelector('body').style.backgroundColor =  '#c54245' 
  } 
},1000)