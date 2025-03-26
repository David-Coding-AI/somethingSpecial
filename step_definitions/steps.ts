
const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
    I.amOnPage('/');
    I.wait(5);
    I.click("/html/body/div[1]/div[1]/header/div[1]/div[2]/div[4]/deferred-side-panel/include-fragment/react-partial-anchor/button/span/span/img");
    I.wait(5);
});
When(/^I do something$/, function () {

});