$(document).ready(function(){
	$(".header__burger").click(function(event){
		$(".header__burger,.header__menu,.header__contact").toggleClass("active");
		$("body").toggleClass("lock");
	});
});