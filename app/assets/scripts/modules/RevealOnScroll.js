import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	// create two parameters to accept the incoming arugments
	constructor(els, offset) {
		// This property is a collection of elements. 4 DOM elements
		// this.itemsToReveal = $('.feature-item, .testimonial');
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass('reveal-item--is-visible');
				},
				// this is referring to the individual waypoint object being craeted
				offset: that.offsetPercentage
			});
		});
	}

}

export default RevealOnScroll;