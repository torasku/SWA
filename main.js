var menu = $("#menu").menu().hide();
$( function() {
    $("#playerMenu").click(function (){
        $("#menu").menu().show();
    });
});

$(document).one("click", function(){
    menu.hide();
});