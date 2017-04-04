(function($){
	$.fn.confirm = function(){
		this.click(function(e){
			if(!confirm('処理を継続しますか？')){
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		});
		return this;
	};
})(jQuery);