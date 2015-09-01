
//desktop mode script
$("#eric").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#landing").toggleClass("hide show");
});

$("#about").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#aboutBox").toggleClass("hide show");
});

$("#dreamTeam").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#contentDreamTeam").toggleClass("hide show");
});

$("#feedMe").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#contentFeedMe").toggleClass("hide show");
});

$("#diner").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#contentDiner").toggleClass("hide show");
});

//phone mode script

$("#phoneEric").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#phoneLanding").toggleClass("hide show");
});

$("#phoneAboutMe").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#phoneAboutMeContent").toggleClass("hide show");
});
