module.exports = function expressMiddleware (router) {
  // get JIRA data here.
  router.get('/api', (req, res) => {
    console.log('api called')
    res.send('hello')
  })
}