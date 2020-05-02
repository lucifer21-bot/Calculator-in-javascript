function getHistory() {
    // this function for get the history.
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
   // This is function for print the history
    document.getElementById("history-value").innerText =  num;

}

function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {

    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }  
    else {
    document.getElementById("output-value").innerText = getFormatted(num);
}
}

function getFormatted(num){
 
    if(num == "-"){
        return "";
    }
    

    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}


function reverseNumber(num){
 
    return Number(num.replace(/,/g,''));

}



var operator =document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function() {
       if(this.id == "clear"){
           printHistory("");
           printOutput("");
       }
      else if(this.id == "backspace"){
          var output = reverseNumber(getOutput()).toString();
          if(output) {
              output = output.substr(0,output.length-1);
              printOutput(output);
          }
        }

        else{
            var output = getOutput();
            var history = getHistory();
           
           




            if(output != "") {
                output = reverseNumber(output);

                history = history+output;


                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");

                }  
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
 


    });
}


var number =document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click',function() {
       var output = reverseNumber(getOutput());
       if(output != NaN){
           output = output + this.id;
           printOutput(output);
       }
    });
}


