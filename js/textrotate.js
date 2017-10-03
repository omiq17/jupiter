//List of quotes
var quotes = ["Twitter Sentiment", "Glassdoor Ratings", "Percent Owned by Management", "Board Composition",
"Shareholder Yield", "Unique Classification System"];

//Counter for loop
var m = 0;

//Call the changeText() function every 5000 miliseconds
setInterval(changeText, 1850);

//Function to change div to a quote and change counter.
function changeText(){
    document.getElementById("change").innerHTML=(quotes[m] + '<p style="text-align: right">' + '</p>');
    if(m == 5)
        m = 0;
    else
        m++;
};