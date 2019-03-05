console.log("Hello")
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sharitas1',
  database: "bamazon"
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
connection.query('SELECT *FROM products', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  askQuestions();  
  // connected!
});
function askQuestions() {
  var inquirer = require('inquirer');
inquirer
  .prompt([
   {
     name: "which",
     message: "Which item would you like to buy?",
     type: "input",
   },
   
    {
      name: "howMany",
      message: "How many would you like to buy?",
      type: "input",
    },

  ])
  .then(answers => {console.log("what we typed", answers);
    connection.query("SELECT* from products WHERE item_id = " + answers.which, function(err, data){
      console.log(data)
      if(parseInt(answers.howMany) < data[0].stock_quantity){ 
        console.log("We have enough!")

       var totalPrice = data[0].price * answers.howMany
       console.log("Your total is " + " = " + "$" + totalPrice);
      
       var newQuantity = data[0].stock_quantity - parseInt(answers.howMany) 
        connection.query("UPDATE products SET stock_quantity = " + newQuantity +  " WHERE item_id = " + answers.which, function(err, data){
        // console.log(data)
        } )
      }
      else {
        console.log("Sorry. There aren't enough of those.")      
      }
    });
   

  });
}
