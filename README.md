# BackendAssignment

## Routes

### All requests are post request.

### 1. Login ( http://localhost:5000/api/auth/login )
we have to send username and password in request body.
for ex, <br> </br>
{
    "username":"demo",
    "password":"12345"
}

Then we will get jwt token which we have to send in headers with name auth-token.
for ex, <br> </br>
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoibWFub2oifSwiaWF0IjoxNjY0Mjk3MDg3fQ.B-A9SJid894J9BnFj03tzXc3NdTkXREKopDA2q2suWQ
<br> </br>

### For below protected, we need to add auth-token in headers.


### 2. Add Address of user ( http://localhost:5000/api/tasks/add )

We need to send the address in request body.
for ex, <br> </br>
{
  "address":"lucknow"
}

Username from auth-token and address from req body will be stored in database.

we will get username and address in response.

### 3. Url to resized Thumbnail ( http://localhost:5000/api/tasks/urltoimage)

We need to send the url in the request body.
for ex, <br> </br>
{
    "uri":"https://cdn.pixabay.com/photo/2020/05/25/17/21/link-5219567_1280.jpg"
}


Then image is downloaded in image folder, and then resized image is saved in thumbnail folder. 

we get image address in response.


### 4. Applying patch to object (http://localhost:5000/api/tasks/patch)
We need to send document and patch in request body.
for ex, <br> </br>
{
  "document": { "firstName": "Sagar", "phoneNumbers": "" }, <br> </br>
   "patch": [
  { "op": "replace", "path": "/firstName", "value": "Manoj" },
  { "op": "add", "path": "/lastName", "value": "Kumar" },
  { "op": "add", "path": "/phoneNumbers", "value": "123-456"  }
]
}

we get result in response.

<br> </br>
### For any doubt, please email me: sagarsaini005@gmail.com
