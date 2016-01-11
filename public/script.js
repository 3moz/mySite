//each of these takes the active content (which has class 'show') and hides it
//in favor of the content we wish to be newly active.


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

$("#bank").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#contentBank").toggleClass("hide show");
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

$("#updates").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#contentUpdates").toggleClass("hide show");
});

//phone mode script

$("#phoneEric").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#phoneProjectsContent").toggleClass("hide show");
});

$("#phoneProjects").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#phoneProjectsContent").toggleClass("hide show");
});

$("#phoneAboutMe").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#phoneAboutMeContent").toggleClass("hide show");
});

$("#phoneUpdates").click(function(){
    var active = $(".show");
    active.toggleClass("hide show");
    $("#phoneUpdatesContent").toggleClass("hide show");
});
