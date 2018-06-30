// Select color input
// Select size input

var height,width,color;


// When size is submitted by the user, call makeGrid()
// We use the submit() to call the makegrid()

$('#sizePicker').submit(function(event){

	event.preventDefault(); //this method prevents the use of the default value which is 1

	height = $('#inputHeight').val(); //Grabs the value inputted as height and sets it to the height variable
	width = $('#inputWeight').val(); //Grabs the value inputted as width and sets it to the width variable

	makeGrid(height,width); // calls the makegrid function, with the variables height and width as parameters
})


function makeGrid(x,y) {
	$('tr').remove(); //This removes any previously created table row

//Your code goes here
// Nested loop to create table rows
	for (var i = 1; i<=x; i++){
		$('#pixelCanvas').append('<tr id = table' + i + '></tr>');
			for (var j = 1; j<=y; j++){
		   		$('#table' + i).append('<td></td>');
			}
	}
// add color to cell

   $('td').click(function addColor(){
		color = $('#colorPicker').val(); //grabs the value from the colorPicker and sets it to the color variable

	       if($(this).attr('style')){   //checks to see if the cell has any style attribute
		     	$(this).removeAttr('style') //removes any previous style attribute
			} else {
				$(this).attr('style', 'background-color:' + color); //adds the style attribute to the cell
			}
	})
}