$(document).ready(function () {

    // numbers of persons
    var numberPersons = 0;

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

    function total(){
        const res = calculateTotal() / numberPersons;
        const res_tip = parseFloat($("#tip").text()) / numberPersons;

        $("#each-tip").text(res_tip);
        $("#each-person").text(res);
    }
})