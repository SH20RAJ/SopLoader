
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
let sl_prid = "IsuSvxQ";
if(sl_pr.get('id')){
  sl_prid = sl_pr.get('id');
}
if(sl_pr.get('full')){
  document.querySelector('.soploader img').width = "100%";
}

let sl_bg = "#fff";
if(sl_pr.get('bg')){
  sl_bg = sl_pr.get('bg');
}
document.body.insertAdjacentHTML('afterbegin',`
  <div class="soploader">
  <img src="https://i.imgur.com/${sl_prid}.gif" alt="SopLoader Loading...">
  </div>
  <style>
  
.soploader {
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
      display: block;
      position: fixed;
      background: #fff;
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

  console.log('SopLoader :- Free Preloaders for Website :- https://soploader.sh20raj.repl.co/')


