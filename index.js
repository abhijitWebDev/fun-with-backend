require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "abhijitWebDev",
  "id": 110275876,
  "node_id": "U_kgDOBpKtJA",
  "avatar_url": "https://avatars.githubusercontent.com/u/110275876?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abhijitWebDev",
  "html_url": "https://github.com/abhijitWebDev",
  "followers_url": "https://api.github.com/users/abhijitWebDev/followers",
  "following_url": "https://api.github.com/users/abhijitWebDev/following{/other_user}",
  "gists_url": "https://api.github.com/users/abhijitWebDev/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abhijitWebDev/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abhijitWebDev/subscriptions",
  "organizations_url": "https://api.github.com/users/abhijitWebDev/orgs",
  "repos_url": "https://api.github.com/users/abhijitWebDev/repos",
  "events_url": "https://api.github.com/users/abhijitWebDev/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abhijitWebDev/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 10,
  "created_at": "2022-07-30T05:26:33Z",
  "updated_at": "2023-09-17T08:01:35Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('Welcome to X')
})

app.get('/login', (req,res) => {
    res.send('<h1>Please login at Chai aur Code</h1>')
})

app.get('/youtube', (req, res) => {
res.send('<h2>Chai aur Code </h2>')
})

app.get('/github', (req,res) => {
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

