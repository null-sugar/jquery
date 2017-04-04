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