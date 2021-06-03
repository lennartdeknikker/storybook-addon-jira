const fetch = require("node-fetch");

module.exports = function expressMiddleware (router) {
  // get JIRA data here.
  router.get('/api', (req, res) => {

      const myHeaders = new fetch.Headers();
      const authHeader = `Basic ${btoa(`${process.env?.STORYBOOK_JIRA_USERNAME}:${process.env?.STORYBOOK_JIRA_API_KEY}`)}`
      const cookieHeader = `atlassian.xsrf.token=${process.env.STORYBOOK_ATLASSIAN_XSRF_TOKEN}`
      myHeaders.append("Authorization", authHeader);
      myHeaders.append("Cookie", cookieHeader);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${process.env.STORYBOOK_JIRA_API_ENDPOINT}/${req.query?.ticketId}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log('got result'))
        .catch(error => console.log('error', error));

    res.send('hello')
  })
}