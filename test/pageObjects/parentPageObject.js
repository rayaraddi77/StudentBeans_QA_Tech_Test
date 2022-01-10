const TEN_SECOND_TIMEOUT = 10000



class ParentPageObject {
  isElementEqualToExpected (element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal expected'
        return expect(element.getText(), errorMessage).to.equal(expectedText)
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  }


get submitBtn () { return $("input[name='query']") }
get searchWordEnter () { return $("input[type='text']") }		
get clickCookies () { return $('button[id="onetrust-accept-btn-handler"]') }	

}

module.exports = ParentPageObject
