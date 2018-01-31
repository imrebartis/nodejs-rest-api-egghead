'use strict';

module.exports = function(Category) {

};
//TERMINAL:
// lb remote-method

// ? Select the model: Product
// ? Enter the remote method name: buy
// ? Is Static? No
// ? Description for method: Buy this product

// Let's configure where to expose your new method in the public REST API.
// You can provide multiple HTTP endpoints, enter an empty path when you are done.
// ? Enter the path of this endpoint: /buy
// ? HTTP verb: post

// Let's add another endpoint, enter an empty name when done.
// ? Enter the path of this endpoint: 

// Describe the input ("accepts") arguments of your remote method.
// You can define multiple input arguments.
// Enter an empty name when you've defined all input arguments.
// ? What is the name of this argument? quantity
// ? Select argument's type: number
// ? Is this argument required? Yes
// ? Please describe the argument: Number of products to buy
// ? Where to get the value from? (auto)

// Let's add another accept argument, enter an empty name when done.
// ? What is the name of this argument? 

// Describe the output ("returns") arguments to the remote method's callback function.
// You can define multiple output arguments.
// Enter an empty name when you've defined all output arguments.
// ? What is the name of this argument? result
// ? Select argument's type: object
// ? Is this argument a full response body (root)? Yes
// ? Please describe the argument: The result of the purchase

// Let's add another return argument. Enter empty name when done.
// ? What is the name of this argument? 

