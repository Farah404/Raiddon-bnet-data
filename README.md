[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://www.npmjs.com/)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Farah404/Raiddon-bnet-data/blob/master/LICENSE)
[![git](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
[![Docker](https://badgen.net/badge/icon/docker?icon=docker&label)](https://www.docker.com/)
[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://i.pinimg.com/originals/21/f0/92/21f0929a92ebe840eb932af199fb3260.gif)


![RAIDDON](https://user-images.githubusercontent.com/96427557/200582770-00732e9c-733b-4706-acaf-f7a082bb4e78.png)


This microservice is a flexible and feature-rich javascript that allows you to fetch your [battle.net](https://us.shop.battle.net/en-us) acces token using the [BlizzAPI](https://github.com/blizzapi/blizzapi#blizzapi) in order to access to Blizzard Battle.net APIs.
<br />
This work is a part of a bigger project: RAIDDON. Raiddon is a project that fosters all the developpement and conceptual understandings acquired 
throughout  the  ISIKA  10-month  educational  program.  
<br />
The code will first fetch your access token then fetch multiple sets of data from Battle.net and finally store it into a MongoDB database named "raiddon-bnet-api"
<br />
The fetched data collections are:
```
Achievements categories,
Achivements,
Areas,
Armor,
Auction house index,
Alliance aucion house,
Horde auction house,
Character specialisations,
Class talents,
Consumables,
Containers,
Creature families,
Creature types,
Gems,
Item classes,
Mounts,
Playable classes,
Playable races,
Power types,
Professions,
Quest categories,
Quest types,
Realms,
Reputation factions,
Titles,
Weapons.
```


# Manual build
```
git clone https://github.com/Farah404/Raiddon
cd Raiddon
cd raiddon-bnet-data
npm install
```

# Setup
Register a client app with [Blizzard Battle.net Developer Portal](https://develop.battle.net/). Note down client id and client secret. <br />
Copy and rename the file `.env.sample` to `.env`. Edit it accordingly: <br />
```
PORT='8080'
API_BATTLENET_KEY='your client app id'
API_BATTLENET_SECRET='your client app secret'
MONGO_DB_URI="The link that allows you to connect to your Mongo Atlas free cluster"
ACCESS_TOKEN = "The access token retrieved using Raiddon-bnet-data"
```

# Run
### With Node:
```npm start```
### With Nodemon:
```nodemon start.js```

# Documentation

Get your client ID and client secret here: [BattleNet dev portal](https://develop.battle.net/)<br />
Official blizzard documentation: [Getting started with bnet API](https://develop.battle.net/documentation/guides/getting-started)

# Legal
This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.
Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.



