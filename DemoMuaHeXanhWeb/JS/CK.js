// JavaScript Document
$(document).ready(function() {
    var i=1;
	$("#btnSave").click(function(){
	var ma=$("#txtMa").val();
	var ten=$("#txtTen").val();
	var email=$("#txtEmail").val();
	var add= "<tr><td>" +(i++) + "</td><td>" + ma + "</td><td>" + ten +"</td><td>" + email + "</td></tr>";
	$("table tbody").append(add);
	return true;
		});
	function kiemtraMa(){
		var re= /^[0-9]{8}$/;
		if ($("#txtMa").val()==""){
			$("#re-txtMa").html("Bat buoc nhap");
			return false;
			}
		if (!re.test($("#txtMa").val())){
		$("#re-txtMa").html("Ma co 8 so!");
		return false;	
		}
		$("#re-txtMa").html("");
		return true;
		}
		$("#txtMa").blur(kiemtraMa);
	function kiemtraTen(){
		var re=/[A-Z]$/;
		if ($("#txtTen").val()==""){
			$("#re-txtTen").html("Bat buoc nhap");
			return false;
			}
		if (!re.test($("#txtTen").val())){
			$("#re-txtTen").html("Phai nhap chu hoa va khoang trang");
			return false;
			}
		$("#re-txtTen").html("");
		return true;
		}
	$("#txtTen").blur(kiemtraTen);
	function kiemtraEmail(){
		var re=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2.4})+$/;
		if ($("#txtEmail").val()==""){
			$("#re-txtEmail").html("Bat buoc nhap");
			return false;	
			}
		if (!re.test($("#txtEmail").val())){
			$("#re-txtEmail").html("Phai nhap dung kieu email");
			return false;	
			}
		$("#re-txtEmail").html("");
		return true;
		}
		$("#txtEmail").blur(kiemtraEmail);
	
});