var homePage = {}

var useArray=require('../testAssets/ebayArray')

module.exports ={
    beforeEach: browser => {
        homePage = browser.page.ebayPage()
        homePage
            .navigate()
    },
    after: browser => {
        homePage
            .end()
    // },

    // 'search test' : browser => {
    //     homePage
    //         .search(browser)
    // },
    // 'add to cart' : browser => {
    //     homePage
    //         .daily(browser)

    // },
    // 'navigation menu test' : browser => {
    //     useArray.forEach(test =>(
    //         homePage
    //             .navigating(homePage, test)
    //     ))
     

    // },
    // 'sign in test' : browser => {
    //     homePage
    //         .signIn(browser)
    },
    'advanced search test' : browser => {
        homePage
            .advanced(browser)

    }


}