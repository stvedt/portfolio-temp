$.backstretch("temp/images/background.jpg");

$(document).ready(function() {
    var caption = $(".caption")
    caption.css("right", "-400px" );

      $(".work").mouseenter(function () {
        $this = $(this);
        
        $this.data("delay", setTimeout( function () {
            $this.children(".caption").animate({"right":"0px"}, 400, "swing");
          }, 400)
        );
       }).mouseleave(function () {
          clearTimeout($this.data("delay"));
         $this.children(".caption").animate({"right":"-400px"}, 200, "swing");
       });

    $(".open_fancybox").click(function() {

    $.fancybox.open([
        {
            href : 'http://stephentvedt.com/temp/images/electronaut/1.jpg'
        },
        {
            href : 'http://stephentvedt.com/temp/images/electronaut/2.jpg'
        },
        {
            href : 'http://stephentvedt.com/temp/images/electronaut/3.jpg'
        },
        {
            href : 'http://stephentvedt.com/temp/images/electronaut/4.jpg'
        }
    ], {
        loop: false
      });

        return false;
    });
});