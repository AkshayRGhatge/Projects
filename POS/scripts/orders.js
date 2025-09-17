export let orders=[];

loadFromStorageOrder();

export function saveToOrders()
{
    //set the cart items in the local storage
    localStorage.setItem("orderItems", JSON.stringify(orders));
}

/**
 * The function check if there is an item in the load storage if not then add the item by default
 */
export function loadFromStorageOrder()
{
    // get the cart items from local storage
   orders= JSON.parse(localStorage.getItem("orderItems")) || [];
   
}

export function addToOrder(productId,quantityValue)
{
    
    //variable to hold if existing cart item exist or not
    let matchItem;
    //Loop through each cart item
    orders.forEach((orderItem)=>{
        //check if there is already an existing item in the cart
        if(orderItem.orderId===productId)
        {
           matchItem=orderItem;
        }
    })

    //save in the local storage
    saveToOrders();
}
