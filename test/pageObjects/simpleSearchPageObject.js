const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
	
get clickCookies () { return $('#onetrust-accept-btn-handler') }
get searchBarClick () { return $('[name="query"]') }	
get enterText() {return $('._1g5dvk1')}

  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

// Click on Accept Cookies
async clickAcceptCookies() {
    //const acceptCookies =  await $('#onetrust-accept-btn-handler')
    await this.clickCookies.click()
  }

// Click on search button
   async clickSearchBar () {
    await this.searchBarClick.click()
  }

// Enter Samsung in search bar
   async enterTextSamsung () {
    await this.enterText.setValue('Samsung')
  }

// Verify samsung products are listed
  async verifySamsungListing () {

const myInput = $("//body/div[@id='home_root']/div[1]/nav[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/div[1]/span[1]")

this.expect(myInput).toHaveText('Samsung');

  }

}


function pauseBrowser(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}

module.exports = simpleSearchPageObject

