console.log("Script has started");

//new elements
const resultParent = document.getElementById("results");
const generate = document.getElementById("generate");
const clear = document.getElementById("clear");

//main function
//generate new div elements depending on the startingValue and endingValue
function createFizzBuzz(){
    console.log("click");
    let startingValue = document.getElementById("startingValue").value;
    let endingValue = document.getElementById("endingValue").value;
    let fizz = document.getElementById("fizzValue").value;
    let buzz = document.getElementById("buzzValue").value;

    //to parse string arguments into integers
    startingValue = parseInt(startingValue);
    endingValue = parseInt(endingValue);
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);
    
    //clear the old elements if there are any
    clearAllElements();

    for (let i=startingValue; i<=endingValue; i++){
        let newDiv = document.createElement("div")
        let newContent = document.createElement("p");

        newDiv.appendChild(newContent);
        
        //each new div elemnt will have a unique id
        resultParent.appendChild(newDiv).setAttribute("id", "myid" + i);

        //add text node and class to newly created divs
        if (i%fizz==0 && i%buzz==0){
            newContent.appendChild(document.createTextNode("FIZZBUZZ"));
            resultParent.appendChild(newDiv).setAttribute("class", "FizzBuzz");
        }
        else if (i%fizz == 0){
            newContent.appendChild(document.createTextNode("FIZZ"));
            resultParent.appendChild(newDiv).setAttribute("class", "Fizz");
            console.log("Fizz");
        }
        else if (i%buzz == 0){
            newContent.appendChild(document.createTextNode("BUZZ"));
            resultParent.appendChild(newDiv).setAttribute("class", "Buzz");
        }
        else{
            newContent.appendChild(document.createTextNode(i));
            resultParent.appendChild(newDiv).setAttribute("class", "Number");
        }
    }
}

////function to actually clear all the elements
function clearAllElements(){
    console.log("We will clear all elements")

    while (resultParent.firstChild){
        resultParent.removeChild(resultParent.firstChild);
    }
}

//adding event listeners
function onPageLoaded(){
    console.log("This runs when the page is ready");
    generate.onclick = createFizzBuzz
    clear.onclick = clearAllElements;
    
}

//onPageLoaded will run when onload event is fired
window.onload = onPageLoaded




