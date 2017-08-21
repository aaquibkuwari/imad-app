console.log('Loaded!');
// counter code
var counter = 0;
var button = document.getElementById("counter");
button.onclick = function (){
    //make a request to counter end point
    
    //capture the response ans save it in a variable
    
    //render the variable to correct span
    counter= counter + 1;
    var span = ddocument.getElementById("count");
    span.innerHTML = counter.toString();
};