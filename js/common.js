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

});

$(function () {
    // 项目界面选项（project item）
    var oItem = $(".project li:first");
    oItem.addClass("active");
});

$(function () {
    // nav active
    var oTitle = $(".banner-title").html()
    if(oTitle == "project"){
        var oNav = $(".nav-item li:eq(1)");
        oNav.addClass("active");
    }
    else if (oTitle == "design"){
        var oNav = $(".nav-item li:eq(2)");
        oNav.addClass("active");
    }
    else if (oTitle == "about"){
        var oNav = $(".nav-item li:eq(3)");
        oNav.addClass("active");
    }
    else{
        var oNav = $(".nav-item li:first");
        oNav.addClass("active");
    }
});

