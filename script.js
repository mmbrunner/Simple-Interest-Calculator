function compute()
{
    //Given?
    p = document.getElementById("principal").value;
    //variable called principal & assigned to input element "principal"
    var principal = document.getElementById("principal").value;
    //variable called rate & assigned to input element "rate"
    var rate = document.getElementById("rate").value;
    //variable called years & assigned to input element "years"
    var years = document.getElementById("years").value;
    //variable called amount & assigned a value of principal * years * rate
    var amount = principal * years * rate;
    //logic to convert the No of Years into the actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
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

function validatePrincipal()
{
    //variable called x, assigned to value of principal input element
    var x = document.getElementById("principal").value;
    //if the principal is 0 or less alert the user with "Enter a Positive Number"
    if (x <= 0 ) {
        alert("Enter a Positive Number");
    //set focus to principal input box after alert
        principal.focus();
        return false;
    }
}