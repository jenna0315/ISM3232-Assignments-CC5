//Initialize inventory with product objects
const inventory = [

{ name: 'Espresso', price: 3, quantity: 10 },
    
{ name: 'Latte', price: 4, quantity: 5 },
    
{ name: 'Cappuccino', price: 4, quantity: 6 },
    
{ name: 'Mocha', price: 5, quantity: 4 }
];

//Initialize orders array
let orders = []

//Create placeOrder function
function placeOrder (customerName,items){
    for (let item of order){
 inventory.find(items => items.name === items);
    if (!items)
        {console.log(`Invalid! Cannot Fullfill Order of ${customerName}`);
        }

    if (items.quantity>inventory.quantity)
        {console.log(`Error Not Enough in Stock`);
        }
    }
    for (let quantity of items)
{inventory.find(items => items.name === items);;
items.quanitity -= inventory.quantity;
}
orders.push({customerName:'', items:[{name:'',quantity:''}],
    status:'Pending'
});
}
placeOrder(['Janet',{name:'Latte',quantity:2}])
