$(document).ready(function() {
	$( "audio" ).on('ended', function(e) {
		var num = ($(e.target).attr("id")).substr(7);
		$('#swp'+num).find('.before').show();
		$('#swp'+num).find('.after').hide();
	});			
	
	$( ".swap" ).on("click", function(e){
		$(this).find('.before').hide();
		$(this).find('.after').show();		
		$(this).find('audio').trigger("play");
	})
});
