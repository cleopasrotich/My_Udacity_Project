$(function(){
    let inputHeight = $("#inputHeight");
    let inputWidth = $("#inputWidth");
    let table = $("#pixelCanvas");

    function makeGrid() {
        let grid = "";
        for(let r = 0; r < inputHeight.val(); r++){
            let trId = r.toString();
            grid += "<tr id="+ trId +">";
                for(let c = 0; c < inputWidth.val(); c++){
                    let tdId = trId + c.toString();
                    grid += "<td id="+ tdId +"></td>"
                }
            grid += "</tr>";
        }
        return grid;
    }

    // This is where the table is created
    $("#submit").on("click",function(){
        $(".canvas-title").remove();
        table.append(makeGrid());
        squares = table.find("td");

        // On hover show the selected color
        squares
        .click(function(){
            let color = $("#colorPicker").val();
            $(this)
            .css("background-color", color)
            .unbind("mouseleave mouseenter");            
        })        
        .mouseenter(function(){
            let color = $("#colorPicker").val();
            $(this).css("background-color", color);
        })
        .mouseleave(function(){
            $(this).css("background-color", "");
        });
    });
});
