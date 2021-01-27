$(function () {

    $("#assured button").click(function (e) {
        $("#assured .dropdown-menu").show();
    });

    var assured_data = "";
    $("#assured .dropdown-menu").click(function (e) {
        assured_data += "<div class='badge badge-light mr-1'><span>" + $(e.target).html() + "<a class='close pl-2' onclick='close(event)'>&times;</a></span></div>";
        $("#assured button").html(assured_data);
        $(this).hide();
    });

    $(window).click(function (e) {
        if ($(e.target).hasClass("close") == true) {
            $(e.target).parents(".badge").remove();
            assured_data = $("#assured").children("button").html();
        }
    });

    $("#plan_type button").click(function (e) {
        $("#plan_type .dropdown-menu").show();
    });

    $("#plan_type .dropdown-menu").click(function (e) {
        $("#plan_type button").html($(e.target).html())
        $(this).hide();
    });

    $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy"
    });

    
    $('#reservationDate').on('change', function () {
        var pickedDate = $('input').val();
        $('#pickedDate').html(pickedDate);
    });
});