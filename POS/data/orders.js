export const orders=JSON.parse(localStorage.getItem('orderItems')) || [];

export function saveToStorageOrders()
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
   orders= JSON.parse(localStorage.getItem("orderItems"));
   
}

/**
 * THis function add the new order in the array and save to storage
 * @param {*} order 
 */
export function addOrders(orderItem)
{
    console.log(orderItem);
    orders.unshift(orderItem);
    saveToStorageOrders();
}

document.addEventListener('DOMContentLoaded', function(){

    let orderDetails='';
    let orderGridHtml='';

    



})


