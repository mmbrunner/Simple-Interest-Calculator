function compute()
{
    //Given
    p = document.getElementById("principal").value;
    //variable called principal & assigned to input element "principal"
    var principal = document.getElementById("principal").value;
    //variable called rate & assigned to input element "rate"
    var rate = document.getElementById("rate").value;
    //variable called years & assigned to input element "years"
    var years = document.getElementById("years").value;
    //variable called interest & assigned a value of principal * years * rate / 100
    var interest = principal * years * rate /100;
    //logic to convert the No of Years into the actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
    //when the button is clicked, set the result <span> to the appropriate text
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";

}

function updateRate() 
{
    //a function that reads the value of the range slider input 
    var rateval = document.getElementById("rate").value;
    //and displays it in the <span> adjacent to the slider
    document.getElementById("rate_val").innerText=rateval;   
    //onchange event on the range input linked to this function
}


//**Things I haven't done yet below (or page 9 & 10 on the instructions)

//Make sure that the input you have taken as "No of Years" is converted into an actual year.

//Make sure the numbers in the result are highlighted.

//Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"

//Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box


//**Side note: how this is setup (i.e. class names, variables, even the functions) is based on Course-ra's instructions