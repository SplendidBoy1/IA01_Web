////Lorem
function generateLoremText(numParagraphs, numWords) {
    var loremText = '';
    var words = [
      'Lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'sed',
      'do',
      'eiusmod',
      'tempor',
      'incididunt',
      'ut',
      'labore',
      'et',
      'dolore',
      'magna',
      'aliqua',
      'Ut',
      'enim',
      'ad',
      'minim',
      'veniam',
      'quis',
      'nostrud',
      'exercitation',
      'ullamco',
      'laboris',
      'nisi',
      'ut',
      'aliquip',
      'ex',
      'ea',
      'commodo',
      'consequat',
      'Duis',
      'aute',
      'irure',
      'dolor',
      'in',
      'reprehenderit',
      'in',
      'voluptate',
      'velit',
      'esse',
      'cillum',
      'dolore',
      'eu',
      'fugiat',
      'nulla',
      'pariatur',
      'Excepteur',
      'sint',
      'occaecat',
      'cupidatat',
      'non',
      'proident',
      'sunt',
      'in',
      'culpa',
      'qui',
      'officia',
      'deserunt',
      'mollit',
      'anim',
      'id',
      'est',
      'laborum',
    ];
  
    for (var i = 0; i < numParagraphs; i++) {
      var paragraph = '';
      for (var j = 0; j < numWords; j++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        paragraph += randomWord + ' ';
      }
      loremText += paragraph;
    }
    return loremText;
  }




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

let lorem = generateLoremText(2 + Math.random() * 5, 20 + Math.random() * 25)
console.log(lorem)
$(".text_lorem").html(lorem)

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
    let data = $(".text_lorem").text()
    let data_html = $(".text_lorem").html()

    console.log(data)
    if (regex_text != ""){
        let regex = new RegExp(regex_text, "g"); 
            let highlights = data_html.replace(regex, function(match) {
                return '<span class="show_all_sample">' + match + '</span>';
            });
            $(".text_lorem").html(highlights)
    }
})

$("#delete").on("click", function(){
    $(".text_lorem span").html("")
})

$("#reset").on("click", function(){
    lorem = generateLoremText(2 + Math.random() * 5, 20 + Math.random() * 25)
    $(".text_lorem").html(lorem)
})


////////////////////////////////
//Drag and drop animal
let index_animal = 1


// function init_drag_drop(){
//     $(".animal_card").draggable({
//         zIndex: 2,
//         revert: "invalid",
//         appendTo: ".drop_box"
//     })

//     // $(".animal_card").data("element_box", $(".animal_card").text())
//     $(".animal_card").each(function(){
//         $(this).data("element_box", $(this).get(0).outerHTML)
//         // console.log($(this).html())
//     })
//     $(".drop_box").droppable({
//         accept: '.animal_card',
//         over: function( event, ui ) {
//             $(this).addClass("holder-place")
//             // $(".holder_place").droppable()
//             // $(this).parentNode
//             // $( this )
//             //   .addClass( "holder-place");
//         },
//         out: function( event, ui ) {
//             $(this).removeClass("holder-place")
//         },
//         drop: function( event, ui ) {
//             $(this).removeClass("holder-place")
//             // $(ui.draggable.data()["element_box"]).remove()
//             console.log((ui.draggable.data("element_box")))
//             // ui.draggable.data()
//             $(this).html(ui.draggable.data("element_box"))
//             $(".animal_card").draggable({
//                 zIndex: 2,
//                 revert: "invalid",
//                 appendTo: ".drop_box"
//             })
//         }
//     })
// }

$("#add_animal").on("click", function () {
    let value_animal = $.parseJSON($(animal).val())
    console.log(value_animal)
    $(".show_animal_box").append("<div class=\"animal_card\" id=\"animal_" + index_animal + "\"><div class=\"image_animal\">" + value_animal["image"] + "</div><div>" + value_animal["name"] +"</div></div>")
    index_animal ++;
    // $(".show_animal_box").sortable(
    //     {
    //         over: function (e, ui){
    //             // console.log(ui.placeholder)
    //             $(ui.placeholder).addClass("holder-place")
    //             $(ui.placeholder).css("visibility", "visible")
    //             // console.log("asdf")
    //         },
    //         start: function(e, ui){
    //             $(ui.placeholder).hide(300);
    //         },
    //         change: function (e,ui){
    //             $(ui.placeholder).hide().show(300);
    //         }
    //         // start: function(e, ui){
    //         //     $(ui.placeholder).hide(300);
    //         // },
    //         // change: function (e,ui){
    //         //     $(ui.placeholder).hide().show(300);
    //         // }
    //     }
    // )
    // $(".show_animal_box").disableSelection();
    // $(".show_animal_box").droppable({
    //     // console.log("Asdfasdf");
    //     hoverClass: "holder-place"
    // })
    // init_drag_drop()
    console.log("Asdfasdf");
})


$(".show_animal_box").sortable(
    {   
        tolerance: "pointer",
        over: function (e, ui){
            // console.log(ui.placeholder)
            $(ui.placeholder).addClass("holder-place")
            $(ui.placeholder).css("visibility", "visible")
            // console.log("asdf")
        },
        // start: function(e, ui){
        //     // console.log($(ui.placeholder))
        //     $(ui.placeholder).hide(300);
        // },
        // change: function (e,ui){
        //     // console.log($(ui.placeholder))
        //     console.log($(ui.item))
        //     $(ui.placeholder).hide().show(300);
        // }
    }
).disableSelection()
// $(".show_animal_box").disableSelection();
// init_drag_drop()
// $(".animal_card").sortable()

/////////////
///Header and Footer
$(".menu").on("click", function(){
    $(".footer div").css("color", "")
    $(".footer div").css("background-color", "")
    $(".menu").css("color", "")
    $(this).css("color", "yellow")
    let find = ".footer #" + $(this).attr('id')
    $(find).css("background-color", "orange")
    $(find).css("color", "white")
})