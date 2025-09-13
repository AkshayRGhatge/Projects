import { Products ,getProduct } from "../data/products.js";
import { formatCurrency,taxCalculator } from "../scripts/utils/money.js";
import { cart,addToCart ,loadFromStorage, saveToCart ,removeCartItem} from "../data/cart.js";


//param 1: arr: which take the array and loop through each item
//param 2: generateHtml: varaiable that hold the generate html
// return the html 
function generateProductGridItems(arr,generateHtml)
{
    //loop through the filter item array and generate the html
    arr.forEach((productItems)=>{
        generateHtml += 
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
                        <i class="fa fa-minus-circle js-delete-quantity"></i>
                    </button>
                    <select class="js-quantity-field" data-product-id="${productItems.id}">
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
                            <i class="fa fa-plus-circle js-add-quantity"></i>
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
    }); 
    return generateHtml;
}

//Variables
const getCategories=document.querySelectorAll('.js-category-item'); //Variable to get the menu categoryItem
const getProductGrid=document.querySelector('.js-product-grid'); //Variable to get the display grid section where the menu items display
const getSearchMenu=document.getElementById('js-search-menu-textbox'); //Variable to get the Search menu text field
const getCustomerNameInput=document.querySelector('.js-customer-name-input'); //Varaible for the customer name input section
const getSaveCustomerBtn=document.getElementById('js-save-customer-name'); //Variable to save button for the customer name
const getCustomerNameText=document.getElementById('js-customer-name-textbox'); //Variable for the customer name text box field in the order details section
const getCustomerDisplay=document.querySelector('.js-customer-name-display'); //variable for the customer name display section in the order details section
const getCustomerNamelabel=document.getElementById('js-customer-name-label'); //Variable for the customer name label in the order details section
const getCustomerNameEdit=document.getElementById('js-edit-customer-name'); //Variable for the customer name label in the order details section
const getOrderGrid=document.querySelector('.js-order-grid'); //Variable for the order item grid 
const getAmountDetailsSection=document.querySelector('.js-amount-details-section');//Variable to get the amount section

//ON the load of the dom click the Starter item
document.addEventListener('DOMContentLoaded', function(){

     //Load cart from localStorage when dom  content loaded
    loadFromStorage();

    //Generate the order grid section
    generateOrderItemsHtml();

    //Generate the payment details section
    generateAmountDetailsSection();

    //Select Starter category menu
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
        else
        { 
             //filter the products array with the category text content
            getFilterItems=Products.filter((filterProductItem)=>{
                return filterProductItem.category===categoryTextContent
            })
        }
       
        //Append the html to the grid
        getProductGrid.innerHTML=generateProductGridItems(getFilterItems,getProductItemHtml);
    })
})

//Make the Search menu Interactive
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
      

        //append the html to the grid
        getProductGrid.innerHTML=generateProductGridItems(searchResultArray,gridMenudisplay);

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

//Make the Quantity Interactive
getProductGrid.addEventListener('click', function(e){

    //handle the Adding of the item
    if(e.target.classList.contains('js-add-quantity'))
    {
        addQuantity(e);
    }

    //Handle the deleting the item
     if(e.target.classList.contains('js-delete-quantity'))
    {
        deleteQuantity(e);
    }

    //Handle the adding of the product item in the cart
    if(e.target.classList.contains('js-add-to-cart-button'))
    {
        e.preventDefault();
       
        //get the quantity field
        let quantityField=e.target.parentElement.querySelector('.js-quantity-field');

        //get the quantity value
        let quantityValue=Number(quantityField.value);

        //get the product id
        let productId=quantityField.dataset.productId;
        
        //add the item in the cart array
        addToCart(productId,quantityValue);
       
        //get the Added message
        const addedMessage = e.target.parentElement.querySelector('.js-added-to-cart');
       
        //Once the add is click show Added message
        addedMessage.style.opacity = '1';
        setTimeout(() => {
            //display it till 2 sec and make it hide
            addedMessage.style.opacity = '0';
        }, 2000);  
        
        //Generate the Order Item section
        generateOrderItemsHtml();

        //Generate the payment details section
        generateAmountDetailsSection();
        
    } 
});

//Make the customer name save section interactive
getSaveCustomerBtn.addEventListener('click', function(){
    //get the customer name value from the text box field
    let customerNameValue=getCustomerNameText.value;
    
    //if the customer name value exist 
    if(customerNameValue)
    {
        //set the label with value
        getCustomerNamelabel.textContent=customerNameValue;

        //hide the input section
        getCustomerNameInput.classList.add('display-none');

        //show the label section
        getCustomerDisplay.classList.remove('display-none');
    }
       
})

//Make the customer name edit section interactive
getCustomerNameEdit.addEventListener('click', function(){
    
    //hide the edit label section
    getCustomerDisplay.classList.add('display-none');

    //show the input customer name section
     getCustomerNameInput.classList.remove('display-none');

    //get the customer name details
    let customerName=getCustomerNamelabel.textContent;
    
    //update the input box field with the customer name value
    getCustomerNameText.value=customerName;

})



