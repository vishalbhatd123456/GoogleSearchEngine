$(document).ready(function()
{
	$(".result").on("click",function()
	{
		var id = $(this).attr("data-linkId");
		var url = $(this).attr("href");
		//console.log(url);
		if(!id)
		{
			alert('The requested URL not found')
		}
		increasedLinkClicks(id,url);


		return false;
	});
	var grid = $(".imageResults");
	
		grid.masonry({
		itemSelector: ".gridItem1",
		columnWidth:200,
		gutter:5,
		//isInitLayout : false

	});
	

});



	function increasedLinkClicks(linkId, url)
	{
			$.post("ajax/updateLinkCount.php",{linkId: linkId})
			.done(function(result)
			 	{
			 		if(result!="")
			 		{
			 			alert(result);
			 			return;
			 		}

			 		window.location.href = url;
				});
	}

	