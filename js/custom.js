try
{
	$(function(){
		alertify.alert(" Presently Site is Optimized for Chrome, Please Wait for further Development!!");
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
		$('#ajaxload #contentpage').html('Loading');
		$('#portfolio').on('click','a[rel=ajaxoverlay]',function(e){
			e.preventDefault();
			$('#ajaxload').fadeIn('slow');
			var href = $(this).attr('href');
			if(href)
			{
				$('#ajaxload #contentpage').slideDown('slow').html('<h1>Loading...</h1>');
				$.get(href,function(data){
					$('#ajaxload #contentpage').html(data).fadeIn('slow');
				},"html");
			}
		});
		$('#ajaxload').on('click','.close',function(){
			$('#ajaxload #contentpage').html('').slideUp('slow');
			$('#ajaxload').fadeOut('slow');
		});
		$(document).keyup(function(e){
			if(e.keyCode == 27)
			{
				if(!webAudioStop)
				{
					source.stop(0);
					buffer = null;
				}
				else if(jKefex.navagatorUserMedia.closeStream)
				{
					jKefex.navagatorUserMedia.closeStream();
				}
				$('#ajaxload #contentpage').html('').slideUp('slow');
				$('#ajaxload').fadeOut('slow');
			}
			e.preventDefault();
			e.stopPropagation();
		});

		$('.video').magnificPopup({
					  type: 'iframe'
					});
	});
}
catch(e)
{
	console.log(e);
}