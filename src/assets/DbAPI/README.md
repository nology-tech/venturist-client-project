# Venturist API Endpoints

**GCP URL**
https://venturist-app.nw.r.appspot.com

**Users**

- /user - POST - returns - String
- /users - GET - returns - JSON array of objects
- /user/{id} - GET - returns - JSON object

**Transactions**

- /transactions - GET - returns - JSON array of objects
- /transactions - POST - returns - String

**Holdings**

- /holdings - GET - returns - JSON array of objects
- /holding/{id} - GET - returns - JSON object
- /user-holding/{userId} - GET - returns - JSON array of objects
- /holding - POST - returns - String
- /holdings - PUT - returns - String

**Contacts**

- /contact/{id} - DELETE - returns - string
- /contacts - GET - returns - JSON array of objects
- /contacts/{id} - GET - returns - JSON array of objects
- /contact - POST - returns - string

**Bank Account**

- /bank-account/{id} - GET - returns - JSON object
- /create-bank-account - POST - returns - String

**Addresses**

- /address - POST - returns - String
- /addresses - GET - returns JSON array of objects
- /address/{id} - GET - returns JSON object
- /user-address/{userId} - GET - returns JSON array of objects

**FX**

- /currencies - GET - returns - JSON object
- /currencies{currency} - GET - returns - JSON object
