//Array object to hold the quote and author prop
const quoteGenerator =[
    {
        quote:"The best way to predict the future is to invent it.",
        author:"Alan Kay"
    },
    {
        quote:"Simplicity is the ultimate sophistication.",
        author:"Leonardo da Vinci"
    },
    {
        quote:"Complexity always hides the future, as opposed to predicting it.",
        author:"Scott Adams"
    }
]

function randomQuoteGenerator(quoteArray)
{
    let getRandomIndex=Math.floor(Math.random(quoteArray) * quoteArray.length);
    console.log(getRandomIndex)
    return quoteArray[getRandomIndex];
}


//get the button id 
let getButtonID=document.getElementById('new-quote');
console.log(getButtonID);

//add click event listener to the button
getButtonID.addEventListener('click',function(){
        //call the function to get random quote
        let randomQuote=randomQuoteGenerator(quoteGenerator);
        console.log(randomQuote);
        //Replace the quote with the random quote 
        let quoteDisplayArea=document.querySelector('.text-area');
        quoteDisplayArea.innerText=randomQuote.quote;

        //Replace the author with the random author 
        let authorDisplayArea=  document.querySelector('.person');
        authorDisplayArea.innerText=randomQuote.author;

})