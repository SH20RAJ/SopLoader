
//Getting Current script parameter
let sl_pr = new URL(document.currentScript.src);
sl_pr = sl_pr.searchParams;
console.log(sl_pr.get('id'));

//Time Control
let sl_t = 2000;
if(sl_pr.get('t')){
  sl_t = sl_pr.get('t') * 1000;
} else {
  sl_t = 2000;
}

if(sl_pr.get('id')){
  sl_pr = sl_pr.get('id');
} else {
  sl_pr = "IsuSvxQ";
}


document.body.insertAdjacentHTML('afterbegin',`
  <div class="soploader">
  <img src="https://i.imgur.com/${sl_pr}.gif" alt="SopLoader Loading..."
  </div>
  <style>
  
.soploader {
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
      display: block;
      position: fixed;
      background: rgb(255, 255, 255);
      z-index: 1920;
      width: 100%;
      height: 100%;
      pointer-events: none;
}
.soploader:hover{
  opacity: .7;
}
    
.soploader img {
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
}
</style>
`);



document.onload =  setTimeout(function(){
    document.querySelector('.soploader').style.display = "none";
  }
  ,sl_t)


