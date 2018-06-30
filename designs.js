// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function(){
  let inputHeight = $("#inputHeight");
  let inputWidth = $("#inputWidth");
  let table = $("#pixelCanvas");

  function makeGrid() {
    let grid = "";
    for(var r = 0; r < inputHeight.val(); r++){
      let trId = r.toString();
      grid += "<tr id="+ trId +">";
        for(var c = 0; c < inputWidth.val(); c++){
          let tdId = trId + c.toString();
          grid += "<td id="+ tdId +"></td>"
        }
      grid += "</tr>";
    }
    return grid;
  }

  $("#submit").on("click",function(){
    $(".canvas-title").remove();
    table.append(makeGrid());
    squares = table.find("td");
    squares.on("click", function(){
      let color = $("#colorPicker").val();
      $(this).css("background-color", color);
    });
  });




});
