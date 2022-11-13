![RAIDDON](https://user-images.githubusercontent.com/96427557/200582770-00732e9c-733b-4706-acaf-f7a082bb4e78.png)

![Battle net_2021_logo](https://user-images.githubusercontent.com/96427557/201051929-e0a4dc90-f852-4175-a8df-06f6f0eead91.jpg)


This microservice is a flexible and feature-rich javascript that allows you to fetch your [battle.net](https://us.shop.battle.net/en-us) acces token using the [BlizzAPI](https://github.com/blizzapi/blizzapi#blizzapi) in order to access to Blizzard Battle.net APIs.

# Install

`npm install blizzapi`

# Quick start
```javascript
const { BlizzAPI } = require("blizzapi");

/**
 * Or using TypeScript:
 * import { BlizzAPI } from 'blizzapi';
 */

const api = new BlizzAPI({
  region: "us",
  clientId: "client id",
  clientSecret: "client secret",
});

const data = await api.query("/path/to/endpoint");

console.log(data);
```
# Manual build
```
git clone https://github.com/Farah404/Raiddon
cd Raiddon
cd bnet-access-token-express
npm install
```

# Setup
Register a client app with [Blizzard Battle.net Developer Portal](https://develop.battle.net/). Note down client id and client secret. <br />
Copy and rename the file `.env.sample` to `.env`. Edit it accordingly: <br />
```
PORT='8080'
API_BATTLENET_KEY='your client app id'
API_BATTLENET_SECRET='your client app secret'
```

# Run
### With Node:
```npm start```
### With Nodemon:
```nodemon start.js```

# Available endpoints
## API endpoints
 ```GET /api/query/:region?endpoint=:endpoint```
<br />
Fetches data from a Battle.net API endpoint using a specified regional server using [BlizzAPI.query](https://blizzapi.lukem.net/docs/usage/query.html) method.
<br />
Example: ```http://localhost:8085/api/query/1?endpoint=/sc2/profile/1/2/242838```
<br /><br />
 ```GET /api/query/:region?endpoint=:endpoint```
<br />
Obtains and returns OAuth access token using [BlizzAPI.getAccessToken](https://blizzapi.lukem.net/docs/usage/getting-access-token.html) method.
<br />
Example: ```http://localhost:8085/api/getAccessToken/eu```

# Documentation

Get your client ID and client secret here: [BattleNet dev portal](https://develop.battle.net/)<br />
Official blizzard documentation: [Getting started with bnet API](https://develop.battle.net/documentation/guides/getting-started)

# Legal
This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.



