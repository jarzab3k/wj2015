$( document ).ready(function() {
});
$(function() {
	$( "div.bidding" ).each(function() {
	level = parseInt($(this).attr("level"));
		if ($(this).next().attr("level") == level + 1) {
		$(this).addClass("relay");
	}
	});
	
	$( "body" ).on("click", "div.relay:not('rozwiniete')", function() {
		count = 0;
		clicked = parseInt($(this).attr("level"));
		$(this).nextAll().each(function() {
			sibling_number = parseInt($(this).attr("level"));
			if (sibling_number <= clicked) {
				return false;
			}
			if (sibling_number == clicked + 1) {
				count++;
				if (count < 20)
					$(this).show("slow");
				else
					$(this).css("display", "");
			}
		});
		$(this).addClass( "rozwiniete" );	
	});
			
	$( "body" ).on("click", "div.rozwiniete", function() {
		clicked = parseInt($(this).attr("level"));
		count = 0
		$(this).nextAll().each(function() {
			sibling_number = parseInt($(this).attr("level"));
			if (sibling_number <= clicked) {
				return false;
			} else {
				$(this).removeClass( "rozwiniete" );
				curr = $(this).css('display')
				if (curr != 'none') {
					count++
					if (count < 20)
						$(this).hide("slow");
					else
						$(this).css("display", "none")
				}
			}
		});
		$(this).removeClass( "rozwiniete" );
	});

	$( "body" ).on("contextmenu taphold", "div.relay:not('rozwiniete')", function() {
		clicked = parseInt($(this).attr("level"));
		count = 0
		$(this).nextAll().each(function() {
			sibling_number = parseInt($(this).attr("level"));
			if (sibling_number <= clicked) {
				return false;
			}
			count++;
			if (count < 20)
				$(this).show("slow");
			else
				$(this).css("display", "");
			if ($(this).hasClass('relay'))
				$(this).addClass('rozwiniete')
		});
		$(this).addClass( "rozwiniete" );	
		return false
	});

$(function(){
$('a.hidetoprint').click(function(){
$('div#topmenu').hide();
$('nav').hide();
return false;
});
});

$(function(){
$('a.rozwin').click(function(){
$("div.bidding:not('.level00')").show();
return false;
});
});

});
function fold_everything() {
	count = 0
	$('#bidding .bidding').each(function() {
		depth = parseInt($(this).attr("level"));
		$(this).removeClass('rozwiniete')
		if (depth > 0) {
			curr = $(this).css('display')
			if (curr != 'none') {
				count++
				if (count < 20)
					$(this).hide("slow");
				else
					$(this).css("display", "none")
			}
		}
	})
}
