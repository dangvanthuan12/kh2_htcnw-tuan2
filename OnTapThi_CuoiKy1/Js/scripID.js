$(document).ready(function() {
    var i = 3;
	function Kiemtra(id,reg, idtb, ndtb){
		if(id.val() === ""){
			idtb.html("bat buoc nhap");
			return false;
		}
		if(!reg.test(id.val())){
			idtb.html(ndtb);
			return false;
		}
		idtb.html("");
		return true;		
	}
	
	$("#txtMt").blur(function() {
		Kiemtra($("txtMt"),/^[A-Z]{3}\-[A-Z]{3}\-[0-9]{2}\-[0-9]{4}$/, $("#er-txtMt"), "Vui long nhap dung theo mau XXX-XXX-mm-yy");
	});	
	$("#txtHt").blur(function() {
		Kiemtra($("txtHt"),/[a-zA-Z0-9]$/, $("#er-txtht"), "");
	});	
	$("#thoigian").blur(function() {
		Kiemtra($("thoigian"),/[a-zA-Z0-9]$/, $("#er-thoigian"), "");
	});	
	$("#giatour").blur(function() {
		Kiemtra($("giatour"),/[0-9]$/, $("#er-giatour"), "");
	});	
	$("#anhdd").blur(function() {
		Kiemtra($("anhdd"),/$/, $("#er-anhdd"), "");
	});	
	
	function KiemtraNgaykh(){
		if($("#ngayKh").val()===""){
			$("#er-ngayKh").html("*bat buoc nhap");
			return false;
		}
		var day = new Date($("#ngayKh").val());
		var today =new Date();
		if (today.getFullYear() - day.getFullYear() <= 30){
			$("#ngayKh").html("* ngay khoi hanh phai sau ngay hien hanh 30 ngay");
			return false;
		}
		$("#er-ngayKh").html("*");
		return true;
	}
	$("#ngayKh").blur(KiemtraNgaykh);
	
	
	$("#btnSave").click(function(){
		var matour = $("#txtMt").val();
		var hanhtrinh = $("#txtHt").val();
		var ngaykh = $("#ngayKh").val();
		var thoigian = $("#thoigian").val();
		var giatour = $("#giatour").val();
		var file = $("#file").val();
		var add = "<tr><td>" + (i++) + "</td><td>" + matour +"</td><td>" + hanhtrinh + "</td><td>" + ngaykh +     	"</td><td>" + thoigian + "</td><td>" + giatour +"</td><td>" + file + "</td></tr>";
		$("table tbody").append(add);
		return true;
	});
	
});