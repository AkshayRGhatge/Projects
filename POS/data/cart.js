export let cart=[];

loadFromStorage();

export function saveToCart()
{
    //set the cart items in the local storage
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

/**
 * The function check if there is an item in the load storage if not then add the item by default
 */
export function loadFromStorage()
{
    // get the cart items from local storage
   cart= JSON.parse(localStorage.getItem("cartItems"));
   if(!cart)
    {
        cart=[
            {
                productId:'g43638ce-3501-4b17-9889-a3bad6fb5890',
                quantity:1
            },
            {
                productId:'g43638ce-3501-4b17-9889-a3bad6fb5891',
                quantity:1
            }
        ];
       
        saveToCart();
    }
}

/**
 * The function use to add the item in the cart, check if there is an existing item, is so update the quantity value else add new item in the cart also save the item in the local storage
 * @param {*} productId : Product Id of the item need to add in the cart
 * @param {*} quantityValue : quantity value of the item need to add in the cart
 */
export function addToCart(productId,quantityValue)
{
    
    //variable to hold if existing cart item exist or not
    let matchItem;
    //Loop through each cart item
    cart.forEach((cartItem)=>{
        //check if there is already an existing item in the cart
        if(cartItem.productId===productId)
        {
           matchItem=cartItem;
        }
    })

    //if there is an already existing item then update the quantity value
    if(matchItem)
    {
        matchItem.quantity += quantityValue;
    }
    else
    {
        // add the new cart items
         cart.push({
            productId:productId,
            quantity:quantityValue
         })
    }   

    //save in the local storage
    saveToCart();
}

/**
 * The function take the product id and remove the item from the cart item 
 * @param {*} productID :
 */
export function removeCartItem(productID){
    
    //remove the item from the cart
    cart=cart.filter(item => item.productId !== productID);
    
    
    //save in the local storage
    saveToCart();
}