// func to generate the html content for the Order Items
function generateOrderItemsHtml()
{
    //clear the grid section
    getOrderGrid.innerHTML="";

    let generateHtml='';
    //Loop through each cart item
    cart.forEach((item)=>{

        let getItemId=item.productId;
        //Find ProductDetails from the Products array
        let getProductItemDetails=Products.find(productItem=> productItem.id === getItemId)

          generateHtml +=`
                        <div class="order-container" data-product-id="${getProductItemDetails.id}">
                            <div class="order-details-section">
                                <div class="order-image-container">
                                    <img class="order-image" src="${getProductItemDetails.image}" alt="${getProductItemDetails.name}">
                                </div>
                                <div class="order-name">${getProductItemDetails.name}</div>
                                <button class="delete-button" aria-label="Remove item">
                                    <i class="fa fa-trash  js-delete-item" data-product-id="${getProductItemDetails.id}"></i>
                                </button>
                            </div>     
                            <div class="order-qty-price">
                                <div class="order-quantity-container">
                                    <button class="minus-icon">
                                        <i class="fa fa-minus-circle js-delete-quantity"></i>
                                    </button>
                                    <input type="text" class="order-qty-item" id="js-order-qty" value="${item.quantity}">
                                    <button class="plus-icon">
                                        <i class="fa fa-plus-circle js-add-quantity"></i>
                                    </button>      
                                </div>
                                <div class="order-price">
                                    <p>$${formatCurrency(getProductItemDetails.priceCents)}</p>
                                </div>
                            </div>
                        </div>`;

    })

    //Append the html
    getOrderGrid.innerHTML+=generateHtml;

}

//Fun to add the quantity value
function addQuantity(e){
    //get the parent element which is add icon
    let addQuantityIcon=e.target.parentElement;  
    
    //get the quantity field
    let quantityField=addQuantityIcon.previousElementSibling;

    //get the quantity value
    let quantityFieldValue= Number(quantityField.value);
    console.log("quantityFieldValue: "+quantityFieldValue);
    //If the quantity is not max
    if(quantityFieldValue !=10)
    {
        //update the value
        quantityField.value=quantityFieldValue+1;
    }
}

//Fun to delete the quantity value
function deleteQuantity(e){
     //get the parent element which is add icon
    let deleteQuantityIcon=e.target.parentElement;
    
    //get the quantity field
    let quantityField=deleteQuantityIcon.nextElementSibling;

    //get the quantity value
    let quantityFieldValue= Number(quantityField.value);

    //If the quantity is not min
    if(quantityFieldValue != 1)
    {
        //update the value
        quantityField.value=quantityFieldValue-1;
    }
   
}

//Make the quantity and delete interactive on the order grid section
getOrderGrid.addEventListener('click', function(e){
    //Handle the Adding of the item
    if(e.target.classList.contains('js-add-quantity'))
    {
        addQuantity(e);
        saveToCart();
    }

    //Handle the deleting the item
    if(e.target.classList.contains('js-delete-quantity'))
    {
        deleteQuantity(e);
        saveToCart();
    }

    //Handle teh delete of the item
    if(e.target.classList.contains('js-delete-item'))
    {
        //get the product id from the dataset
        let productId= e.target.dataset.productId;
      
        //Remove item
        removeCartItem(productId);

        //Generate Order grid
        generateOrderItemsHtml();

        //Generate the payment details section
        generateAmountDetailsSection();
    }
});


//Make the amount placeholder interactive=

function generateAmountDetailsSection(){

    let totalCents=0;
    //Loop through each cart items
    cart.forEach((item)=>{
        let productId=item.productId;

        //Get the product Details
        let productDetails=getProduct(productId);
        
        //get the price cents
        let getProductPriceCents=productDetails.priceCents;
        
        //calculate totat cents
        totalCents+=Number(getProductPriceCents);
    })

    
    let individualItemPrice= totalCents;
    let taxCalculate=taxCalculator(totalCents);

    let total = formatCurrency(totalCents + taxCalculate);
    let generateHtm=
         `
        <div class="subtotal-section">
            <h4>Subtotal</h4>
            <span>$${formatCurrency(individualItemPrice)}</span> 
        </div>
        <div class="tax-section">
            <h4>Tax</h4>
            <span>$${formatCurrency(taxCalculate)}</span> 
        </div>
        <div class="discount-section">
            <h4>Discount</h4>
            <span>$0</span> 
        </div>
        <div class="total-bill">
            <h3>Total</h3>
            <h3>$${total}</h3>
        </div>
        <div class="promo-apply-section">
            <input type="text" class="text-box" placeholder="Discount" id="promo-code-field">
            <button class="apply-button">Apply</button>
        </div>
        <div class="proceed-payment-section">
            <button class="proceed-payment">Proceed Payment</button>
        </div>
        `;

      //append the htmls to the amount detail section  
    getAmountDetailsSection.innerHTML=generateHtm;

}
