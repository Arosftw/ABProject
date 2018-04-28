var app = new Vue({
    el: '#app',
    data: {
        showService: 1,
        showMoreBtn: true,
        hideMoreBtn: false,
        showC: true,
        hideC: false,
        windowWidth: "",
        kvHeight: 700
    },
    methods: {
        show: function(number) {
            this.showService = number;
        },
        toggleClass: function(event) {
            if (this.isActive) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        },
        hideMoreBox: function() {
            this.showMore = false;
            this.showMoreBtn = true;
            this.hideMoreBtn = false;
        },
        showCaution: function() {
            $('.cautions-box').addClass('max');
            $('.whitebg').hide();
            this.showC = false;
            this.hideC = true;
        },
        hideCaution: function() {
            $('.cautions-box').removeClass('max');
            $('.whitebg').show();
            this.showC = true;
            this.hideC = false;
        },
        getWindowWidth: function() {
            var w = this.windowsWidth;
            this.windowsWidth = document.documentElement.clientWidth;
            var h = this.kvHeight;
            var per = w / 1920;
            h = 700 * per;
            this.kvHeight = h;
        },
    },
    created: function() {
        this.getWindowWidth();
    },
    mounted: function() {
        AOS.init();
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
            //Init
            this.getWindowWidth();
        });

        $(document).on("click",".qa-box", function() {    
            var qa = $(this).find(".qa-anser");
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');    
            } else {
                $(this).addClass('active');
            }
        });

        $(document).on("click","#note", function() {    
            var note = $(".note");
            note.toggleClass('active');            
        });
        $(document).on("click",".nav-item", function() {    
            var windowsWidth = document.documentElement.clientWidth;
            if (windowsWidth <= 480) {
                $(".navbar-toggler").click();    
            }            
        });

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