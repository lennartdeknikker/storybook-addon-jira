module.exports = function expressMiddleware(router) {
  
  router.get('/api', (req, res) => {
      const myHeaders = new Headers()
      myHeaders.append("Authorization", `Bearer ${process.env?.STORYBOOK_JIRA_PERSONAL_ACCESS_TOKEN}`)
      myHeaders.append("Content-Type", "application/json")
    
      const myInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      }

      const myRequest = new Request(`${process.env.STORYBOOK_JIRA_API_ENDPOINT}/${req.query?.ticketId}`)
      fetch(myRequest, myInit)
        .then(response => response.json())
        .then(result => {
          res.send(result)
        })
        .catch(error => console.log('error', error));
  })

  router.get('/avatar', (req, res) => {
    const myHeaders = new Headers()
    myHeaders.append("Authorization", `Bearer ${process.env.STORYBOOK_JIRA_PERSONAL_ACCESS_TOKEN}`)
  
    const myInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    }

    const myRequest = new Request(req.query?.url)
    return fetch(myRequest, myInit)
      .then(response => response.blob())
      .then((blob) => {
        res.type(blob.type)
        blob.arrayBuffer().then((buf) => {
          res.send(Buffer.from(buf))
        })
      })
      .catch(error => console.log('error', error));
  })
}
