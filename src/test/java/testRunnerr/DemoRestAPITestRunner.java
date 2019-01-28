package testRunnerr;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features/DemoRestAPI.feature"
		,glue = {"stepDefinitions"}  //path of the step definition file
		,format = {"pretty","html:test-output","json:json-output/report.json","junit:junit-xml/report.xml"}
		,monochrome = true  // console output in good readable format
		,dryRun = false  // to make sure the mapping is perfect between features and step definition
		)

public class DemoRestAPITestRunner {

}
