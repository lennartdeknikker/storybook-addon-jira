# JIRA addon for Storybook

This addon makes it possible to show JIRA tickets concerning components within an added Storybook panel.

## Usage
To use this addon, you will need to generate an API token for your JIRA account. This can be acquired [here](https://id.atlassian.com/manage-profile/security/api-tokens).

1.  Set up your ENV variables
    You will need to add an .env file containing the following values:
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
<details>
<summary>Want to ruin the surprise?</summary>
<br>
Well, you asked for it!
</details>

You can create this file by running `cp .env.example .env`. You then just need to add your own values.