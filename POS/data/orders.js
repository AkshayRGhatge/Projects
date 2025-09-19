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

const custNameSection=document.querySelector('.js-customer-info');
const orderitems=document.querySelector('.js-order-items');
const orderPaymentDetails=document.querySelector('.js-order-payment-details');

document.addEventListener('DOMContentLoaded', function(){

    let orderPayDetails='';
    let newOrderItem='';
    let customerNameSection='';
    orders.forEach((orderItem)=>{

        customerNameSection=`
                <p><strong>Customer Name:</strong>${orderItem.customerName}</p>
                <p><strong>Order #:</strong> ${orderItem.orderId}</p>
                <p><strong>Order Date:</strong>${orderItem.timestamp}</p>
            `;

        orderItem.items.forEach(()=>{
                newOrderItem=document.createElement('tr');
                newOrderItem.innerHTML=`
                    <td>${orderItem.items.name}</td>
                    <td>${orderItem.items.quantity}</td>
                    <td>${orderItem.items.npriceame}</td>
                `;
        })

        orderPayDetails=`   
            <tr>
                    <td>Subtotal</td>
                    <td>$${orderItem.subtotal}</td>
                </tr>
                <tr>
                    <td>Tax (13%)</td>
                    <td>$${orderItem.tax}</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>$${orderItem.discount}</td>
                </tr>
                <tr class="total">
                    <td>Total</td>
                    <td>$${orderItem.total}</td>
            </tr>
            `;
    })
    
//append the customer name section
custNameSection.innerHTML=customerNameSection;
console.log(newOrderItem);
//append the order item
orderitems.appendChild(newOrderItem);

//append the payment 
orderPaymentDetails.innerHTML=orderPaymentDetails;



})


