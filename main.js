$(() => {
    $("#fonts").change(function() {
        console.log($(this).find('yoption:selected').text());
        $("textarea").css("font-family", $(this).find("option:selected").text());
    });

    $("#size").change(function() {
        $("textarea").css("font-size", `${$(this).find("option:selected").text()}px`);
    });

    $("#colors").change(function() {
        $("textarea").css("color", $(this).find("option:selected").text());
    });

    $("#bold-btn").click(() => {
        $("#bold-btn").toggleClass("pressed-button");
        $("textarea").toggleClass("bold");
    });

    $("#italic-btn").click(() => {
        $("#italic-btn").toggleClass("pressed-button");
        $("textarea").toggleClass("italic");
    });

    $("#underline-btn").click(() => {
        $("#underline-btn").toggleClass("pressed-button");
        $("textarea").toggleClass("underline");
    });
});
