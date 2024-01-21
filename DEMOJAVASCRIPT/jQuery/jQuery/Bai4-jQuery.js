// JavaScript source code
$(function () {
    function loadbangluonggiac() {
        var table = "<table border='1'>";
        table += "<tr><th>Degree</th><th>sin(d)</th><th>cos(d)</th>";
        for (var i = 0; i <= 180; i += 15) {
            var rad = i * Math.PI / 180;
            table += "<tr><td>" + i + "</td><td>" + Math.sin(rad) + "</td><td>" + Math.cos(rad) + "</td><tr>";
        }
        table += "</table>";
        $("#content").html(table);
    }
    loadbangluonggiac();
})