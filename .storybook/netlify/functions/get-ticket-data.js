const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  
  const myHeaders = new fetch.Headers();
  const authHeader = `Basic ${Buffer.from(`${process.env.STORYBOOK_JIRA_USERNAME}:${process.env.STORYBOOK_JIRA_API_KEY}`).toString('base64')}`
  myHeaders.append("Authorization", authHeader);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const ticketData = await fetch(`${process.env.STORYBOOK_JIRA_API_ENDPOINT}/${event.queryStringParameters.ticketId}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    return result
  })
  .catch(error => console.log('error', error));
  
  return {
    statusCode: 200,
    body: JSON.stringify(ticketData)
  }
}
