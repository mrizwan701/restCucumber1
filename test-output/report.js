$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/DemoRestAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Rest API Call with Cucumber demo",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify albums api",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-albums-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user send a GET request to \"http://jsonplaceholder.typicode.com/albums\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/albums",
      "offset": 28
    }
  ],
  "location": "DemoRestAPIStepDef.user_send_a_GET_request_to(String)"
});
formatter.result({
  "duration": 2784707846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "DemoRestAPIStepDef.status_code_should_be(int)"
});
formatter.result({
  "duration": 4198614,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "validate Album Size",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;validate-album-size",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user sends a GET request to \"http://jsonplaceholder.typicode.com/albums\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "album size should be 100",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/albums",
      "offset": 29
    }
  ],
  "location": "DemoRestAPIStepDef.user_sends_a_GET_request_to(String)"
});
formatter.result({
  "duration": 449243718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "DemoRestAPIStepDef.album_size_should_be(int)"
});
formatter.result({
  "duration": 104157,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify users api",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user calls the user api \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "on response user \"Bret\" should belong to company \"Romaguera-Crona\" and city \"Gwenborough\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 25
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api(String)"
});
formatter.result({
  "duration": 307129471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "DemoRestAPIStepDef.response_status_code_should_be(int)"
});
formatter.result({
  "duration": 96935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bret",
      "offset": 18
    },
    {
      "val": "Romaguera-Crona",
      "offset": 50
    },
    {
      "val": "Gwenborough",
      "offset": 77
    }
  ],
  "location": "DemoRestAPIStepDef.on_response_user_should_belong_to_company_and_city(String,String,String)"
});
formatter.result({
  "duration": 21563656,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"\u003cuname\u003e\" should belong to company \"\u003ccompanyname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;",
  "rows": [
    {
      "cells": [
        "uname",
        "companyname"
      ],
      "line": 21,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;1"
    },
    {
      "cells": [
        "Antonette",
        "Deckow-Crist"
      ],
      "line": 22,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;2"
    },
    {
      "cells": [
        "Samantha",
        "Romaguera-Jacobson"
      ],
      "line": 23,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;3"
    },
    {
      "cells": [
        "Karianne",
        "Robel-Corkery"
      ],
      "line": 24,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;4"
    },
    {
      "cells": [
        "Bret",
        "Romaguera-Crona"
      ],
      "line": 25,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;5"
    },
    {
      "cells": [
        "Antonette",
        "Deckow-Crist"
      ],
      "line": 26,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;6"
    },
    {
      "cells": [
        "Kamren",
        "Keebler LLC"
      ],
      "line": 27,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;7"
    },
    {
      "cells": [
        "Leopoldo_Corkery",
        "Considine-Lockman"
      ],
      "line": 28,
      "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"Antonette\" should belong to company \"Deckow-Crist\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 51
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api_to_match_user_and_company(String)"
});
formatter.result({
  "duration": 301257494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Antonette",
      "offset": 22
    },
    {
      "val": "Deckow-Crist",
      "offset": 59
    }
  ],
  "location": "DemoRestAPIStepDef.on_responses_user_should_belong_to_company(String,String)"
});
formatter.result({
  "duration": 2027271,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"Samantha\" should belong to company \"Romaguera-Jacobson\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 51
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api_to_match_user_and_company(String)"
});
formatter.result({
  "duration": 305042518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 22
    },
    {
      "val": "Romaguera-Jacobson",
      "offset": 58
    }
  ],
  "location": "DemoRestAPIStepDef.on_responses_user_should_belong_to_company(String,String)"
});
formatter.result({
  "duration": 1515227,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"Karianne\" should belong to company \"Robel-Corkery\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 51
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api_to_match_user_and_company(String)"
});
formatter.result({
  "duration": 312229770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karianne",
      "offset": 22
    },
    {
      "val": "Robel-Corkery",
      "offset": 58
    }
  ],
  "location": "DemoRestAPIStepDef.on_responses_user_should_belong_to_company(String,String)"
});
formatter.result({
  "duration": 1498881,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"Bret\" should belong to company \"Romaguera-Crona\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 51
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api_to_match_user_and_company(String)"
});
formatter.result({
  "duration": 359150850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bret",
      "offset": 22
    },
    {
      "val": "Romaguera-Crona",
      "offset": 54
    }
  ],
  "location": "DemoRestAPIStepDef.on_responses_user_should_belong_to_company(String,String)"
});
formatter.result({
  "duration": 926774,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"Antonette\" should belong to company \"Deckow-Crist\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 51
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api_to_match_user_and_company(String)"
});
formatter.result({
  "duration": 293700749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Antonette",
      "offset": 22
    },
    {
      "val": "Deckow-Crist",
      "offset": 59
    }
  ],
  "location": "DemoRestAPIStepDef.on_responses_user_should_belong_to_company(String,String)"
});
formatter.result({
  "duration": 1564644,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"Kamren\" should belong to company \"Keebler LLC\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 51
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api_to_match_user_and_company(String)"
});
formatter.result({
  "duration": 287550891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kamren",
      "offset": 22
    },
    {
      "val": "Keebler LLC",
      "offset": 56
    }
  ],
  "location": "DemoRestAPIStepDef.on_responses_user_should_belong_to_company(String,String)"
});
formatter.result({
  "duration": 1462007,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "verify users api for individual users",
  "description": "",
  "id": "rest-api-call-with-cucumber-demo;verify-users-api-for-individual-users;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user calls the user api to match user and company \"http://jsonplaceholder.typicode.com/users\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "on response userName \"Leopoldo_Corkery\" should belong to company \"Considine-Lockman\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://jsonplaceholder.typicode.com/users",
      "offset": 51
    }
  ],
  "location": "DemoRestAPIStepDef.user_calls_the_user_api_to_match_user_and_company(String)"
});
formatter.result({
  "duration": 285922764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leopoldo_Corkery",
      "offset": 22
    },
    {
      "val": "Considine-Lockman",
      "offset": 66
    }
  ],
  "location": "DemoRestAPIStepDef.on_responses_user_should_belong_to_company(String,String)"
});
formatter.result({
  "duration": 1236206,
  "status": "passed"
});
});