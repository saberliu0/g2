
$(function () {
    // 字体大小
   (function(doc,win){

    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize' ,
    recalc = function()
    {
      var clientWidth = docEl.clientWidth;
      if(!clientWidth) return;
      if(clientWidth>640){
      clientWidth=640;
    }
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
  };
  recalc();
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt,recalc,false);
  doc.addEventListener('DOMContentLoaded',recalc,false);
  })(document,window);

    /*********导航下拉框**********/
    // $(".nav_box > .yiji").hover(function () {
    //     $(this).find(".libox").stop(true, false).slideDown();
    // },function () {
    //     $(this).find(".libox").slideUp();
    // });
     

    $(".carousel").carousel({
          interval: 4000
    })
    $(".carousel").carousel("next")
    $(".carousel").carousel("prev")
    
    // 头部
    $(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT >50) {
            $("#header").addClass("on");
        } else {
            $("#header").removeClass("on");
        }
    });
    
    
    // banner
    var mySwiperB = new Swiper('.mobBanner',{
        loop: true,
        autoplay: 3000,
        pagination: '.pagination',
    });    
    // 手机课程介绍
      $(".swiper-kc").swiper({
          loop: true,
          slidesPerView: 2,
          autoplay : 3000,
          speed:1000,
          paginationClickable :true,
          grabCursor : true,
          parallax:true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
      });
      
    // 师资风采轮播
      var swiper = new Swiper('.pro_point', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween:36,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    // 选项卡
      $(function(){
          $(".slide_pro .hd .pro_point .point").click(function(){
             $(this).addClass("on").siblings().removeClass("on");
             var index=$(this).index();
             $(".slide_pro .bd > .detil").eq(index).show().siblings().hide();
          });
      });
     
     // 样式
     $(".main_new .newlist ul li:nth-child(2n)").addClass("li2");
     $(".main_new .newlist ul li:nth-child(2n+1) .new_l").addClass("fadeInLeft");
     $(".main_new .newlist ul li:nth-child(2n+1) .new_r").addClass("fadeInLeft");
     $(".main_new .newlist ul li:nth-child(2n) .new_l").addClass("fadeInRight");
     $(".main_new .newlist ul li:nth-child(2n) .new_r").addClass("fadeInRight");

   //隐藏导航跟wrap的切换
    $(".mol_navbutton,.navbtn,.navbtn1").click(function(){
      $(".left_nav").removeClass("page-prev").addClass("page-in");
      $(".wrap").removeClass("page-active").addClass("page-next page-in")
      $(".opacity2").show()
      // pageSlideOver();
    })
    $(".opacity2,.class-close").on('click touchstart',function(){
      $(".left_nav").addClass("page-prev page-out")
      $(".wrap").removeClass("page-next").addClass(" page-out")
      $(".opacity2").hide()
      // pageSlideOver();
      return false;
    });

    
    // 侧边二级导航下拉
      $(".ericon").click(function(){
          $(this).toggleClass("xz").parents().siblings().find(".ericon").removeClass("xz");
          $(this).parents().siblings().find(".menu_body").hide(300);
          $(this).siblings(".menu_body").slideToggle()
      })
    // 侧边三级下拉
      $(".thricon").click(function(){
          $(this).toggleClass("tz").parents().siblings().find(".thricon").removeClass("tz");
          $(this).parents().siblings().find(".thr_body").hide(300);
          $(this).siblings(".thr_body").slideToggle()
      })
   
    // animate鼠标滚动渐入
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    
    
    // 内页手机分类
      $(".fenlei").click(function(){
          $(".nav_ny").slideToggle()
          $(".span > ul").slideUp() 
      })
      
      var windowW = $('body').width();
      if(windowW > 767){
          $(".nav_ny .ce li").click(function(){
             $(".nav_ny .ce li ul.er").css({left:-$(".nav_ny .ce li").width()*$(this).index()});
          });
          $(".nav_ny .er li").click(function(){
             $(".nav_ny .er li ul.thr").css({left:-$(this).width()*$(this).index()});
          });
      };

    
    //字体上下拉开始
      $(".span").click(function(){
          $(this).toggleClass("span_h")
          $(".span > ul").slideToggle()
          $(".nav_ny").slideUp()
      })
      $(".span ul li.zi1").click(function(){
          $(".edite").removeClass("span-zi2")
          $(".edite").removeClass("span-zi3")
          $(".edite").addClass("span-zi1")
      })
      $(".span ul li.zi2").click(function(){
          $(".edite").removeClass("span-zi1")
          $(".edite").removeClass("span-zi3")
          $(".edite").addClass("span-zi2")
      })
      $(".span ul li.zi3").click(function(){
          $(".edite").removeClass("span-zi1")
          $(".edite").removeClass("span-zi2")
          $(".edite").addClass("span-zi3")
      })      
    //字体上下拉结束

     // 产品详情页
      $(".swiper-pro").swiper({
          loop: true,
          autoplay : 3000,
          speed:1000,
          paginationClickable :true,
          grabCursor : true,
          parallax:true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
      });
    
});

$(function(){
    $(".ce > li > a").click(function(){
       $(this).addClass("xz").parents().siblings().find("a").removeClass("xz");
       $(this).parents().siblings().find(".er").hide(300);
       $(this).siblings(".er").toggle(300);
       // $(this).parents().siblings().find(".er > li > .thr").hide().parents().siblings().find(".thr_nr").hide();
    
  })
  
    $(".er > li > a").click(function(){
        $(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        $(this).parents().siblings().find(".thr").hide(300);  
        $(this).siblings(".thr").toggle(300); 
  })

  //   $(".thr > li > a").click(function(){
  //      $(this).addClass("xuan").parents().siblings().find("a").removeClass("xuan");
  //      $(this).parents().siblings().find(".thr_nr").hide(); 
  //      $(this).siblings(".thr_nr").toggle();
  // })

})