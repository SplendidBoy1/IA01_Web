
// News box

$(".move_symbol").on("mousedown", function () {
    $(".drag_news").sortable(
        {   
            cursor: "move",
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
    $(".move_symbol").css("cursor", "move")
})

