
document.onreadystatechange = trn_ready;
function trn_ready() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
        "body").style.visibility = "hidden"; 
        document.querySelector( 
        ".trn_loader").style.visibility = "visible"; 
    } else {
setTimeout( function(){
        document.querySelector( 
        "body").style.visibility = "visible"; 
       document.querySelector('.trn_con').innerHTML = "Loading Finished...";
        document.querySelector('.trn_con').style.display = "none";
} ,2000)

    } 
}; 
let trn_htm = `	<div id="trn_loader" class="trn_loader trn_center">
<div class="toy-train">
<div class="engine">
<div class="window">
<div class="engine-main">
  <div class="smokes">
    <span></span>
  </div>
</div>
</div>
<div class="engine-body">
<div class="wheels">
  <div class="big-wheel"></div>
  <div class="normal-wheel"></div>
</div>
</div>
</div>
<div class="locomotive">
<div class="trash"></div>
<div class="wheels">
<div class="normal-wheel"></div>
<div class="normal-wheel"></div>
</div>
</div>
<div class="tracks">
<span></span>
<span></span>
</div>
</div>
</div> `;

let trn_css = `.trn_center {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  
  #trn_loader {
    background: linear-gradient(to right, #56ccf2, #2f80ed);
  }
  
  .trn_loader .toy-train {
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    width: 109px;
    transform: scale(1.2);
  }
  
  .trn_loader .engine {
    float: right;
    position: relative;
  }
  
  .trn_loader .window {
    height: 28px;
    width: 30px;
    background-color: #194488;
    position: relative;
    border: 3px solid #000;
  }
  .trn_loader .window:before,
  .trn_loader .window:after {
    content: "";
    position: absolute;
    left: 50%;
    border: 3px solid #000;
  }
  .trn_loader .window:before {
    height: 7px;
    background-color: #f82510;
    width: 45px;
    margin-top: -13px;
    margin-left: -26px;
    border-radius: 8px;
  }
  .trn_loader .window:after {
    margin-left: -8px;
    margin-top: 3px;
    border-radius: 50%;
    height: 11px;
    width: 11px;
    background-color: #fff;
  }
  
  .trn_loader .engine-main {
    height: 10px;
    width: 35px;
    border: 3px solid #000;
    background-color: #3d9a01;
    position: absolute;
    border-radius: 0 8px 8px 0;
    right: -41px;
    bottom: -3px;
  }
  .trn_loader .engine-main:before {
    content: "";
    height: 10px;
    width: 8px;
    background-color: #000;
    position: absolute;
    top: -11px;
    left: 4px;
    transform: rotate(180deg);
    border-radius: 50% 50% 50% 50%/90% 90% 40% 40%;
  }
  .trn_loader .engine-main:after {
    content: "";
    height: 12px;
    width: 8px;
    position: absolute;
    display: block;
    right: 5px;
    top: -18px;
    border-radius: 50% 50% 50% 50%/90% 90% 40% 40%;
    transform: rotate(180deg);
    z-index: -1;
    background-color: #194488;
    border: 3px solid #000;
  }
  
  .trn_loader .engine-body {
    height: 17px;
    width: 75px;
    position: absolute;
    left: -2px;
    top: 30px;
    background-color: #f69f00;
    border: 3px solid #000;
    border-radius: 5px;
  }
  .trn_loader .engine-body .big-wheel {
    top: 3px;
    left: 2px;
  }
  .trn_loader .engine-body .normal-wheel {
    left: 45px;
    top: 5px;
  }
  .trn_loader .engine-body:before {
    content: "";
    position: absolute;
    height: 5px;
    width: 5px;
    left: -11px;
    bottom: 2px;
    z-index: -1;
    background-color: #fff;
    border-radius: 50%;
    border: 3px solid #000;
  }
  
  .trn_loader .wheels > div {
    position: absolute;
    background-color: #f82510;
    border-radius: 50%;
    border: 3px solid #000;
    animation: wheel-rotate 1s linear infinite;
  }
  .trn_loader .wheels > div:before {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #000;
    top: 50%;
    margin-top: -1px;
  }
  .trn_loader .wheels > div:after {
    content: "";
    height: 8px;
    width: 8px;
    position: absolute;
    background-color: #000;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    margin-left: -4px;
    margin-top: -4px;
  }
  .trn_loader .wheels .big-wheel {
    width: 22px;
    height: 22px;
    animation-delay: -0.3s;
  }
  .trn_loader .wheels .normal-wheel {
    height: 20px;
    width: 20px;
    animation-delay: -0.6s;
  }
  
  .trn_loader .locomotive {
    height: 35px;
    width: 60px;
    border: 3px solid #000;
    background-color: #f69f00;
    border-radius: 5px;
    position: relative;
    float: left;
    margin-top: 13px;
  }
  .trn_loader .locomotive:before {
    content: "";
    width: 100%;
    background: linear-gradient(
      to right,
      #000000 0%,
      #000000 8%,
      #f69f00 8%,
      #f69f00 15%,
      #000000 15%,
      #000000 28%,
      #000000 34%,
      #f69f00 34%,
      #f69f00 65%,
      #000000 65%,
      #000000 65%,
      #000000 100%
    );
    height: 3px;
    position: absolute;
    top: 6px;
    left: 0;
  }
  .trn_loader.locomotive:after {
    content: "";
    width: 100%;
    background: linear-gradient(
      to right,
      #000000 0%,
      #000000 24%,
      #f69f00 24%,
      #f69f00 65%,
      #f69f00 65%,
      #000000 65%,
      #000000 85%,
      #f69f00 85%,
      #f69f00 90%,
      #000000 90%,
      #000000 100%
    );
    height: 3px;
    position: absolute;
    top: 14px;
    left: 0;
  }
  .trn_loader .locomotive .wheels > div {
    top: 22px;
    animation-delay: -0.6s;
  }
  .trn_loader .locomotive .wheels > div:first-child {
    animation-delay: -0.9s;
  }
  .locomotive .normal-wheel:first-of-type {
    left: 2px;
  }
  .locomotive .normal-wheel:last-of-type {
    right: 2px;
  }
  .trn_loader .locomotive .trash {
    height: 35px;
    width: 50px;
    position: absolute;
    top: -18px;
    border: 3px solid #000;
    background-color: #3d9a01;
    border-radius: 50%;
    left: 2px;
    z-index: -1;
  }
  
  .trn_loader .tracks {
    position: relative;
    width: 200px;
    bottom: -10px;
    overflow: hidden;
    height: 3px;
  }
  .trn_loader .tracks span {
    display: inline-block;
    height: 3px;
    width: 200px;
    position: absolute;
    left: 200px;
    background: linear-gradient(
      to right,
      black 0%,
      black 30%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 39%,
      black 39%,
      black 61%,
      black 65%,
      rgba(0, 0, 0, 0) 65%,
      rgba(0, 0, 0, 0) 70%,
      black 71%,
      black 100%
    );
    animation: track 2s linear infinite;
    animation-fill-mode: forwards;
  }
  .trn_loader .tracks span:nth-child(2) {
    animation-delay: -1s;
  }
  
  .trn_loader .smokes:before,
  .trn_loader .smokes:after,
  .trn_loader .smokes span:before {
    display: block;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    right: 8px;
    top: 15px;
    z-index: -1;
  }
  .trn_loader .smokes:before {
    animation: smoke 1s linear infinite;
  }
  .trn_loader .smokes span:before {
    animation: smoke 1s linear infinite;
    animation-delay: -0.6s;
  }
  .trn_loader .smokes:after {
    animation: smoke 1s linear infinite;
    animation-delay: -0.3s;
  }
  
  @keyframes smoke {
    100% {
      top: -50px;
      opacity: 0.5;
    }
  }
  @keyframes wheel-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes track {
    100% {
      left: -200px;
    }
  }
  `;

document.querySelector('body').insertAdjacentHTML('afterbegin','<div class="trn_con">'+trn_htm +'<style>'+trn_css+'</style></div>')



