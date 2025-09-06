import { Products } from "../data/products.js";
import { formatCurrency } from "../scripts/utils/money.js";

//Variables
const getCategories=document.querySelectorAll('.js-category-item'); //Variable to get the menu categoryItem
const getProductGrid=document.querySelector('.js-product-grid'); //Variable to get the display grid section where the menu items display
const getSearchMenu=document.getElementById('js-search-menu-textbox'); //Variable to get the Search menu text field

//ON the load of the dom click the Starter item
document.addEventListener('DOMContentLoaded', function(){
    getCategories.forEach(item=>{
        if(item.textContent==="Starter")
        {
            item.click();
        }
    })
})

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

        let getFilterItems='';
        if(categoryTextContent === "All")
        {
            getFilterItems=[...Products];
            console.log(getFilterItems);
        }
        else{ 
             //filter the products array with the category text content
            getFilterItems=Products.filter((filterProductItem)=>{
                return filterProductItem.category===categoryTextContent
            })
        }
       

        //loop through the filter item array and generate the html
        getFilterItems.forEach((productItems)=>{
            getProductItemHtml += 
                `<div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image"
                        src="${productItems.image}">
                    </div>
                    <div class="product-name js-product-name">
                        ${productItems.name}
                    </div>

                    <div class="product-price">
                        $${formatCurrency(productItems.priceCents)}
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

//Display Added message when the add to cart button got click
getProductGrid.addEventListener('click', function(e){
    if(e.target.classList.contains('js-add-to-cart-button'))
    {
        e.preventDefault();
       
        //get the Added message
        const addedMessage = e.target.parentElement.querySelector('.js-added-to-cart');
       
        console.log(addedMessage);
        //Once the add is click show Added message
        addedMessage.style.opacity = '1';
        setTimeout(() => {
            //display it till 2 sec and make it hide
            addedMessage.style.opacity = '0';
        }, 2000);    
    }   
})

//Search menu item
getSearchMenu.addEventListener('input', function(e){

    //get the search input
    const searchFilter=e.target.value.toLowerCase();

    //Filter the products array and  find array item with the matching keyword if found return the item to new array 
    const searchResultArray=Products.filter((item)=>{

          return item.keywords.some(keyword =>
                keyword.toLowerCase().includes(searchFilter)
             );
    })

    //Check the filter array length 
    if(searchResultArray.length > 0)
    {
        //clear the grid section first before display filter array item
        getProductGrid.innerHTML='';

        let gridMenudisplay='';
        //loop through each filter array item and generate the html
        searchResultArray.map((searchFilterItems)=>{
             gridMenudisplay+=   `<div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image"
                        src="${searchFilterItems.image}">
                    </div>
                    <div class="product-name js-product-name">
                        ${searchFilterItems.name}
                    </div>

                    <div class="product-price">
                        $${formatCurrency(searchFilterItems.priceCents)}
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
                </div>`;
         })

            //append the html to the grid
            getProductGrid.innerHTML=gridMenudisplay;

            //remove the 'selected' class by looping through each categories item
            getCategories.forEach(item=>{
                item.classList.remove('selected');
            })

            //Make sure the category all get selected
            getCategories.forEach((categoryItem)=>{
                
                if(categoryItem.textContent === "All")
                {
                    categoryItem.classList.add('selected');
                }
            })
    }
    
})

