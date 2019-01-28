package stepDefinitions;

import static io.restassured.RestAssured.given;
import java.util.List;
import org.junit.Assert;
import com.jayway.jsonpath.JsonPath;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import utility.Utils;

public class DemoRestAPIStepDef {
	Response response;
    List<String> list;
    
	@When("^user send a GET request to \"([^\"]*)\"$")
	public void user_send_a_GET_request_to(String url) {
		  response = given()
	                .when()
	                .get(url)
	                .then().log().status()
	                .extract()
	                .response();
		  System.out.println(response);
	}

	@Then("^status code should be (\\d+)$")
	public void status_code_should_be(int statusCode) {
	
		Assert.assertEquals("Status Code mismatch",statusCode, response.getStatusCode());
	}
	
	@When("^user sends a GET request to \"([^\"]*)\"$")
	public void user_sends_a_GET_request_to(String url) {
		 response = Utils.GET_Response(url);
	        list = JsonPath.read(response.asString(),"$.[*].id");
	        System.out.println(list);
	}

	@Then("^album size should be (\\d+)$")
	public void album_size_should_be(int albumSize) {
		Assert.assertEquals("Album Size mismatch",albumSize, list.size());
	}
	
	@When("^user calls the user api \"([^\"]*)\"$")
	public void user_calls_the_user_api(String url) {
		response = Utils.GET_Response(url);
	}

	@Then("^response status code should be (\\d+)$")
	public void response_status_code_should_be(int statusCode) {
		Assert.assertEquals("Status Code mismatch",statusCode, response.getStatusCode());
	}
	
//	@Then("^on response user \"([^\"]*)\" should belong to company \"([^\"]*)\"$")
	@Then("^on response user \"([^\"]*)\" should belong to company \"([^\"]*)\" and city \"([^\"]*)\"$")
	public void on_response_user_should_belong_to_company_and_city(String arg1, String arg2, String arg3) {
		 list = JsonPath.read(response.asString(),"$.[*].[?(@.username=='"+arg1+"')].company.name");
	        Assert.assertEquals(arg2, list.get(0));
	        System.out.println(list);
	        list = JsonPath.read(response.asString(),"$.[*].[?(@.username=='"+arg1+"')].address.city");
	        Assert.assertEquals(arg3, list.get(0));
	        System.out.println(list);
	}

	@When("^user calls the user api to match user and company \"([^\"]*)\"$")
	public void user_calls_the_user_api_to_match_user_and_company(String url) {
		response = Utils.GET_Response(url);
		System.out.println("Response from User API:  "+response);
	}

	@Then("^on response userName \"([^\"]*)\" should belong to company \"([^\"]*)\"$")
	public void on_responses_user_should_belong_to_company(String arg1, String arg2){
		list = JsonPath.read(response.asString(),"$.[*].[?(@.username=='"+arg1+"')].company.name");
	        Assert.assertEquals("User name doesn't match with Company Name",arg2,list.get(0));
	        System.out.println(list);
	}
}
