var Steps = require('screener-runner/src/steps');

module.exports = {
    // full repository name for your project:
    projectRepo: 'flagstar/jobs-repo',

    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,

    sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        maxConcurrent: 10, // optional available concurrency you have from Sauce Labs
        // extendedDebugging: true, // optional
        // tunnelIdentifier: 'flagstar-staging' // optional
    },

    // CSS Animations can cause inconsistency in your screenshots, resulting in failing
    // visual tests. To alleviate this, Screener automatically disables CSS Animations
    // by default to help ensure consistent results.
    cssAnimations: false,

    disableAutoSnapshots: true,

    browsers: [
        // This config will run on Screener Infrastructure:
        // NOTE there is no ".0" ending in the version number tells Screener to run on it's own infrastructure.
        // {
        //     browserName: 'chrome',
        //     version: '79'
        // },

        // This config will run on Sauce Labs:
        // NOTE the .0 ending in the version number tells Screener to run on Sauce Labs infrastructure.
        {
            browserName: 'chrome',
            version: '80.0'
        },

        // This config will run on Sauce Labs:
        // NOTE the .0 ending in the version number tells Screener to run on Sauce Labs infrastructure.
        {
            browserName: 'firefox',
            version: '76.0'
        },

        {
            browserName: 'microsoftedge',
            version: '16.16299'
        },
        // {
        //     browserName: 'microsoftedge',
        //     version: '17.17134'
        // },
    ],

    resolutions: [
        // '1024x768',
        '1920x1080',
        // {
        //     deviceName: 'iPhone X'
        // },
        // {
        //     deviceName: 'Galaxy S8',
        //     deviceOrientation: 'landscape'
        // }
    ],

    states: [
        {
            url: 'https://flagstar.com/',
            name: 'Flagstar Home Page',
            steps: new Steps()
                .ignore('.__acs')
                .snapshot('Default UI State')
                .end()

        },
        {
            url: 'https://www.flagstar.com/personal/loans/home-loans/apply-for-a-home-loan.html',
            name: 'Apply for a Home Loan',
            steps: new Steps()
                .ignore('.__acs')
                .ignore('#phone')

                // .snapshot('Default UI State')

                // Select a refinance...
                .click('#relSelected')

                // Select a 15 year fixed...
                .click('#prod_drop_ref')
                .click('#prod_drop_ref > option:nth-child(3)')

                // Select reduce rate...
                .click('#ref_goal')
                .click('#ref_goal > option:nth-child(2)')

                // Set the estimated value...
                .setValue('#currval_input', '100000')

                // Set the current loan amount...
                .setValue('#refbalance_input', '50000')

                // Set the zip code...
                .setValue('#rfzip_input', '60606')

                // Set the credit rating...
                .click('#credit_ratingref')
                .click('#credit_ratingref > option:nth-child(2)')

                // Set the first name...
                .setValue('#get_fname', 'Tom')

                // Set the last name...
                .setValue('#get_lname', 'Jones')

                // Set the address...
                .setValue('#get_add', '101 N. Wacker Drive')

                // Set the zip...
                .setValue('#get_zip', '60606')

                // Set the city...
                // .setValue('#get_city', 'Chicago') // <=== AUTOFILLED

                // Set the state...
                .click('#selectoption')
                .click('#selectoption > option:nth-child(20)')

                .ignore('#searchresults > tbody')
                .snapshot('Home Refinance Input Values')
                .end()
        },
        {
            url: 'https://www.flagstar.com/branch-locator.html',
            name: 'Branch Locator',
            steps: new Steps()
                .ignore('.__acs')
                .setValue('#startAddress', '60606')
                .click('#locator-submit')
                .wait(2000)
                .snapshot('Branch Locator Search Results')
                .end()
        }
    ]
};