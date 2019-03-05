#Bamazon
Bamazon is an application that simulates an online storefront using Node.js and MySql.  The app is designed to take orders from the user based on the items provided and deplete the inventory.

##Installation
Run npm install to install dependencies

##How it works
Initialize the app in the terminal via the bamazon.js file.
User is given a listing and asked which item they would like to buy.
User enters the item number and is then asked how many of the item they would like.
Once quantity is entered, the app searches inventory and renders a response telling the user that there is enough of that item.  User is given the total cost of the order. 
Database updates. When refreshed, items are removed the from inventory.
If a larger quantity of an item is ordered than is available, the user receives a message informing them as such.

##Goal of Project
The goal of this project is to demonstrate my proficiency with Node and MySql.

##Contributing
Pull requests are welcome.  Please make sure to update tests as appropriate.
