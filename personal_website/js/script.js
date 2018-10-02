$(document).ready(function () {

$(function() {
    $("a").each(function() {
        $(this).mouseover(function() {
            $(this).css ("color", "grey");
        });
        $(this).mouseout(function () {
            $(this).css("color", "#FFF"); 
        });
    });
});
    $(function() {
    $("col-sm-12 a").each(function() {
        $(this).mouseover(function() {
            $(this).css ("background-color", "white");
            $(this).css ("color", "black");
            $(this).css ("border-color", "white");
        });
        $(this).mouseout(function () {
            $(this).css("background-color", "transparent"); 
            $(this).css("color", "white");
        });
    });
});

        $(function() {
    $("nav a").each(function() {
        $(this).mouseover(function() {
            $(this).css ("background-color", "white");
            $(this).css ("color", "black");
            $(this).css ("border-color", "white");
        });
        $(this).mouseout(function () {
            $(this).css("background-color", "transparent"); 
            $(this).css("color", "white");
        });
    });
});
     $(function() {
    $(".resume-btn a").each(function() {
        $(this).mouseover(function() {
            $(this).css ("background-color", "white");
            $(this).css ("color", "dark-grey");
            $(this).css ("border-color", "white");
            $(this).css ("text-decoration", "none");
        });
        $(this).mouseout(function () {
            $(this).css("background-color", "transparent"); 
            $(this).css("color", "white");
        });
    });
});
     $(function() {
    $(".chat-btn a").each(function() {
        $(this).mouseover(function() {
            $(this).css ("background-color", "black");
            $(this).css ("color", "white");
            $(this).css ("border-color", "black");
            $(this).css ("text-decoration", "none");
        });
        $(this).mouseout(function () {
            $(this).css("background-color", "transparent"); 
            $(this).css("color", "black");
        });
    });
});
$(function() {
    $("img").each(function() {
        $(this).mouseover(function() {
            $(this).css ("border-color", "grey");
        });
        $(this).mouseout(function () {
            $(this).css("border-color", "#FFF"); 
        });
    });
});
    /*$(function() {
    $("li").each(function() {
        $(this).mouseover(function() {
            $(this).css ("color", "grey");
        });
        $(this).mouseout(function () {
            $(this).css("color", "#000"); 
        });
    });
});*/
    
});