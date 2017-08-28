console.log('Loaded!');
// counter code

var button = document.getElementById("counter");
button.onclick = function (){
    //create a request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange =  function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //make the request
    request.open('GET','http://aaquibkuwari.imad.hasura-app.io/counter', true);
    request.send(null);
   
    
};

var nameinput=document.getElementById("name");
var name=nameinput.value;
var submit = document.getElementById("submit_btn");