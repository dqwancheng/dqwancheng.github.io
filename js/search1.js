// //js中(function(){…})()立即执行函数写法
// (function () {
//   //onresize事件会在当浏览器窗口被调整大小时触发
//   window.onresize = function () {
//     ShowHideElement("i-link-box", "linkList-item", 845);
//   }
//   window.onload = function () {
//     ShowHideElement("i-link-box", "linkList-item", 845);
//   }

//   function ShowHideElement(Element1, Element2, Vaule) {
//     var Person = document.getElementsByClassName(Element1);
//     var BoxHeight = document.getElementsByClassName(Element2);
//     var WindowHeight = window.innerHeight || document.body.clientHeight;
//     //遍历获取到的元素
//     for (var i = 6; i < Person.length; i++) {
//       if (WindowHeight <= Vaule && deviceVal === "pc") {
//         Person[i].style.display = "none";
//         BoxHeight[0].style.marginTop = "5px";
//       } else {
//         Person[i].style.display = "block";
//         BoxHeight[0].style.marginTop = "0px";
//       }
//     }
//   }
//   window.ShowHideElement = ShowHideElement;
// }());
//调用另一个JS文件
document.write("<script language=\"javascript\" src=\"js/data.js\"><\/script>")
const search_engine_top = {
    'baidu': ["https://www.baidu.com/s", "wd", "百度一下，你就知道", "icon-baidu"],
    'google': ['https://www.google.com/search', 'q', "Google 搜索", "icon-google"],
    'bing': ['https://cn.bing.com/search', 'q', "微软 Bing", "icon-Bing"],
    'sougou': ['https://www.sogou.com/web', 'query', "上网从搜狗开始", "icon-sougousousuo"],
    'dogedoge': ['https://www.dogedoge.com/results', 'q', "不追踪，不误导", "icon-duojisousuo"],
    'scholar': ['https://scholar.google.com/scholar', 'q', "谷歌学术", "icon-google"]
}

var now = -1;
var resLength = 0;
var listIndex = -1;
var hotList = 0;
//默认搜索引擎切换
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = './logo.jpg';
//localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。
var storage = window.localStorage;
if (!storage.stopHot) {
    storage.stopHot = true
}
storage.stopHot == 'false' ? $('#hot-btn').prop('checked', false) : $('#hot-btn').prop('checked', true);
var ssData = storage.searchEngine;
if (storage.searchEngine != undefined) {
    ssData = ssData.split(',');
    thisSearch = ssData[0];
    $('#search-icon').children().attr('xlink:href', ssData[1])
    $('#txt').attr('placeholder', ssData[2])
}

function getHotkeyword(value) {
    $.ajax({
        type: "GET",
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
        async: true,
        data: {
            wd: value
        },
        dataType: "jsonp",
        jsonp: "cb",
        success: function(res) {
            $("#box ul").text("");
            hotList = res.s.length;
            if (hotList) {
                $("#box").css("display", "block");
                for (var i = 0; i < hotList; i++) {
                    if (i === hotList - 1) {
                        $("#box ul").append('<li id="lastHot"><span>' + (i + 1) + "</span>" + res.s[i] + "</li>");
                    } else {
                        $("#box ul").append("<li><span>" + (i + 1) + "</span>" + res.s[i] + "</li>");
                    }
                    $("#box ul li").eq(i).click(function() {
                        $('#txt').val(this.childNodes[1].nodeValue);
                        window.open(thisSearch + this.childNodes[1].nodeValue);
                        $('#box').css('display', 'none')
                    });
                    if (i === 0) {
                        $("#box ul li").eq(i).css({
                            "border-top": "none"
                        });
                        $("#box ul span").eq(i).css({
                            "color": "#fff",
                            "background": "#f54545"
                        })
                    } else if (i === 1) {
                        $("#box ul span").eq(i).css({
                            "color": "#fff",
                            "background": "#ff8547"
                        })
                    } else if (i === 2) {
                        $("#box ul span").eq(i).css({
                            "color": "#fff",
                            "background": "#ffac38"
                        })
                    }
                }
            } else {
                $("#box").css("display", "none")
            }
        },
        error: function(res) {
            console.log(res)
        }
    })
}

