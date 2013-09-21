try
{
	$(function(){
		$('.4u').on('click','h6[rel=#mies3]',function(){
			$('#mies3 h4').hide();
			flashembed('flash1','flash/KefexLoader.swf');
		});
		$('.4u').on('click','h6[rel=#mies4]',function(){
			$('#mies4 h4').hide();
			flashembed('flash2','flash/AppLoader.swf');
		});
		$('.simple_overlay').on('click','.close',function(){
			$('#mies2 h4').show();
			$('#flash1,#flash2').html('');
		});
		$('h6[rel]').overlay();
		$('.video').magnificPopup({
			  type: 'iframe'
			});
		$('h6[rel=]').click(function(){
			alert('Flash apps are not supported on your mobile or this Browser');
		});
	});
}
catch(e)
{
	console.log(e);
}