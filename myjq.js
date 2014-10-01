	$(document).ready(function(){
		
	$('#i1').each(function() {
		 animationHover(this, 'rubberBand');
    });
	
	$('#i2').each(function() {
		 animationHover(this, 'rubberBand');
    });
	
	$('#i3').each(function() {
		 animationHover(this, 'rubberBand');
    });
function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}
function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
	 
      element.addClass('animated ' + animation);
		element.style.color='#7B7B7B';
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
}

});