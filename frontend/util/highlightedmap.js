$(function(){
					$.fn.maphilight.defaults = {
				fill: true,
				fillColor: '98bbec',
				fillOpacity: 0.4,
				stroke: true,
				strokeColor: 'ffa8f3',
				strokeOpacity: 1,
				strokeWidth: 1,
				fade: true,
				alwaysOn: false,
				neverOn: false,
				groupBy: false,
				wrapClass: true,
				shadow: false,
				shadowX: 0,
				shadowY: 0,
				shadowRadius: 6,
				shadowColor: '000000',
				shadowOpacity: 0.8,
				shadowPosition: 'outside',
				shadowFrom: false
			}

		$('#ImageMap').maphilight();

		
	});