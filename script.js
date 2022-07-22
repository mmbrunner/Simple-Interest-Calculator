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

    //variable called amount & assigned to formula for simple interest?
    var amount = principal * (1+rate*years)
    //when the button is clicked, set the result <span> to the appropriate text and highlight the values
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";

}

function updateRate() 
{
    //a function that reads the value of the range slider input 
    var rateval = document.getElementById("rate").value;
    //and displays it in the <span> adjacent to the slider
    document.getElementById("rate_val").innerText=rateval;   
    //onchange event on the range input linked to this function
}


//**Things I haven't done yet below

//Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"

//Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box

//**Side note: how this is setup (i.e. class names, variables, even the functions) is based on Course-ra's instructions