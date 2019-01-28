package utility;

import static io.restassured.RestAssured.given;

import io.restassured.response.Response;

public class Utils {
	
	public static Response GET_Response(String endPoint) {
        Response response = given()
                .when()
                .get(endPoint)
                .then()
                .log().status()
                .extract().response();
        return response;
    }

}
