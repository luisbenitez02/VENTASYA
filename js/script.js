$(document).ready(function(){
	$('.agrega').click(function(){
		alert("La tienda se encuentra temporalmente desactivada");
	});
	$('.compra').click(function(){
		var carrito= parseInt($('.badge').text());
		carrito= carrito+1;
		console.log("el texto es", carrito);
		$('.badge').text(carrito)
	});
});