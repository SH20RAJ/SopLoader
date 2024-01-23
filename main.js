var clipboard = new Clipboard('.clipboard');


let code =(id,bg)=>{
  if(bg) var abg = "&bg="+bg; else abg = ""
  document.querySelector('#code').innerHTML = `
  <pre class=" language-html"><code class=" language-html" id="code"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://sh20raj.github.io/SopLoader/sl.js?id=${id}&t=2${abg}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>

  `;//  &#x3C;script src=&#x22;https://soploader.sh20raj.repl.co/sl.js?id=${id}&t=2${abg}&#x22;&#x3E;&#x3C;/script&#x3E;

  document.querySelector('#preview').href = "preview.html?id="+id+""+abg;
}
function copy_data(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Code Copied!");
}