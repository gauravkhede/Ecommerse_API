# Ecommerse_API
this is Ecommerce API and test it using postman

# Demo Video:
Link to the Demo Video : 
# Key Features:

- To view Products in our inventory
- Add new products in our inventory
- Delete a particular product using product ID
- Update a quantity of a particular Product using product ID
- 
# Routes & URL :
- **/api/v1/products** : To view the products in our inventory , hit the following URL with a GET request: https://ecommerce-api-gaurav.herokuapp.com/api/v1/produts
- **/api/v1/products/create** : To create a new product for our inventory, hit the following URL with a POST request: https://ecommerce-api-gaurav.herokuapp.com/api/v1/products/create
- **/api/v1/produts/:id**: To delete a particular product from our inventory you need to hit the following URL with DELETE request: https://ecommerce-api-gaurav.herokuapp.com/api/v1/products/:idOfProduct
- **/api/v1/products/:id/update_quantity/?number=**: To update quantity of a particular product in our inventory, hit the following URL with POST request: https://ecommerce-api-gaurav.herokuapp.com/api/v1/products/:idOfProduct/update_quantity/?number=UpdatedQuantity

# To run the project on your local machine:
  1) Open terminal. 
 
  2) Change the current working directory to the location where you want the cloned directory.
  
  ```
  $ git clone https://github.com/gauravkhede/Ecommerse_API
  ```
  
  3) Install all the dependencies by running :
  
  ```
  npm install
  ```
  
  4) nodemon index.js to run the project at local host, port 8000:
  
   ```
  nodemon index.js
  ```
  
  5) Create a new Product by hitting following URL with POST request :  
  
  ```
  http://localhost:8000/api/v1/products/create
  ```
