// Dynamic hero banner image
var $img = $('.page-hero .banner-image .javelin_textItem img'),
    $src = $img.attr('src'),
    $banner = $('.page-hero .banner-image'),
    $admin = $('.is-admin'),
    $javelinRegion = $('.page-hero .banner-image .javelin_region'); // gap will appear if whole region isn't removed - using jQuery selector because ie 11 -9 does not support .remove() in vanilla js
	
// Hide javelin region when logged out
// Add banner image to hero banner
if(!$admin.length) {
    $banner.css('background-image', 'url('+ $src +')');
	$javelinRegion.remove();
}


// Example here 
suburbancabinets2.javelincms.com