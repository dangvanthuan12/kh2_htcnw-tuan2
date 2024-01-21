// JavaScript source code
$(function () {
    function KTMK() {
        var re = /(?=.*\d)(?=.*[A-Z])(?=.*[@#%*$]).{6,}/
        if (!re.test($("#txtMK").val())) {
            $("#tbMK").html("Mat khau phai co it nhat 1 ky tu so va chieu dai it nhat 6 ky tu");
            return false;
        }
        $("#tbMK").html("");
        return true;
    }
    $("#txtMK").on("blur", KTMK);
    //so dien thoai
    function KTDT() {
        var re = /^0\d{2}\-\d{8,10}$/
        if (!re.test($("#txtDT").val())) {
            $("#tbDT").html("Dien thoai chua dung mau");
            return false;
        }
        $("#tbDT").html("");
        return true;
    }
    $("#txtDT").on("blur", KTDT);
    //submit
    $("form").submit(function () {

    })
})
