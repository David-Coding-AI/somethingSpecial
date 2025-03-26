
const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
    I.amOnPage('/');
    I.wait(5);
    I.click("/html/body/div[1]/div[1]/header/div/div[2]/div/div/a");
    I.wait(5);
});
When(/^I do something$/, function () {

});
Given(/^I am in BTC$/, function () {

});
When(/^I login with valid credentials$/, function () {
    I.amOnPage('/');
    I.wait(5);
    I.fillField('input[id="1-email"]', 'Thisisme@gmail.com');
    I.fillField('input[id="1-password"]', 'AndYou');
    I.click('//*[@id="1-submit"]')
    I.wait(5);
    // id="1-email";
    // id="1-password";
    // id="1-submit";
});
