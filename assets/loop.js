

window.onload=lp_fadeout; 
			
		function lp_fadeout() { 
var fade= document.getElementById("lpld1920"); 
	
	var intervalID = setInterval(function () { 
		
		if (!fade.style.opacity) { 
			fade.style.opacity = 1; 
		} 
		
		
		if (fade.style.opacity > 0) { 
			fade.style.opacity -= 0.1; 
		} 
		
		else { 
			clearInterval(intervalID); 
		} 
		
	}, 200); 
  setTimeout(function(){fade.style.display = 'none' ;},1000)
  
}

var lp_css = `   #lpld1920 {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;`;
		
var lp_html = `
<img id="lpld1920" src="https://i.imgur.com/ESqk94c.gif" class="loop_loader"/>
<style>
${lp_css}
</style>
`;
document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin',lp_html)