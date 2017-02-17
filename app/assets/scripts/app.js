import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

// creating object that are new instances of the above classes
var mobileMenu = new MobileMenu();

// var revealOnScroll = new RevealOnScroll();
// We are making this reusable
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
