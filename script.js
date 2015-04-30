


$(document).ready(function(){

	

	function loadXMLDoc(url, elementId){
		var xmlhttp;
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
 			 xmlhttp=new XMLHttpRequest();
 		}else{// code for IE6, IE5
 			 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 		}
		xmlhttp.onreadystatechange=function(){
  			if (xmlhttp.readyState==4 && xmlhttp.status==200){
    				document.getElementById(elementId).innerHTML=xmlhttp.responseText;
   			 }
  		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
	}

	$('.projects').click(function() {
		alert($(window).width());
  	loadXMLDoc("projects.txt","change-content");
	});
	$('.videos').click(function() {
  	loadXMLDoc("videos.txt","change-content");
	});
	$('.contact').click(function() {
  	loadXMLDoc("contact.txt","change-content");
	});
	$('.interests').click(function() {
  	loadXMLDoc("interests.txt","change-content");
	});


	$('.profile-img').click(function() {
  	alert($('body').width());
	});

	
});

