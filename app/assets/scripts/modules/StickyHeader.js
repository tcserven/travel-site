import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		// Create a collection of the 3 links
		this.pageSections = $('.page-section');
		this.headerLink = $('.primary-nav a');
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.resetPageSectionWaypoints();

	}

	// enabling smooth scrolling
	addSmoothScrolling() {
		this.headerLink.smoothScroll({speed:1500});
	}

	createHeaderWaypoint() {
		// At this point before the waypoint object this is still referring to the StickHeader class
		var that = this; 
		// want to create an object that is a new instance of the Waypoint class with properties
		new Waypoint({
			// waypoints is expecting a JS native DOM element. Currently we are passing it a jquery object. We can access the native DOM element within a jquery object easily. This works bc the first item in a jquery array like object is always a pointer to the native DOM element.    
			// element: this.headerTriggerElement;
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				// Here, this is no longer pointing to our class (StickyHeader). So we cant use this anymore. We need to set that = this. 
				// this.siteHeader.addClass("site-header--dark");
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == 'down') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLink.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}	
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == 'up') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLink.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}	
				},
				offset: '-40%'
			});
		});
	}

	resetPageSectionWaypoints() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == 'up') {
					that.headerLink.removeClass('is-current-link');
				}
			},
			offset: "-30%"
		});
	}
}

export default StickyHeader; 