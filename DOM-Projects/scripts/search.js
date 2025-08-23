//Variables

let searchInput=document.getElementById('search');
let superHeros=document.querySelectorAll('.hero');

let superHeroSearch=''; // to store the search text hero
let individualHero='';  // to hold the hero from the hero container

//The purpose of this method is to get the user input and filter it from the list of the heros
function searchSuperHero(e)
{
    //get the superhero search text
    superHeroSearch=e.target.value;
    superHeroSearch.toLowerCase();

   //loop through all the super hero element
    superHeros.forEach((item)=>{
        //store each item text content into lowercase
        individualHero=item.children[0].textContent.toLowerCase();

        //if the hero character match then add display block or none
        individualHero.includes(superHeroSearch) ? item.style.display='block' : item.style.display='none'
    })

}

//for search input add event listener keyup and pass function
searchInput.addEventListener('keyup',searchSuperHero);