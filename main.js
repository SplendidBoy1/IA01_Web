
// News box

$(".move_symbol").on("mousedown", function () {
    $(".drag_news").sortable(
        {   
            cursor: "n-resize",
            helper: "clone",
            revert: true,
            axis: "y",
            disabled: false,
            out: function () {
                $(".drag_news").sortable("disable")
            }
        }
    );
})

$(".move_symbol").on("mouseenter", function () {
    $(".move_symbol").css("cursor", "n-resize")
})

$(".more_content_symbol").on("mousedown", function () {
    if ($(this.parentNode.parentNode.children[1]).css("display") == "none"){
        $(this.parentNode.parentNode.children[0]).css("background-color", "orange")
        $(this.parentNode.parentNode.children[0]).css("color", "white")
        $(this.parentNode.parentNode.children[0]).css("opacity", 1)
        $(this.parentNode.parentNode.children[1]).css("display", "inline")
        $(this).text('⏵')
        // $(this).text
    }
    else{
        $(this.parentNode.parentNode.children[1]).css("display", "none")
        $(this).text('🠣')
        $(this.parentNode.parentNode.children[0]).css("background-color", "#FFD3A7")
        $(this.parentNode.parentNode.children[0]).css("color", "black")
        $(this.parentNode.parentNode.children[0]).css("opacity", 0.7)
    }
})

$(".more_content_symbol").on("mouseenter", function () {
    $(".more_content_symbol").css("cursor", "grab")
})

////////////////////
//process text

// $(".dialog").dialog({
//     autoOpen : false, modal : true, show : "blind", hide : "blind"
//   });

$(".toggle").hide()

$(".button_image").on("click", function(){
    console.log("asdf")
    $(".toggle").toggle()
    // $(".toggle").css(" visibility", "visible")
})

// $('.dialog').dialog({
//     autoOpen: true,
//     width: 'auto',
//     modal: true,
//     buttons: {
//         DelUser:{ 
//             class: 'leftButton',
//             text: 'Delete User',
//             click : function (){
//                 alert('delete here');
//             }
//         },
//         "Update User": function () {
//                alert('update here');
//    },
//         Close: function () {
//             $(this).dialog("close");
//         }
//     }
// });