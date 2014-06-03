// Image centering iside a container
(function($) {
    $.fn.imgAdCentrum = function(options) {
        var settings = $.extend({
            baseLine: 21
        }, options);

        return this.each(function() {
            var $this = $(this);
                container = $this.parent(),

                imgWidth = $this.width(),
                imgHeight = $this.height(),
                imgRatio = imgWidth / imgHeight,

                containerWidth = container.width(),
                containerHeight = container.outerHeight(),
                containerCalculatedHeight = (Math.round(containerHeight / settings.baseLine)) * settings.baseLine,
                containerRatio = containerWidth / containerCalculatedHeight;

                container.css({
                    height: containerCalculatedHeight
                });
            
            if (imgRatio >= containerRatio){
                $this.css({
                    height: 100 + "%", // img height  = container height

                    // containerHeight * containerRatio = containerWidth
                    // imgW = contH * imgR
                    // WebkitTransform: 'translate(' + ((containerHeight * imgRatio) -  containerWidth) / 2 * -1 + 'px, 0)'
                });
                $this.velocity({
                    translateX: ((containerHeight * imgRatio) -  containerWidth) / 2 * -1,
                });

            } else {
                $this.css({
                    width: 100 + "%",
                    // WebkitTransform: 'translate(0,' + ((containerWidth / imgRatio) -  containerHeight) / 2 * -1 + 'px)'
                });
                $this.velocity({
                    translateY: ((containerWidth / imgRatio) -  containerHeight) / 2 * -1,
                });
            }

        });
    }
})(jQuery);
