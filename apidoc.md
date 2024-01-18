//page1
# (GET) List of sweets
http://localhost:2729/sweets
# (GET) List of savouries
http://localhost:2729/savouries
# (GET) List of vadiyalu
http://localhost:2729/vadiyalu
# (GET) List of podulu
http://localhost:2729/podulu
# (GET) List of veg-pickles
http://localhost:2729/veg-pickles
# (GET) List of non-veg pickles
http://localhost:2729/non-vegpickles

//page2
# (GET) sweets wrt price
http://localhost:2729/sweets?price
http://localhost:2729/sweets?price=150
# (GET) sweets wrt rating
http://localhost:2729/sweets?rating=5
# (GET) sweets wrt weight
http://localhost:2729/sweets?weight=250gms

# (GET) savouries wrt price
http://localhost:2729/savouries?price=150
# (GET) savouries wrt rating
http://localhost:2729/savouries?rating=5
# (GET) savouries wrt weight
http://localhost:2729/savouries?weight=1kg

# (GET) vadiyalu wrt price
http://localhost:2729/vadiyalu?price=170
# (GET) vadiyalu wrt rating
http://localhost:2729/vadiyalu?rating=4.5
# (GET) vadiyalu wrt weight
http://localhost:2729/vadiyalu?weight=1kg

# (GET) podulu wrt price
http://localhost:2729/podulu?price=150
# (GET) podulu wrt rating
http://localhost:2729/podulu?price=150
# (GET) podulu wrt weight
http://localhost:2729/podulu?weight=500gms

# (GET) veg-pickles wrt price
http://localhost:2729/veg-pickles?price=125
# (GET) veg-pickles wrt rating
http://localhost:2729/veg-pickles?rating=4.5
# (GET) veg-pickles wrt weight
http://localhost:2729/veg-pickles?weight=500gms

# (GET) non-veg pickles wrt price
http://localhost:2729/non-vegpickles?price=350
# (GET) non-veg pickles wrt rating
http://localhost:2729/non-vegpickles?price=350
# (GET) non-veg pickles wrt weight
http://localhost:2729/non-vegpickles?price=350

//page3
# (POST) Details of item selected
http://localhost:2729/menuDetails
{
     "itemId":[3,5,6]
 }
# (POST) Place order
 http://localhost:2729/placeOrder
 { 
   "orderId": 2, 
  "name": "Nikita", 
  "email": "nikki@gmail.com", 
  "address": "Hom 25", 
  "phone": 8934645457, 
  "price": 166, 
  "itemId": [ 3, 34, 5 ], 
  "status": "Pending" 
  }

// Page4
# (GET) List of all orders wrt to user
http://localhost:2729/orders
http://localhost:2729/orders?email=neha@gmail.com
# (PUT) Update Order details
http://localhost:2729/updateOrder
{ 
    "_id":"6568bd34a53f5fb51e7c6741",
    "status":"On the way"
    }
# (DELETE) Delete Orders
http://localhost:2729/deleteOrder
{ 
    "_id": "6568bd34a53f5fb51e7c6741"
    }
