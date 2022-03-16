# Setting up and using ForEx API with Spring Boot

## Dependencies

As far as our research led us, for consuming this external API, you should only need _Spring Boot Web_:

```
        <dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
```

From here, you will need the following Classes:

- An application root Class (Annotated with @SpringBootApplication)
- A Controller Class (Annotated with @RestController)
- This part of the API does not implement CRUD, so only @GetMapping
  annotations are used at the endpoints.

This is an example of a Controller class:

```
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class FXController {

    @GetMapping("/hello")
    private String hello(){
        return "Hello!";
    }

    @GetMapping("/currencies")
    private ResponseEntity<Object> getCurrencies(){
        try {
            String url = "http://api.exchangeratesapi.io/v1/latest?access_key=a5d70fa4b404edb100ef0ebff23d52bc&format=1";
            RestTemplate restTemplate = new RestTemplate();
            Object currencies = restTemplate.getForObject(url, Object.class);
            return ResponseEntity.status(HttpStatus.OK).body(currencies);
        } catch(NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}


```

**Note** that in order to use with React, you will need to include `@CrossOrigin(origins = "http://localhost:3000/") ` when testing otherwise you will receive CORS errors and your fetch request will be denied. In the final Proxy API this will also include the URL of the hosted webapp.

Here we have an enpoint "/currencies", which returns the full list of currencies available from the API.
What is returned is a single Object in JSON like format, which looks a bit like this:

```
{
    "success": true,
    "timestamp": 1647444184,
    "base": "EUR",
    "date": "2022-03-16",
    "rates": {
        "AED": 4.040818,
        "AFN": 96.637023,
        "ALL": 123.055028,
        "AMD": 555.730489,

```

Where it can be seen that the base rate is set to EUR, with a date and a nested flat object "rates" which contains key/value pairs for around 170 currencies.

A more complex @GetMapping for MVP1 would be to add a url parameter to specify the base currency. However, the above works as a
proof of concept.

In React, this response object is easily parsed as JSON to be used where needed in the React frontend.

The important Spring feature - the Spring Rest Client Class, to take note of here is [RestTemplate](https://www.baeldung.com/rest-template) which is able to perform HTTP requests, in this case, a GET request using the _getForEntity()_ API, as can be seen in the Controller class snippet. **Note** While the RestTemplate will work fine in this scenario, this is being deprecated in favor of [Spring 5 WebClient](https://www.baeldung.com/spring-5-webclient), which is a more performant HTTP Client for Spring.

As part of this research ticket, we also carried out some testing using JUnit to check what our endpoints were returning.

**Possible Additions**

- Additional GET endpoint/s which take different URL params to change the base currency
- caching of returned data to limit 3rd party API calls
- More detailed JUnit testing
- Update to use WebClient instead of RestTemplate
