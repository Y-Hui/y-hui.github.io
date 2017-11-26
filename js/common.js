$(function () {
    // 遮罩层（overlay）
    var oNavBtn = $(".nav-btn");
    var oMask = $(".overlay");
    var oBtn2 = $(".overlay-btn");
    oNavBtn.click(function () {
        oMask.addClass("overlay-open");
    });
    oBtn2.click(function () {
        oMask.removeClass("overlay-open");
    });

    // 项目界面选项（project item）
    var oItem = $(".project li:first");
    oItem.addClass("active");

    // nav active
    var oTitle = $(".banner-title").html();
    if (oTitle == "Project") {
        var oNav = $(".nav-item li:eq(1)");
        oNav.addClass("active");
    }
    else if (oTitle == "Design") {
        var oNav = $(".nav-item li:eq(2)");
        oNav.addClass("active");
    }
    else if (oTitle == "About") {
        var oNav = $(".nav-item li:eq(3)");
        oNav.addClass("active");
    }
    else {
        var oNav = $(".nav-item li:first");
        oNav.addClass("active");
    }

    // top btn
    var top = $('.scroll-top');
    top.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    })

    document.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 100) {
            top.addClass('opacity');
        } else {
            top.removeClass('opacity');
        }
    });
});