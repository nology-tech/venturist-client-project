# Foreign Exchange API

Based on research, the FX API we have decided to use is [exchange rates](https://manage.exchangeratesapi.io).

The features of the free plan include:

- 250 requests per month
- Daily updates
- Historical rates
- Limited support
- One base currency

With the basic paid plan ($9.99 p/m) adding significantly more requests p/m, more regular updates (hourly) and
the option to change the base currency. The base currency for this API is fixed at EUR. Based on the limitations of the free plan, we would recommend that aside from testing,
the final API should ideally make as fewer requests as possible, and cache the data for frontend requests.

---

## Details

### API Key

For testing purposes, David and Lewis have both signed up for accounts, so we can switch if we end up using up our monthly
allowance. The API keys to use for now is:

**a5d70fa4b404edb100ef0ebff23d52bc**

### Endpoints

All of the endpoints involve modifying the URL params, the the API key being the first argument, and additional queries appended using the ampersand, e.g:

`http://api.exchangeratesapi.io/v1/latest?access_key=a5d70fa4b404edb100ef0ebff23d52bc&format=1&symbols=USD,AUD,CAD`

**Latest**

For the MVP, we would suggest fetching all currencies in one API call:

`http://api.exchangeratesapi.io/v1/latest?access_key=a5d70fa4b404edb100ef0ebff23d52bc&format=1`

Then caching and filtering the results using custom Java/ Spring method.

```
// "latest" endpoint - request the most recent exchange rate data

http://api.exchangeratesapi.io/v1/latest

    ? access_key = YOUR_ACCESS_KEY
    & base = GBP
    & symbols = USD,AUD,CAD,PLN,MXN


```

**Historical**

`http://api.exchangeratesapi.io/v1/2021-10-01?access_key=a5d70fa4b404edb100ef0ebff23d52bc&format=1`

```
// "historical" endpoint - request historical rates for a specific day

http://api.exchangeratesapi.io/v1/YYYY-MM-DD

    ? access_key = YOUR_ACCESS_KEY
    & base = JPY
    & symbols = USD,AUD,CAD,PLN,MXN

```

**Convert**

Example endpoint for converting GBP to EUR

`http://api.exchangeratesapi.io/v1/convert?access_key=a5d70fa4b404edb100ef0ebff23d52bc&from="GBP"&to="EUR"`

```
// "convert" endpoint - convert any amount from one currency to another
// using real-time exchange rates

http://api.exchangeratesapi.io/v1/convert

    ? access_key = YOUR_ACCESS_KEY
    & from = USD
    & to = EUR
    & amount = 25


// append an additional "date" parameter if you want to use
// historical rates for your conversion

    & date = YYYY-MM-DD

```

There are also endpoints for _Time-Series_ and _Fluctuation_, but these may be outside of the scope at this stage of the MVP.
