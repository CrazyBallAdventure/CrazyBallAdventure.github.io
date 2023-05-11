*This information is important because*

*API Design Best Practices*

What does REST stand for? <br>
-Representational State Transfer

REST APIs are designed around a ____.<br>
-resources, which can be any kind of object, data, or service that can be accessed by the client

What is an identifier of a resource? Give an example.<br>
-a URI (uniform Resource Identifier) uniquely identifies a resource by listing the resources' scheme name, authority, path, query, and fragment, though it doesnt need all of those components. ```HTTP E.G. https://adventure-works.com/orders/1```

What are the most common HTTP verbs?<br>
-GET, POST, PUT, PATCH, and DELETE

What should the URIs be based on?<br>
-It should follow a predictable, hierarchical structure to enable understandability & usability

Give an example of a good URI.<br>
-```foo://example.com:8042/over/there?name=ferret#nose```

What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?<br>
-A "chatty" API is one the requires the consumer to make a lot of distinct API calls to get needed info about a resource

What status code does a successful GET request return?<br>
-HTTP status code 200 (OK)

What status code does an unsuccessful GET request return?<br>
-either a error code 404 (Not found) or a error code 204 (No content)

What status code does a successful POST request return?<br>
-status code 201 (created)

What status code does a successful DELETE request return?<br>
-it will return a status code 204 (no content) to indicate that the information was successfully deleted