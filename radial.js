	
		$(function() {
		
			$('ul.radial').bind('click',function() {
				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					// position all the items in a circle around the center
					var degrees = 270;
					var count = $(this).children('li').length-1;
					var radius = 100;
					var spread = 90;
					console.log("there are " + count + " items");
					
					// lets do some trig!
					$(this).children('li').each(function() {
						if (!$(this).hasClass('button')) { 
							var radians = degrees * Math.PI / 180

							var x = Math.cos(radians) * radius;
							var y = Math.sin(radians) * radius;
							
							console.log("Degrees: " + degrees);
							console.log("X: " + x + " Y: " + y);
							$(this).css('left',x);
							$(this).css('top',y);
							
							degrees += spread/(count-1);					
						}
					});
				} else {
					$(this).children('li').each(function() {
						if (!$(this).hasClass('button')) { 
							$(this).css('left','0px');
							$(this).css('top','0px');
						}
					});
				}
				
				
			});
		});	
	