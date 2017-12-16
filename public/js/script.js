$(document).ready(function(){
	$('#alert').hide();
	$('.btn-delete').click(function(e){
		e.preventDefault();//evita que al hacer click se refresque la pagina
		if (! confirm("¿Desea eliminar el producto?")){
			return false;
		}
		//guardamos posicion y url actual
		var row = $(this).parents('tr');//al presionar el boton eliminar le estamos pidiendo que busque al padre que tiene la etiqueta tr
		var form = $(this).parents('form');
		var url = form.attr('action');//en action se graba la url


		$('#alert').show();//mostramos el mensaje

			//AJAX
			//result recibe el json del controlador
		$.post(url, form.serialize(), function(result){
			row.fadeOut();
			$('#products-total').html(result.total);
			$('#alert').html(result.message);
		}).fail(function(){
			$('#alert').html('Algo salió mal');
		});
	});
//usar la linea @yield('script') para cargar este archivo en app.blade.php
});	