var app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
        
    },
    created: function() {
    },
    mounted: function() {
        $(function(){
            $.extend($.easing,{
                easeOutExpo: function (x, t, b, c, d) {
                    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
                }
            });
            $('.scrollTo').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if( target.length ) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 85
                    }, {'duration':700, 'easing':'easeOutExpo'});
                }
            });
            
        });

    }
})