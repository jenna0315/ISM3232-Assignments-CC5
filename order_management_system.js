//Initialize inventory with product objects
const inventory = [

{ name: 'Espresso', price: 3, quantity: 10 },
    
{ name: 'Latte', price: 4, quantity: 5 },
    
{ name: 'Cappuccino', price: 4, quantity: 6 },
    
{ name: 'Mocha', price: 5, quantity: 4 }
];
console.log(inventory)

//Initialize orders array
let orders = [];

//Create placeOrder function
function placeOrder (customerName,orderedItems){
    for (item of orderedItems){
const product = inventory.find(product => product.name === item.name);
    if (!product)
        {console.log(`Invalid! Cannot Fullfill Order of ${customerName}`);
        }
    if (product.quantity>inventory.quantity)
        {console.log(`Error Not Enough in Stock`);
        }
    }
const product = inventory.find(product => product.name === item.name);
product.quanitity -= inventory.quantity;
orders.push({customerName:customerName, itemsBought:orderedItems, status:'Pending'
});
}
placeOrder('Janet',[{name:'Latte',quantity:2}])
console.log(orders)

//Create CalculateOrderTotal function
function calculateOrderTotal(orders) {
    return order.itemsPurchased.reduce((total, item) => total + item.price, 0);
}

//Create completeOrder function
function completeOrder(customerName, order) {
    order.find(order => order.customerName === customerName);
    if (order) {
        order.status = 'Completed';
        { console.log(`Order for "${customerName}" is complete.`);
     else {
        console.error(`Order for "${customerName}" does not exist.`);
    }
}


//Create checkPendingOrders function
function checkPendingOrders(orders) {
    orders.forEach(order => {
        if (order.status === 'Pending') {
            console.log(order);
        }
    });
}
