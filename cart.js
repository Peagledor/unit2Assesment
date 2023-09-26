///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

const summedPrice = cart.reduce((accumulator, item) => accumulator + item.price, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice  = (cartTotal, couponValue, tax) => {
    total = cartTotal + tax - couponValue 
    return + total.toFixed(2) 
    
}

console.log(calcFinalPrice(summedPrice, 5.00, .06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Properties: customer name, phone number, address, creditcard information 
    
    I chose those properties because typically I am thinking of the cart page as a pizza place's checkout page for delivery. This means that the information we would want from the customer is their payment and delivery information. 
    
    DATA TYPES
        customerName: 'string'
        phoneNumber: Number
        address: 'string'
        creditCardNumber: Number
    
    I chose these data types because that is typically how the appear in the world. Names are strings normally, Phone and Credit card numbers are typically numbers. Where as addresses do have numbers but as a string they are recognized as unique strings. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

class CustomerInfo{
    constructor(name, phone, address, creditCard){
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.creditCard = creditCard;
    }
}

const customer1 = new CustomerInfo('Jorge', 654.7890, '9887 fake st', 123456789000)

console.log(customer1)