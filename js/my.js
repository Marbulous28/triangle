$(document).ready(function(){
  $("form#triangle").submit(function(event){
    event.preventDefault();
    var a = parseInt($('#side1').val());
    var b = parseInt($('#side2').val());
    var c = parseInt($('#side3').val());

    if (a === undefined || b === undefined || c === undefined) {
      alert('YA DONE FUCKED IT ALL UP');

    } else {
      if (((c + a) <= b) || ((a + b) <= c) || ((c + b) <= a)){
       alert('This is not a triangle, triangle again!')
      }

      else if (a === b && b === c) {
        alert('This triangle is equilateral');
       }

      else if (((a === b) && (b !== c)) || ((a === c) && (c !== b)) || ((c === b) && (a !== c))) {
        alert('This triangle is isosceles');
       }

      else if (a !== b && b !== c){
        alert('This is a scalene triangle');
      }
    }
  });
});
