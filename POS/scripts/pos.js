//Add the click event listener for all the add buttons
document.querySelectorAll('.js-add-to-cart-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        //get the Added message
        const addedMessage = button.parentElement.querySelector('.js-added-to-cart');
        //Once the add is click show Added message
        addedMessage.style.opacity = '1';
        setTimeout(() => {
            //display it till 2 sec and make it hide
            addedMessage.style.opacity = '0';
        }, 2000);
    });
});

//Variables to get the menu categoryItem
const getCategories=document.querySelectorAll('.js-category-item');

//Loop through each category item and add click event listener
getCategories.forEach(categoryItem=>{
    categoryItem.addEventListener('click', (e)=>{

        const target= e.target;

        //remove the selected class by looping through each categories item and remove the class name selected
        getCategories.forEach(item=>{
            item.classList.remove('selected');
        })

        //add the selected class to the target element
        target.classList.add('selected');
    
    })
})


