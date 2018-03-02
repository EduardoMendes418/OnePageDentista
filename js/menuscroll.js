//======= CRIAÇAO DO SCROLL SUAVE MENU======
	$(function(){

		var $doc = $('html,body');
		$('.scrollSuave').click(function(){
		$doc.animate({scrollTop:$($.attr(this,'href')).offset().top }, 1000);
		
		return false;
	});
});//abrindo funçao

