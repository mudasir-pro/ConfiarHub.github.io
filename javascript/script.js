function animate(){
	setTimeout(lp,200);
}
function lp(){
	a=document.getElementById('laptop');
	a.style.display="block";
}
 
function mymenu(){
	menu=document.getElementById('mymenu');
	button=document.getElementById('toggle');
	cross=document.getElementById('cross');
	menu.style.display="block";
	button.style.display="none";
	cross.style.display="block";
	menu.style.animation="menu 0.5s ease";


}
function off(){
    menu=document.getElementById('mymenu');
	button=document.getElementById('toggle');
	cross=document.getElementById('cross');
	menu.style.display="none";
	button.style.display="block";
	cross.style.display="none";
}

function scroll(){
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		document.getElementById('nav').className="test";
	}
	else{
		document.getElementById('nav').className="";
    } 
}


