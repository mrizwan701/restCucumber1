Feature: Rest API Call with Cucumber demo

Scenario: verify albums api
    When user send a GET request to "http://jsonplaceholder.typicode.com/albums"
    Then status code should be 200
    
Scenario: validate Album Size
    When user sends a GET request to "http://jsonplaceholder.typicode.com/albums"
    Then album size should be 100
    
Scenario: verify users api
    When user calls the user api "http://jsonplaceholder.typicode.com/users"
    Then response status code should be 200
    And on response user "Bret" should belong to company "Romaguera-Crona" and city "Gwenborough"
 
Scenario Outline: verify users api for individual users
    When user calls the user api to match user and company "http://jsonplaceholder.typicode.com/users"
    Then on response userName "<uname>" should belong to company "<companyname>"
    
    Examples:
    |	uname		|	companyname		|
    |	Antonette	|	Deckow-Crist	|
    |	Samantha	|	Romaguera-Jacobson	|
    |	Karianne	|	Robel-Corkery	|
    |	Bret		|	Romaguera-Crona	|
    |	Antonette	|	Deckow-Crist	|
    |	Kamren		|	Keebler LLC		|
    |	Leopoldo_Corkery|Considine-Lockman|
    
    
    