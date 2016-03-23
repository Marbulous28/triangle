$(document).ready(function() {
  $("form#information").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var addressInput = $("#address").val();
    $(".outputAddress").text(addressInput);
    $("#outputName").text(nameInput);
    $("#receipt").show();
  });
});
