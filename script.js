$(document).ready(function () {

    // numbers of persons
    var numberPersons = 0;

    init();

    //on change the value of the price
    $("#price").change(function () {
        $("#total_price").text('$    ' + calculateTotal());
        $("#tip").text(calculateTip());
        total();
    })


    $("#tip-amount").change(function () {

        $("#tip_value").text($(this).val())
        $("#tip").text(calculateTip());
        $("#total_price").text('$    ' + calculateTotal());
        total();
    })

    $("#people-amount").change(function () {
        numberPersons = parseInt($(this).val());
        $("#persons").text($(this).val());
        total();
    })



    function calculateTotal() {
        return parseFloat($("#price").val()) + parseFloat($("#tip").text());
    }

    function calculateTip() {
        const bill_price = parseFloat($("#price").val());
        const value = parseFloat($("#tip-amount").val());
        var result = bill_price * (value / 100);

        return result;
    }

    function total() {
        const res = calculateTotal() / numberPersons;
        const res_tip = parseFloat($("#tip").text()) / numberPersons;

        $("#each-tip").text(res_tip);
        $("#each-person").text(res);
    }

    function init() {
        $("#each-tip").text(0);
        $("#each-person").text(0);
        $("#price").val(0);
        $("#tip-amount").val(0);
        $("#tip").text(0);
        $("#tip_value").text(0);
        $("#persons").text(0);
        $("#people-amount").val(0);
        $("#total_price").text(0);
    }
})