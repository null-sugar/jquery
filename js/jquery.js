$(function(){
	$('.hoge1').css('color','blue')
});

$(function(){
	$('#logo').attr({
		'src': 'http://www.wings.msn.to/image/wings.jpg',
		'title': 'wings project'
	});
});


$(function(){
	var b = $('.box');
	console.log('コンテンツ:' + b.height() + 'x' + b.width());
	console.log('コンテンツ:' + b.innerHeight() + 'x' + b.innerWidth());
	console.log('コンテンツ:' + b.outerHeight() + 'x' + b.outerWidth());
	console.log('コンテンツ:' + b.outerHeight(true) + 'x' + b.outerWidth(true));
});


$(function(){
	//$('.composition').remove();
	$('.composition').empty();
});


$(function(){
	var button;

	$('#show').change(function(){
		if(!this.checked){
			button = $('#log').detack();
		} else{
			$('body').append(button);
		}
	});

	$('#log').click(function(){
		console.log('buttonがクリックされました');
	});
});


$(function(){
	$('.content').click(function(){
		$('.content01').hide();
	})
})

$(document).ready(function(){
	$('.content01').fadeIn(3000)
});

// $(document).ready(function() {
// $('body').fadeIn(4000);
// });