// 按键松开时执行
$("#txt").keyup(function(e) {
    if ($(this).val()) {
        if (e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true') {
            return
        }
        $("#search-clear").css("display", "block");
        getHotkeyword($(this).val())
    } else {
        $("#search-clear").css("display", "none");
        $("#box").css("display", "none")
    }
});

$("#txt").keydown(function(e) {
    if (e.keyCode === 40) {
        listIndex === (hotList - 1) ? listIndex = 0 : listIndex++;
        $("#box ul li").eq(listIndex).addClass("current").siblings().removeClass("current");
        var hotValue = $("#box ul li").eq(listIndex)[0].childNodes[1].nodeValue;
        $("#txt").val(hotValue)
    }
    if (e.keyCode === 38) {
        if (e.preventDefault) {
            e.preventDefault()
        }
        if (e.returnValue) {
            e.returnValue = false
        }
        listIndex === 0 || listIndex === -1 ? listIndex = (hotList - 1) : listIndex--;
        $("#box ul li").eq(listIndex).addClass("current").siblings().removeClass("current");
        var hotValue = $("#box ul li").eq(listIndex)[0].childNodes[1].nodeValue;
        $("#txt").val(hotValue)
    }
    if (e.keyCode === 13) {
        window.open(thisSearch + $("#txt").val());
        $("#box").css("display", "none");
        $("#txt").blur();
        $("#box ul li").removeClass("current");
        listIndex = -1
    }
});
$("#search-clear").click(function() {
    $('#txt').val("");
    $('#search-clear').css('display', 'none');
    $("#box").css("display", "none");
    console.log("清除输入框");
});
$("#search-enter").click(function() {
    window.open(thisSearch + $('#txt').val());
});
$("#txt").focus(function() {
    if ($(this).val() && storage.stopHot == 'true') {
        getHotkeyword($(this).val())
    }
});
$("#txt").blur(function() {
    setTimeout(function() {
        $("#box").css("display", "none")
    }, 100)
});
$(function() {
    //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
    var search = {
        data: [{
            name: '百度',
            icon: 'icon-baidu',
            url: 'https://www.baidu.com/s?wd='
        }, {
            name: '谷歌',
            icon: 'icon-google',
            url: 'https://www.google.com/search?q='
        }, {
            name: '必应',
            icon: 'icon-biying',
            url: 'https://cn.bing.com/search?q='
        }, {
            name: 'GitHub',
            icon: 'icon-github1',
            url: 'https://github.com/search?utf8=✓&q='
        }, {
            name: '360',
            icon: 'icon-360sousou',
            url: 'https://www.so.com/s?q='
        }, {
            name: '搜狗',
            icon: 'icon-sougousousuo',
            url: 'https://www.sogou.com/web?query='
        }, {
            name: '多吉',
            icon: 'icon-duojisousuo',
            url: 'https://www.dogedoge.com/results?q='
        }, {
            name: '淘宝',
            icon: 'icon-taobao',
            url: 'https://s.taobao.com/search?q='
        }, {
            name: '京东',
            icon: 'icon-jingdong',
            url: 'http://search.jd.com/Search?keyword='
        }, {
            name: '天猫',
            icon: 'icon-tmall',
            url: 'https://list.tmall.com/search_product.htm?q='
        }, {
            name: '知乎',
            icon: 'icon-zhihu',
            url: 'https://www.zhihu.com/search?type=content&q='
        }, {
            name: '微博',
            icon: 'icon-weibo1',
            url: 'https://s.weibo.com/weibo/'
        }, {
            name: 'B站',
            icon: 'icon-bilibili',
            url: 'http://search.bilibili.com/all?keyword='
        }, {
            name: '豆瓣',
            icon: 'icon-douban1',
            url: 'https://www.douban.com/search?source=suggest&q='
        }, {
            name: '优酷',
            icon: 'icon-youku',
            url: 'https://so.youku.com/search_video/q_'
        }]
    }

    for (var i = 0; i < search.data.length; i++) {
        var addList = '<li><svg class="icon" aria-hidden = "true" ><use xlink:href="#' + search.data[i].icon +
            '"></use></svg>' + search.data[i].name + '</li > '
        $('.search-engine-list').append(addList);
    }

    $('#search-icon, .search-engine').hover(function() {
        $('.search-engine').css('display', 'block')
    }, function() {
        $('.search-engine').css('display', 'none')
    });

    $('#hot-btn').on('click', function() {
        if (storage.stopHot == 'true') {
            $(this).prop('checked', false)
            storage.stopHot = false
        } else {
            storage.stopHot = true
            $(this).prop('checked', true)
        }
        console.log(storage.stopHot)
    });

    $('.search-engine-list li').click(function() {
        var _index = $(this).index();
        var thisIcon = $(this).children().children().attr('xlink:href');
        var thisText = $(this).text() + '搜索';
        console.log(thisText);
        $('#txt').attr('placeholder', thisText)
        $('#search-icon use').attr('xlink:href', thisIcon)
        thisSearch = search.data[_index].url;
        console.log(thisSearch)
        $('.search-engine').css('display', 'none')
        storage.searchEngine = [thisSearch, thisIcon, thisText]
    });

    // $('#search-tab span').click(function(){
    //     var keys = Object.keys(search_engine_top)
    //     for (var key of keys){
    //         var topUrl = search_engine_top.key[0];
    //         var topKey = search_engine_top.key[1];
    //         var topText = search_engine_top.key[2];
    //         var topIcon = "#" + search_engine_top.key[3];
    //         topUrl = topUrl + "?" + topKey + "=";
    //         console.log(topUrl);
    //         console.log(topIcon);
    //         console.log(topText);
    //         $('#txt').attr('placeholder', topText);
    //         $('#search-icon use').attr('xlink:href', topIcon);
    //         $('.search-engine').css('display', 'none');
    //         storage.searchEngine = [topUrl, topIcon, topText];
    //         // event.stopPropagation();
    //         var ssData = storage.searchEngine;
    //         if (storage.searchEngine != undefined) {
    //             ssData = ssData.split(',');
    //             thisSearch = ssData[0];
    //             $('#search-icon').children().attr('xlink:href', ssData[1])
    //             $('#txt').attr('placeholder', ssData[2])
    //         }
    //     }
    // });
    // $('.headline-content.search-tab span').click(function() {
    // $('.headline-content.search-tab span').bind("click", function() {
    $('#baidu').click(function() {
        console.log("OK");
        var topUrl = search_engine_top.baidu[0];
        var topKey = search_engine_top.baidu[1];
        var topText = search_engine_top.baidu[2];
        var topIcon = "#" + search_engine_top.baidu[3];
        topUrl = topUrl + "?" + topKey + "=";
        console.log(topUrl);
        console.log(topIcon);
        console.log(topText);
        $('#txt').attr('placeholder', topText);
        $('#search-icon use').attr('xlink:href', topIcon);
        $('.search-engine').css('display', 'none');
        storage.searchEngine = [topUrl, topIcon, topText];
        // event.stopPropagation();
        var ssData = storage.searchEngine;
        if (storage.searchEngine != undefined) {
            ssData = ssData.split(',');
            thisSearch = ssData[0];
            $('#search-icon').children().attr('xlink:href', ssData[1])
            $('#txt').attr('placeholder', ssData[2])
        }

    });
    $('#google').click(function() {
        console.log("OK");
        var topUrl = search_engine_top.google[0];
        var topKey = search_engine_top.google[1];
        var topText = search_engine_top.google[2];
        var topIcon = "#" + search_engine_top.google[3];
        topUrl = topUrl + "?" + topKey + "=";
        console.log(topUrl);
        console.log(topKey);
        console.log(topText);
        $('#txt').attr('placeholder', topText);
        $('#search-icon use').attr('xlink:href', topIcon);
        $('.search-engine').css('display', 'none');
        storage.searchEngine = [topUrl, topIcon, topText];
        // event.stopPropagation();
        var ssData = storage.searchEngine;
        if (storage.searchEngine != undefined) {
            ssData = ssData.split(',');
            thisSearch = ssData[0];
            $('#search-icon').children().attr('xlink:href', ssData[1])
            $('#txt').attr('placeholder', ssData[2])
        }

    });
    $('#bing').click(function() {
        console.log("OK");
        var topUrl = search_engine_top.bing[0];
        var topKey = search_engine_top.bing[1];
        var topText = search_engine_top.bing[2];
        var topIcon = "#" + search_engine_top.bing[3];
        topUrl = topUrl + "?" + topKey + "=";
        console.log(topUrl);
        console.log(topKey);
        console.log(topText);
        $('#txt').attr('placeholder', topText);
        $('#search-icon use').attr('xlink:href', topIcon);
        $('.search-engine').css('display', 'none');
        storage.searchEngine = [topUrl, topIcon, topText];
        // event.stopPropagation();
        var ssData = storage.searchEngine;
        if (storage.searchEngine != undefined) {
            ssData = ssData.split(',');
            thisSearch = ssData[0];
            $('#search-icon').children().attr('xlink:href', ssData[1])
            $('#txt').attr('placeholder', ssData[2])
        }

    });
    $('#sougou').click(function() {
        console.log("OK");
        var topUrl = search_engine_top.sougou[0];
        var topKey = search_engine_top.sougou[1];
        var topText = search_engine_top.sougou[2];
        var topIcon = "#" + search_engine_top.sougou[3];
        topUrl = topUrl + "?" + topKey + "=";
        console.log(topUrl);
        console.log(topKey);
        console.log(topText);
        $('#txt').attr('placeholder', topText);
        $('#search-icon use').attr('xlink:href', topIcon);
        $('.search-engine').css('display', 'none');
        storage.searchEngine = [topUrl, topIcon, topText];
        // event.stopPropagation();
        var ssData = storage.searchEngine;
        if (storage.searchEngine != undefined) {
            ssData = ssData.split(',');
            thisSearch = ssData[0];
            $('#search-icon').children().attr('xlink:href', ssData[1])
            $('#txt').attr('placeholder', ssData[2])
        }

    });
    $('#dogedoge').click(function() {
        console.log("OK");
        var topUrl = search_engine_top.dogedoge[0];
        var topKey = search_engine_top.dogedoge[1];
        var topText = search_engine_top.dogedoge[2];
        var topIcon = "#" + search_engine_top.dogedoge[3];
        topUrl = topUrl + "?" + topKey + "=";
        console.log(topUrl);
        console.log(topKey);
        console.log(topText);
        $('#txt').attr('placeholder', topText);
        $('#search-icon use').attr('xlink:href', topIcon);
        $('.search-engine').css('display', 'none');
        storage.searchEngine = [topUrl, topIcon, topText];
        // event.stopPropagation();
        var ssData = storage.searchEngine;
        if (storage.searchEngine != undefined) {
            ssData = ssData.split(',');
            thisSearch = ssData[0];
            $('#search-icon').children().attr('xlink:href', ssData[1])
            $('#txt').attr('placeholder', ssData[2])
        }

    });
    $('#scholar').click(function() {
        console.log("OK");
        var topUrl = search_engine_top.scholar[0];
        var topKey = search_engine_top.scholar[1];
        var topText = search_engine_top.scholar[2];
        var topIcon = "#" + search_engine_top.scholar[3];
        topUrl = topUrl + "?" + topKey + "=";
        console.log(topUrl);
        console.log(topKey);
        console.log(topText);
        $('#txt').attr('placeholder', topText);
        $('#search-icon use').attr('xlink:href', topIcon);
        $('.search-engine').css('display', 'none');
        storage.searchEngine = [topUrl, topIcon, topText];
        // event.stopPropagation();
        var ssData = storage.searchEngine;
        if (storage.searchEngine != undefined) {
            ssData = ssData.split(',');
            thisSearch = ssData[0];
            $('#search-icon').children().attr('xlink:href', ssData[1])
            $('#txt').attr('placeholder', ssData[2])
        }

    });
})