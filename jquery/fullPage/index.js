var slider = {
    slideHeight: [       
        $('.slide1').offset().top,  //每一个块对应的高度
        $('.slide2').offset().top,
        $('.slide3').offset().top,
        $('.slide4').offset().top,
        $('.slide5').offset().top,
    ],
    $nav: $('.Jnav li'),    //边上导航
    $slide: $('.Jslide'),   //滚动容器
    index: 0,             //记录滚动第几个
    moving: false,         //用作当前元素是否在滚动
    speed:1000,           //滚动速度
    init: function () {
        var t = this;
        t.$nav.eq(t.index).addClass('active');
        t.bind();
    },
    /**
     * 滚动函数，参数：是对应块的索引值
     */
    slide: function (index) {
        var t = this;
        t.$slide.animate({
            'top': -t.slideHeight[index]
        },1000,function(){
            t.moving = false;
        });
        t.$nav.removeClass('active');
        t.$nav.eq(index).addClass('active');
    },
    bind: function () {
        var t = this;
        $(document).on("mousewheel DOMMouseScroll", function (e) {
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

            if(!t.moving){
                t.moving = true;
                if (delta > 0) {
                    // 向上滚
                    t.index--;
                    if (t.index < 0) {
                        t.index = 0;
                    }
                } else if (delta < 0) {
                    // 向下滚
                    t.index++;
                    if (t.index >= 4) {
                        t.index = 4;
                    }

                }
                t.slide(t.index);
            }
            
        });
        //鼠标hover对应导航的事件绑定
        t.$nav.on('mouseover',function(){
            var _index = $(this).index();
            t.index = _index;
            t.slide(t.index);
        })
    }
}
slider.init();