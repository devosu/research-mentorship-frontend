// ./__tests__/__features__/healthApiRoute.steps.ts
//
// This is a sample step definition file for the sample feature file in

// @ts-check

const assert = require('assert');
const { binding, given, then, when } = require('cucumber-tsflow');

// Scenario 1: Sample scenario
@binding()
class SampleScenarioSteps {
  @given('The relevant background of the situation')
  public givenBackground(): void {
    // Setup goes here.
  }

  @when('Something happens naturally or through some actions')
  public whenSomethingHappens(): void {
    // Action goes here.
  }

  @then('The expected outcome should be achieved')
  public thenExpectedOutcome(): void {
    // Assertion goes here.
    assert.ok(true);
  }
}

module.exports = SampleScenarioSteps;
