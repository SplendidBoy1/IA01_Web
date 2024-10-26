
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
    console.log("Dat")
    $(".toggle").toggle()
    // $(".toggle").css(" visibility", "visible")
})

$("#bold_check").on("click", function(){
    $(".toggle").toggle()
    let flag = $("#bold_check").is(":checked")
    if (flag){
        $(".show_all_sample").css("font-weight", "bold")
    }
    else{
        $(".show_all_sample").css("font-weight", "")
    }
})

$("#italic_check").on("click", function(){
    $(".toggle").toggle()
    let flag = $("#italic_check").is(":checked")
    if (flag){
        $(".show_all_sample").css("font-style", "italic")
    }
    else{
        $(".show_all_sample").css("font-style", "")
    }
    // console.log("asdf")
})

$("#underline_check").on("click", function(){
    $(".toggle").toggle()
    let flag = $("#underline_check").is(":checked")
    if (flag){
        $(".show_all_sample").css("text-decoration", "underline")
    }
    else{
        $(".show_all_sample").css("text-decoration", "")
    }
    // console.log("asdf")
})

$("#background_color").on("input", function(){
    // $(".toggle").toggle()
    let value_background = this.value
    $(".show_all_sample").css("background-color", value_background)
})

$(".color_input").on("input", function(){
    // $(".toggle").toggle()
    let value_background = this.value
    $(".show_all_sample").css("color", value_background)
})

function clear_hightlight(){
    $(".text_lorem span").each(function(){
        // console.log($(this).text())
        let value = $(this).text()
        // $(this).remove()
        $(this).replaceWith(value)
      });
}

$("#highlight").on("click", function(){
    clear_hightlight();
    let regex_text = $(".process_text_input").val()
    let data = $(".text_lorem").html()
    // console.log(data)
    if (regex_text != ""){
        let regex = new RegExp(regex_text, "g");

        let hightlight = data.match(regex);
        let matches = [...data.matchAll(regex)];
        for (let i = 0; i < hightlight.length; i++){
            data = data.replaceAt(matches[i].index, '<span class=\"show_all_sample\">' + hightlight[i] + '</span>')
            console.log("Asdf")
        }
        console.log(matches.length)
        console.log(hightlight)
        // let hightlight = data.replace(regex, '<span class=\"show_all_sample\">' + data. + '</span>')
        // console.log(hightlight)
        $(".text_lorem").html(data)
    }
    // let newText = text.replace(re, `<mark>${searched}</mark>`);
})

$("#delete").on("click", function(){
    console.log("asdf")
})

$("#reset").on("click", function(){
    console.log("asdf")
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