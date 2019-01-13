const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Seattle8683%",
    database: "bamazon_db"
});

connection.connect(function(err){
    console.log("Connected as id: " + connection.threadId);
    start();
});

const start = function(){
    inquirer.prompt({
        name:"purchase",
        type:"input",
        message:"What is the Id of the product you would like to buy?",
        validate: function(value){
            if (isNaN(value) === false){
                return true;
            }
            return false;
        }
    },{
        //running into an issue of 2nd question not being asked because it can't find the ID for the first question
        name:"quantity",
        type:"input",
        message:"How many units of this product would you like to buy?",
        validate: function(value){
            if (isNaN(value) === false){
                return true;
            }
            return false;
        }
      }
    ).then(function(answer){
        connection.query(
            "SELECT * FROM products WHERE?",
            {
                product_name: answer.purchase
            },
            function(err, res){
                if (res[0].stock_quantity > answer.stock_quantity){
                    const totalPrice = res[0].price * answer.stock_quantity;
                    const updated_quantity = res[0].stock_quantity - answer.stock_quantity;
                    console.log("Congrats, your order has been confirmed. Your total price is $: " + totalPrice.toPrecision)
                    connection.query(
                        "UPDATE products SET ? WHERE?",
                        {
                            stock_quantity: updated_quantity
                        },
                        {
                            product_name: answer.purchase
                        }, 
                        function(err, res){})
                }else
                {
                    console.log("Insufficient quantity. Try again.")
                    start();
                }
            })
    })
};