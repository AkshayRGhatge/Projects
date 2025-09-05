import { Products } from "../data/products.js";
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

//Variables
const getCategories=document.querySelectorAll('.js-category-item');//Variables to get the menu categoryItem
const getProductGrid=document.querySelector('.js-product-grid');


//Loop through each category item and add click event listener
getCategories.forEach(categoryItem=>{
    categoryItem.addEventListener('click', (e)=>{

        let getProductItemHtml=''; //variable to hold the html content for the menu/product items
        const targetCategory= e.target;

        //remove the 'selected' class by looping through each categories item
        getCategories.forEach(item=>{
            item.classList.remove('selected');
        })

        //add the 'selected' class to the target element
        targetCategory.classList.add('selected');

        //Get the category Item textcontent
        const categoryTextContent=targetCategory.innerText;

        //filter the products array with the category text content
        const getFilterItems=Products.filter((filterProductItem)=>{
           return filterProductItem.category===categoryTextContent
        })

        //loop through the filter item array and generate the html
        getFilterItems.forEach((productItems)=>{
            getProductItemHtml += 
                `<div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image"
                        src="${productItems.image}">
                    </div>
                    <div class="product-name">
                        ${productItems.name}
                    </div>

                    <div class="product-price">
                        $12.00
                    </div>

                    <div class="product-quantity-container">
                            <button class="minus-icon">
                            <i class="fa fa-minus-circle"></i>
                        </button>
                        <select>
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <button class="plus-icon">
                                <i class="fa fa-plus-circle"></i>
                        </button> 
                    </div>
                
                    
                    <div class="product-spacer"></div>

                    <div class="added-to-cart js-added-to-cart">
                        <i class="fas fa-check-circle"></i>
                        Added
                    </div>

                    <button class="add-to-cart-button js-add-to-cart-button button-primary">
                        Add to Cart
                    </button>
                </div>`
            
        })
        //Append the html to the grid
        getProductGrid.innerHTML=getProductItemHtml;
    })
})


