# Sauce Visual End to End Example

## Prerequisites

1. Download and install the current LTS version of Node.js from https://nodejs.org/en/.
2. Clone this repo to your local drive:

    ```bash
    git clone https://github.com/billmeyer/flagstar-visual-example
    ```
   
3. Change the current directory:

    ```bash
    cd flagstar-visual-example
    ```
       
4. Install the package dependencies:

    ```bash
    npm install
    ```

## Configuration

Ensure these environment variables are set appropriately:

* SCREENER_API_KEY      &larr; Located at https://screener.io/v2/account/api-key
* SAUCE_USERNAME        &larr; Located at https://app.saucelabs.com/user-settings
* SAUCE_ACCESS_KEY      &larr; Located at https://app.saucelabs.com/user-settings

## Execution

1. From the `flagstar-visual-example` directory, execute:

    ```
    npm run test-screener
    ```
   
2. Once complete, visit the dashboard at https://screener.io/v2/dashboard to view the comparisons.


## Additional Links

* https://github.com/screener-io/screener-runner
    - The `screener-runner` GitHub page has useful information for configuring `screener.config.js` to run `screener-runner` tests.
    
* https://screener.io/v2/docs/test-interactions
    - Documents the `Steps` API for interacting with webpages.       