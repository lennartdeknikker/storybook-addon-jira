# JIRA addon for Storybook

This addon makes it possible to show JIRA tickets concerning components within an added Storybook panel.

## Usage
To use this addon, you will need to generate an API token for your JIRA account. This can be acquired [here](https://id.atlassian.com/manage-profile/security/api-tokens).

1.  You will need to add the following values to your `.env` file.:
    <details>
    <summary>`STORYBOOK_JIRA_API_ENDPOINT=`</summary> 
    This will be the API endpoint for obtaining ticket data from JIRA. This will be something like: `https://<company-name>.atlassian.net/rest/api/latest/issue`
    </details>
    <details>
    <summary>`STORYBOOK_JIRA_USERNAME=`</summary>
    This will be your username for logging in to JIRA. Most of the times it will just be your email address.
    </details>
    <details>
    <summary>`STORYBOOK_JIRA_API_KEY=`</summary>
    You can obtain your api-key for JIRA [here](https://id.atlassian.com/manage-profile/security/api-tokens>).
    </details>
    <details>
    <summary>`STORYBOOK_JIRA_BASE_URL=`</summary>
    This will be something like: `https://<company-name>.atlassian.net/browse`.
    </details>


2.  Within storybook you then need to run some middleware to set up the api. To do this, add a `middleware.js` file in your `.storybook` folder. This file then needs to contain the following code:

    ```js
    const fetch = require("node-fetch");

    module.exports = function expressMiddleware (router) {
      router.get('/api', (req, res) => {

          const myHeaders = new fetch.Headers();
          const authHeader = `Basic ${Buffer.from(`${process.env?.STORYBOOK_JIRA_USERNAME}:${process.env?.STORYBOOK_JIRA_API_KEY}`).toString('base64')}`
          myHeaders.append("Authorization", authHeader);

          const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };

          fetch(`${process.env.STORYBOOK_JIRA_API_ENDPOINT}/${req.query?.ticketId}`, requestOptions)
            .then(response => response.json())
            .then(result => {
              res.send(result)
            })
            .catch(error => console.log('error', error));
      })
    }
    ```
    You might need to add `node-fetch` to your dev dependencies by running `yarn add node-fetch -D`.