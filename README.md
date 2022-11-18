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



