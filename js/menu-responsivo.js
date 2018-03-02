//======= ANIMAÇÃO DO MENU MOBILE======
window.onload = function(){	
	$(function(){
		$('.menu-mobile').click(function(){
			$('.menu-mobile').find('ul').slideToggle();
		})
	})
}