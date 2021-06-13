


let code =(id,bg)=>{
  if(bg) var abg = "&bg="+bg; else abg = ""
  document.querySelector('#code').innerHTML = `
  &#x3C;script src=&#x22;https://soploader.sh20raj.repl.co/sl.js?id=${id}&t=2${abg}&#x22;&#x3E;&#x3C;/script&#x3E;
  `;
  document.querySelector('#preview').href = "preview.html?id="+id+""+abg;
}
let copy=()=>{
  document.execCommand('copy');
}