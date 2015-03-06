
$(document).ready(function(){

	var $halfWidth = $('body').width()/2-360;
	$('.title').delay(1000).fadeIn(2000);
	$('.heading-container').delay(1000).animate({
        left: $halfWidth

    }, 700, function(){
    	$('.created-by-text').fadeIn(2000);
    });

	  var _SlideshowTransitions = [
	  		{$Duration:1500,x:0.2,y:-0.1,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$JssorEasing$.$EaseInWave,$Top:$JssorEasing$.$EaseInWave,$Clip:$JssorEasing$.$EaseLinear},$Round:{$Left:0.8,$Top:2.5}},
	  		{$Duration:1500,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInWave,$Top:$JssorEasing$.$EaseInWave,$Clip:$JssorEasing$.$EaseOutQuad},$Round:{$Left:0.8,$Top:2.5}},
	  		{$Duration:1200,x:0.2,y:-0.1,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$JssorEasing$.$EaseInWave,$Top:$JssorEasing$.$EaseInWave,$Clip:$JssorEasing$.$EaseOutQuad},$Round:{$Left:1.3,$Top:2.5}}
	  ];
        var options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                }
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    





});