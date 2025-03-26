
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
    I.wait(2);
    I.fillField('input[id="1-email"]', 'dyurchuk+prodam1@seagullscientific.com');
    I.fillField('input[id="1-password"]', 'Am1DevCluster@');
    I.click('//*[@id="1-submit"]');
    I.wait(2);
    I.click('//*[@id="profileDropdown"]');
    I.click('//*[@id="root"]/div[1]/div[2]/div/div[2]/div/div/div[2]/a');
    I.wait(2);
    // id="1-email";
    // id="1-password";
    // id="1-submit";
    // id="profileDropdown";
});
