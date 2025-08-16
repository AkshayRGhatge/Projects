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
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein"
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero"
    },
    {
        quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams",
        author:"Dr. Seuss"
    },
    {
        quote:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi"
    },
]

function randomQuoteGenerator(quoteArray)
{
    let getRandomIndex=Math.floor(Math.random() * quoteArray.length);
    return quoteArray[getRandomIndex];
}


//get the button id 
let getButtonID=document.getElementById('new-quote');

//add click event listener to the button
getButtonID.addEventListener('click',function(){
        //call the function to get random quote
        let randomQuote=randomQuoteGenerator(quoteGenerator);

        //Replace the quote with the random quote 
        let quoteDisplayArea=document.querySelector('.text-area');
        quoteDisplayArea.innerText=randomQuote.quote;

        //Replace the author with the random author 
        let authorDisplayArea=  document.querySelector('.person');
        authorDisplayArea.innerText=randomQuote.author;

})