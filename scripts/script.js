console.log("Script has started");

const resultParent = document.getElementById("results");
const generate = document.getElementById("generate");
const clear = document.getElementById("clear");


function createFizzBuzz(){
    console.log("click");
    let startingValue = document.getElementById("startingValue").value;
    let endingValue = document.getElementById("endingValue").value;
    let fizz = document.getElementById("fizzValue").value;
    let buzz = document.getElementById("buzzValue").value;

    startingValue = parseInt(startingValue);
    endingValue = parseInt(endingValue);
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);
    
    clearAllElements();

    console.log("click2");

    for (let i=startingValue; i<=endingValue; i++){
        let newDiv = document.createElement("div")
        let newContent = document.createElement("p");

        newDiv.appendChild(newContent);
    
        resultParent.appendChild(newDiv).setAttribute("id", "myid" + i);

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

    if (startingValue.value >= 1 && startingValue.value <= 100) {
        this.value = startingValue.value;
    } else if (startingValue.value.length === 0) {
        startingValue.value = null;
    } else {
        startingValue.value = null;
        alert("Incorrect number!");
    }
    if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58)
        || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
    )) {
        return false;
    }
}

function clearAllElements(){
    console.log("We will clear all elements")

    while (resultParent.firstChild){
        resultParent.removeChild(resultParent.firstChild);
    }
}

function onPageLoaded(){
    console.log("This runs when the page is ready");
    generate.onclick = createFizzBuzz
    
    clear.onclick = clearAllElements;
    
}

window.onload = onPageLoaded




