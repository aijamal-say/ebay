var searchCommands ={
    //testing for the search bar function
    search: function (browser) {
        this
            .maximizeWindow()
            .click('@searchBar')
            .setValue('@searchBar',['Apple Watch', browser.Keys.ENTER])
            .verify.containsText('@searchResult','Apple Watch')
        return this
    }
}

var dailyDealCommands ={
    //testing the navigating function of daily deal bar 
    daily: function (browser){
        this
        
            .useXpath()
            .maximizeWindow()
            .click('//*[text()=" Daily Deals"]')
            .click('//*[text()="Bose Home Speaker 450, Certified Refurbished"]')
            .useCss()
            .verify.containsText('@itemName', "Bose Home Speaker 450, Certified Refurbished")
            .pause(1000)
            .click('@addCart')
            .verify.containsText('@cartMessage',"1 item added to cart")
           
            
            
        return this
            
        
    }
        
}

var navigationCommands ={
    //testing if the category menu is navigating to the corresponding links
    navigating: function(browser, data) {
        this
            .api.useXpath()
            .click(`(//li[@class="hl-cat-nav__js-tab"])[${data.number}]`)
            .verify.containsText('//span[@class="b-pageheader__text"]', data.category)
            .back()

        return this

    }
}

var userCommands ={
    //testing for the sign in feature
    signIn: function (browser) {
        this
        .maximizeWindow()
        .click('@signInBtn')
        .click('@userName')
        .setValue('@userName','sayakbae@gmail.com')


        return this

    }
}


var advancedCommands ={
    // this is to test the advanced search section
    advanced: function (browser) {
        this
        .maximizeWindow()
        .click('@advancedBtn')
        .click('@keywordField')
        .setValue('@keywordField','puppy raincoats')
        .click('@excludingField')
        .setValue('@excludingField','yellow')
        .click('@secondSearchBtn')
        .verify.containsText('@secondSearchResult','puppy raincoats -yellow')


        return this
    }
}

module.exports ={
    url: 'https://www.ebay.com/',
    commands:[searchCommands, dailyDealCommands, navigationCommands,userCommands,advancedCommands],
    elements: {
    
    // selectors for search test
    searchBar: 'input[class="gh-tb ui-autocomplete-input"]',
    searchButton: 'input[class="btn btn-prim gh-spr"]',
    searchResult: '[class="srp-controls__count-heading"]',

    //selectors for add to cart test
    itemName: '#itemTitle',
    addCart: 'a[_sp="p2047675.l1473"]',
    cartMessage: '[class="vi-overlayTitleBar"]',
  
    
    //selectors for sign in test
    signInBtn: 'a[_sp="m570.l1524"]',
    userName: '#userid',
    
    
    //selectors for advanced search
    advancedBtn:'#gh-as-a',
    keywordField: '#_nkw',
    excludingField: '#_ex_kw',
    secondSearchBtn: '[class="btn btn-prim"]',
    secondSearchResult: '[class="kwcat"]'
    
    
            
        }
    }