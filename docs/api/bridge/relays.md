
# Relayers

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails">
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/relays_pages/relay_info </a> 
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/relay_info"> 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get relayer info</h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "frozenStake": "258917.752572214000",
  "untilFrozen": 1661463628000,
  "latestReward": "0",
  "totalReward": "8800.73179149",
  "successfulRounds": 18,
  "totalCountRounds": 20,
  "relayTotalConfirmed": 7291,
  "potentialTotalConfirmed": 8403,
  "evmStats": [
    {
      "chainId": 1,
      "relayConfirmed": 1801,
      "potentialConfirmed": 2047
    },
    ...
    {
      "chainId": 43114,
      "relayConfirmed": 106,
      "potentialConfirmed": 123
    }
  ]
} 
```
</details>

</details>

</div>

This function is used to return information about a specific relayer based on its address.

It can be used anywhere where details about a specific relayer is needed such as details about events and their confirmation, validating rounds, rewards, stake etc.

### Request parameters

Required body parameters:

| Name         | Example value                                                      | Comment                        |
| ------------ | ------------------------------------------------------------------ | ------------------------------ |
| relayAddress | 0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557 | Address of the desired relayer |

### Response fields explanation

| Name                    | Example value       | Comment                                                |
| ----------------------- | ------------------- | ------------------------------------------------------ |
| evmStats                | -                   | List of data related to the evm actions                |
| chainId                 | 1                   | Id of the chain                                        |
| potentialConfirmed      | 2047                | Number of potential events confirmed                   |
| relayConfirmed          | 1801                | Actual number of events confirmed                      |
| frozenStake             | 258917.752572214000 | Frozen stake of the relayer                            |
| latestReward            | 0                   | Reward acquired from the last round                    |
| potentialTotalConfirmed | 20                  | Total number of potential events confirmed             |
| relayTotalConfirmed     | 7291                | Actual total number of confirmed events                |
| successfulRounds        | 18                  | Rounds that ended successfully for the certain relayer |
| totalCountRounds        | 20                  | Total number of rounds relayer participated in         |
| totalReward             | 8800.73179149       | Total amount of reward the relayer acquired            |
| untilFrozen             | 1661463628000       | Date time until the stake will be frozen               |

### Example

```javascript
app.post('/relays_pages/relay_info', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relay_info`,
        data: {
            relayAddress: req.body.relayAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})​
```

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/relays_pages/relay_round_info</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/relay_round_info" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get relayer round info</h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "relayAddress": "0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557",
  "roundNum": 15,
  "stake": "258917.752572214000",
  "eventsConfirmed": 661,
  "tonToEthUsdt": "5567068.9741",
  "ethToTonUsdt": "6119978.1405",
  "relayPlace": 1,
  "eventsConfirmedShare": "0.9511",
  "totalRoundConfirms": 695,
  "roundAddress": "0:20e866e80bb8ded0ad14f7317a58b05d378fd108306aafed64650465cd68b19e",
  "startTime": 1653999926000,
  "endTime": 1654604726000,
  "evmStats": [
   {
   ...
  {
      "chainId": 250,
      "relayConfirmed": 7,
      "potentialConfirmed": 7
    },
    {
      "chainId": 43114,
      "relayConfirmed": 16,
      "potentialConfirmed": 17
    }
  ]
}
```
</details>

</details>

</div>

This function use to get validation round info.

It can be used for showing a relayer’s efforts in one specific round.\
Following data about the relayer’s performance based on the round number can be displayed:\
How much a relayer staked to become a relayer, number of events he confirmed, volume from all the transfers relayer validated happened from everscale to ethereum network and vice versa shown in USDTs, round address, start and end time of the round.

### Request parameters:

Required body parameters:

| Name         | Example value                                                      | Comment                        |
| ------------ | ------------------------------------------------------------------ | ------------------------------ |
| relayAddress | 0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557 | Address of the desired relayer |

### Response fields explanation

| Name                 | Example value                                                      | Comment                                                                             |
| -------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| endTime              | 1654604726000                                                      | Date time of the validation round’s end                                             |
| ethToTonUsdt         | 6119978.1405                                                       | Total amount of ethereum tokens in USDT swapped to everscale tokens and transferred |
| eventsConfirmed      | 661                                                                | Total number of events the relayer confirmed in the current round                   |
| evmStats             | : \[                                                               | List of data related to the evm events                                              |
| chainId              | 1                                                                  | Id of the chain                                                                     |
| potentialConfirmed   | 144                                                                | Number of potential events confirmed                                                |
| relayConfirmed       | 143                                                                | Number of actual events confirmed                                                   |
| relayAddress         | 0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557 | Address of the relayer                                                              |
| relayPlace           | 1                                                                  | Place of the relayer                                                                |
| roundAddress         | 0:20e866e80bb8ded0ad14f7317a58b05d378fd108306aafed64650465cd68b19e | Address of the round certain relayer is participating in                            |
| roundNum             | 15                                                                 | Round number                                                                        |
| stake                | 258917.752572214000                                                | Amount relayer staked to become one of the participants                             |
| startTime            | 1653999926000                                                      | Date time of round start                                                            |
| tonToEthUsdt         | 5567068.9741                                                       | Total amount of everscale tokens in USDT swapped to ethereum tokens and transferred |
| totalRoundConfirms   | 695                                                                | Number of total confirms in the monitored round                                     |
| eventsConfirmedShare | 0.9511                                                             | Share of the relayer per event confirmed                                            |

### Example

```java
app.post('/relays_pages/relay_round_info', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relay_round_info`,
        data: {
            relayAddress: req.body.relayAddress,
            roundNum: req.body.roundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/relays_pages/relays_round_info</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/relays_round_info" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get relayers round info</h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "relays": [
    {
      "relayAddress": "0:ef79b4aac06c33ab3435943d196de9ba9ee48a3e4572c86a8ad3a2bf84b4f767",
      "roundNum": 15,
      "stake": "100000",
      "eventsConfirmed": 661,
      "tonToEthUsdt": "5567068.9741",
      "ethToTonUsdt": "6485680.9782",
      "relayPlace": null,
      "eventsConfirmedShare": "0.9511",
      "totalRoundConfirms": 695,
      "roundAddress": "0:20e866e80bb8ded0ad14f7317a58b05d378fd108306aafed64650465cd68b19e",
      "startTime": 1653999926000,
      "endTime": 1654604726000,
      "evmStats": []
    },
    ...
   {
      "relayAddress": "0:a2848bfafd47a43ac029e3c55c7241804be7fe3331ed3e965862431a78f528e1",
      "roundNum": 15,
      "stake": "100000",
      "eventsConfirmed": 630,
      "tonToEthUsdt": "5567068.9741",
      "ethToTonUsdt": "5732605.3024",
      "relayPlace": null,
      "eventsConfirmedShare": "0.9065",
      "totalRoundConfirms": 695,
      "roundAddress": "0:20e866e80bb8ded0ad14f7317a58b05d378fd108306aafed64650465cd68b19e",
      "startTime": 1653999926000,
      "endTime": 1654604726000,
      "evmStats": []
    }
  ],
  "totalCount": 23
}
```
</details>

</details>

</div>


This function returns list of relayers and details about them based on the round number they are part of.

Can be used for listing all or certain number of relayers when it comes to one validation round.\
Some of the details about the relayers are number of confirmed events and the share per event, relay’s address, list of events, place of a relayer and also info about the round such as start and end time, round number and address, etc.

### Request parameters

Required body parameters:

| Name     | Example value  | Comment                                                                                            |
| -------- | -------------- | -------------------------------------------------------------------------------------------------- |
| limit    | 10             | Maximum number of relayers to be retrieved                                                         |
| offset   | 0              | Offset                                                                                             |
| ordering | stakeascending | Value based on which the retrieved relayer data will be ordered (stakeascending, stakedescending…) |
| roundNum | 15             | Round number                                                                                       |

### Response fields explanation

| Name                 | Example value                                                      | Comment                                                                                                   |
| -------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| relays               | : \[                                                               | List of relays participating in the given round, determined by the amount set in the limit body parameter |
| endTime              | 1654604726000                                                      | Date time of the validation round’s end                                                                   |
| ethToTonUsdt         | 5567068.9741                                                       | Total amount of ethereum tokens in USDT swapped to everscale tokens and transferred                       |
| eventsConfirmed      | 661                                                                | Total number of events the relayer confirmed in the current round                                         |
| eventsConfirmedShare | 0.9511                                                             | Share of the relayer per event confirmed                                                                  |
| evmStats             | : \[]                                                              | List of data related to the evm events                                                                    |
| chainId              | 0                                                                  | Id of the chain                                                                                           |
| potentialConfirmed   | 0                                                                  | Number of potential events confirmed                                                                      |
| relayConfirmed       | 0                                                                  | Number of actual events confirmed                                                                         |
| relayAddress         | 0:ef79b4aac06c33ab3435943d196de9ba9ee48a3e4572c86a8ad3a2bf84b4f767 | Address of the relayer                                                                                    |
| relayPlace           | null                                                               | Place of the relayer                                                                                      |
| roundAddress         | 0:20e866e80bb8ded0ad14f7317a58b05d378fd108306aafed64650465cd68b19e | Address of the round certain relayer is participating in                                                  |
| roundNum             | 15                                                                 | Round number                                                                                              |
| stake                | 100000                                                             | Amount relayer staked to become one of the participants                                                   |
| startTime            | 1653999926000                                                      | Date time of round start                                                                                  |
| tonToEthUsdt         | 5567068.9741                                                       | Total amount of everscale tokens in USDT swapped to ethereum tokens and transferred                       |
| totalRoundConfirms   | 695                                                                | Number of total confirms in the monitored round                                                           |
| totalCount           | 23                                                                 | Total number of relayers participating in the round with given round number                               |

### Example

```java
app.post('/relays_pages/relays_round_info', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relays_round_info`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            roundNum: req.body.roundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```


<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/relays_pages/all_relay_ronds_info</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/all_relay_ronds_info" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get all validation rounds info</h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "relays": [
    {
      "relayAddress": "0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557",
      "roundNum": 1,
      "stake": "244636",
      "eventsConfirmed": 97,
      "tonToEthUsdt": "573326.1229",
      "ethToTonUsdt": "401075.7860",
      "relayPlace": null,
      "eventsConfirmedShare": "0.8981",
      "totalRoundConfirms": 108,
      "roundAddress": "0:77f4e7eb93d7fb3432f297782f2cd2e5fb2a62bb05d8a9590ea54c6ab954254d",
      "startTime": 1645303857000,
      "endTime": 1645908657000,
      "evmStats": []
    },
    ...
   {
      "relayAddress": "0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557",
      "roundNum": 10,
      "stake": "244636",
      "eventsConfirmed": 529,
      "tonToEthUsdt": "5204152.7479",
      "ethToTonUsdt": "4509235.2178",
      "relayPlace": null,
      "eventsConfirmedShare": "0.8773",
      "totalRoundConfirms": 603,
      "roundAddress": "0:cc312267aa40b7f9a56ce1aad46dbca5088c2d30ee1ba88555d2e97941ac9816",
      "startTime": 1650975926000,
      "endTime": 1651580726000,
      "evmStats": []
    }
  ],
  "totalCount": 18
}
```
</details>

</details>

</div>

This function returns all validation relay rounds in which specified relayer took part in.

It can be used for monitoring a relayer's activity and history by retrieving data such as details about events and share per event, round details, relayer’s place and stake, etc. only by inputting relayer’s address.

### Request parameters

Required body parameters:

| Name        | Example value                                                      | Comment                                                                                            |
| ----------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| limit       | 10                                                                 | Maximum number of relayers to be retrieved                                                         |
| offset      | 0                                                                  | Offset                                                                                             |
| ordering    | roundnumascending                                                  | Value based on which the retrieved relayer data will be ordered (stakeascending, stakedescending…) |
| userAddress | 0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557 | Address of the relayer                                                                             |

### Response fields explanation

| Name               | Example value                                                      | Comment                                                                             |
| ------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| evmStats           | \[]                                                                | List of data related to the evm events                                              |
| chainId            | 0                                                                  | Id of the chain                                                                     |
| potentialConfirmed | 0                                                                  | Number of potential events confirmed                                                |
| relayConfirmed     | 0                                                                  | Number of actual events confirmed                                                   |
| relayAddress       | 0:aacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557  | Address of the relayer                                                              |
| relayPlace         | null                                                               | Place of the relayer                                                                |
| roundAddress       | 0:77f4e7eb93d7fb3432f297782f2cd2e5fb2a62bb05d8a9590ea54c6ab954254d | Address of the round certain relayer is participating in                            |
| roundNum           | 1                                                                  | Round number                                                                        |
| stake              | 244636                                                             | Amount relayer staked to become one of the participants                             |
| startTime          | 1645303857000                                                      | Date time of round start                                                            |
| tonToEthUsdt       | 573326.1229                                                        | Total amount of everscale tokens in USDT swapped to ethereum tokens and transferred |
| totalRoundConfirms | 108                                                                | Number of total confirms in the monitored round                                     |
| totalCount         | 18                                                                 | Number of validation rounds in which the desired relayer takes part                 |

### Example

```graphql
app.post('/relays_pages/all_relay_rounds_info', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/all_relay_rounds_info`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            userAddress: req.body.userAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```


<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a>https://api.octusbridge.io/v1/relays_pages/round_info</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/round_info" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get validation round info</h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "roundNum": 10,
  "totalStake": "2549112.692146446000",
  "totalStakeChange": "8.5100",
  "averageRelayStake": "106213.02883900",
  "averageRelayStakeChange": "-0.5300",
  "eventsConfirmed": 603,
  "relaysCount": 24,
  "relaysCountChange": "9.0900",
  "tonToEthUsdt": "6007826.4910",
  "ethToTonUsdt": "5204152.7479",
  "evmStats": [
    {
      "chainId": 1,
      "relayConfirmed": 0,
      "potentialConfirmed": 142
    },
    ...
     {
      "chainId": 43114,
      "relayConfirmed": 0,
      "potentialConfirmed": 7
    }
  ]
}
```
</details>

</details>

</div>

This function returns basic information about relayers based on their addresses, round number and stake.

It can be used for filtering rounds based on their number and showing information about them such as stake and stake changes, information about events, relayers and change in number of them, amount of USDTs transferred through the round duration.

### Request parameters

Required body parameters:

| Name     | Example value | Comment      |
| -------- | ------------- | ------------ |
| roundNum | 10            | Round number |

### Response fields explanation

| Name                    | Example value        | Comment                                                                             |
| ----------------------- | -------------------- | ----------------------------------------------------------------------------------- |
| averageRelayStake       | 106213.02883900      | Average relayers stake                                                              |
| averageRelayStakeChange | -0.5300              | Change of the average relayers stake in percentage                                  |
| ethToTonUsdt            | 5204152.7479         | Total amount of ethereum tokens in USDT swapped to everscale tokens and transferred |
| eventsConfirmed         | 603                  | Total number of events the relayer confirmed in the current round                   |
| evmStats                | : \[                 | List of data related to the evm events                                              |
| chainId                 | 1                    | Id of the chain                                                                     |
| potentialConfirmed      | 142                  | Number of potential events confirmed                                                |
| relayConfirmed          | 0                    | Number of actual events confirmed                                                   |
| relaysCount             | 24                   | Total number of relayers in the desired round                                       |
| relaysCountChange       | 9.0900               | Change of number of relayers participating in the round in percentage               |
| roundNum                | 10                   | Round number                                                                        |
| tonToEthUsdt            | 6007826.4910         | Total amount of everscale tokens in USDT swapped to ethereum tokens and transferred |
| totalStake              | 2549112.692146446000 | Sum of all the stakes relayers invested in the round                                |
| totalStakeChange        | 8.5100               | Change of total stake invested in percentage                                        |

### Example

```java
app.post('/relays_pages/round_info', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/round_info`,
        data: {
            roundNum: req.body.roundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })

})​
```

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/relays_pages/search/relays</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/search/relays"> 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get relayers info </h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "relays": [
    {
      "relayAddress": "0:099341ccbe3f2db59432fc1cc794773b9da06048d14e43ae24ae224dd768145d",
      "stake": "100000",
      "slashed": false,
      "currentRound": true,
      "successfulRounds": 10,
      "totalRounds": 10,
      "createdAt": 1651074897000,
      "relayTotalConfirmed": 4053,
      "potentialTotalConfirmed": 4746
    },
  ...
  {
      "relayAddress": "0:92beea3fa73ba9fa2420442eb89c7c16fdb899e9d4c10f84e34f13f651beb25f",
      "stake": "100000",
      "slashed": false,
      "currentRound": true,
      "successfulRounds": 20,
      "totalRounds": 20,
      "createdAt": 1645013257000,
      "relayTotalConfirmed": 7894,
      "potentialTotalConfirmed": 8924
    }
  ],
  "totalCount": 27
}
```
</details>

</details>

</div>

This function \*\*\*\* returns basic information about relayers based on their addresses, round number and stake.

### Request parameters

Required body parameters:

| Name                    | Example value                                                      | Comment                                                                                           |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| createdAtGe             | 0                                                                  | Value representing bottom border of the date time relayer was created                             |
| createdAtLe             | 0                                                                  | Value representing top border of the date time relayer was created                                |
| limit                   | 10                                                                 | Maximum number of relayers to be retrieved                                                        |
| offset                  | 0                                                                  | Offset                                                                                            |
| ordering                | stakeascending                                                     | Value based on which the retrieved relayer data will be ordered (stakeascending, stakedescending) |
| relayAddresses          | 0:79fc8ce8d32211a4c49adf7de1c9c0fa682ff3a13124ff027f6b92faa308ffeb | List of relayers (addresses)                                                                      |
| roundNum                | 10                                                                 | Round number                                                                                      |
| stakeGe                 | 50                                                                 | Bottom border of the stake amount relayer invested for participating in the round                 |
| stakeLe                 | 1000000                                                            | Top border of the stake amount relayer invested for participating in the round                    |
| transferContractAddress | 0:cbd090198d22e4b1a77227ba2bff58a05a32049ef2908aebfb461cacd6a474c8 | Address of the transfer contract                                                                  |

Parameters used for the test:

| Name     | Value          |
| -------- | -------------- |
| limit    | 10             |
| offset   | 0              |
| ordering | stakeascending |

### Response fields explanation

| Name                    | Example value                                                      | Comment                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| relays                  | : \[                                                               | List of relays participating in specified round and specified transfer                                                              |
| createdAt               | 1651074897000                                                      | Date time of becoming a relayer                                                                                                     |
| currentRound            | true                                                               | True if search refers to a current round, false if not                                                                              |
| potentialTotalConfirmed | 4749                                                               | Number of potential events confirmed                                                                                                |
| relayAddress            | 0:099341ccbe3f2db59432fc1cc794773b9da06048d14e43ae24ae224dd768145d | Address of the relayer                                                                                                              |
| relayTotalConfirmed     | 4056                                                               | Actual number of events confirmed by a relayer                                                                                      |
| slashed                 | false                                                              | True if a relayer was slashed, false if not                                                                                         |
| stake                   | 100000                                                             | Amount relayer staked for participating in the round                                                                                |
| successfulRounds        | 10                                                                 | Number of successful validation relay rounds of a relayer                                                                           |
| totalRounds             | 10                                                                 | Number of all rounds relayer participated in                                                                                        |
| totalCount              | 27                                                                 | Total number of records retrieved based on the relayers’ addresses given and transaction contract’s address for the specified round |

### Example

```java
app.post('/relays_pages/search/relays', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/search/relays`,
        data: {
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            relayAddresses: req.body.relayAddresses,
            roundNum: req.body.roundNum,
            stakeGe: req.body.stakeGe,
            stakeLe: req.body.stakeLe,
            transferContractAddress: req.body.transferContractAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/relays_pages/search/relays_events</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/search/relays_events" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get relayer </h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "relays": [
    {
      "transferKind": "ethtoton",
      "contractAddress": "0:91b879d842d2292db57abd10d1cd6e83959dd27fb70189d02032314c0de542a9",
      "chainId": 1,
      "tokenAddress": "0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2",
      "from": "0xcbefe3344284444ac8141c930207b8ff82a3177e",
      "to": "0:1fcdda0bdb6cc28476575f1617949188fb9f29d35b9f86217438baf3519058c3",
      "amount": "90000",
      "timestamp": 1655983612000
    },
    ...
     {
      "transferKind": "ethtoton",
      "contractAddress": "0:91b879d842d2292db57abd10d1cd6e83959dd27fb70189d02032314c0de542a9",
      "chainId": 1,
      "tokenAddress": "0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2",
      "from": "0xcbefe3344284444ac8141c930207b8ff82a3177e",
      "to": "0:1fcdda0bdb6cc28476575f1617949188fb9f29d35b9f86217438baf3519058c3",
      "amount": "90000",
      "timestamp": 1655983612000
    }
  ],
  "totalCount": 18
}
```
</details>

</details>

</div>


This function returns details about relayer’s events based on the chain id of the event, kind of transfer, receiver’s address, sender’s address, token address, relayer’s address, contract’s address, round number.

It can be used for filtering all the events based on the required parameters and displaying them in the list form along with information such as amount transferred, chain id, sender’s address, receiver’s address, token address etc.

### Request parameters

Required body parameters:

| Name                    | Example value                                                      | Comment                                                         |
| ----------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| amountGe                | 0                                                                  | Bottom border of the transferred amount                         |
| amountLe                | 10000000000000000                                                  | Top border of the transferred amount                            |
| chainId                 | 1                                                                  | Id of the event’s chain                                         |
| ethUserAddress          | 0xcbefe3344284444ac8141c930207b8ff82a3177e                         | User address on the ethereum network                            |
| limit                   | 10                                                                 | Maximum number of relayers to be retrieved                      |
| offset                  | 0                                                                  | Offset                                                          |
| ordering                | amountascending                                                    | Value based on which the retrieved relayer data will be ordered |
| relayAddress            | -                                                                  | Address of the relayer                                          |
| roundNum                | 18                                                                 | Round number                                                    |
| timestampGe             | 1642813200000                                                      | Bottom border of the date time of the transfer                  |
| timestampLe             | 1656032400000                                                      | Top border of the date time of the transfer                     |
| tokenAddress            | 0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2 | Address of the transferred token                                |
| tonUserAddress          | 0:1fcdda0bdb6cc28476575f1617949188fb9f29d35b9f86217438baf3519058c3 | User address on the everscale network                           |
| transferContractAddress | 0:91b879d842d2292db57abd10d1cd6e83959dd27fb70189d02032314c0de542a9 | Address of the transfer contract                                |
| transferKind            | ethtoton                                                           | Transfer kind (tontoeth, ethtoton)                              |

### Response fields explanation

| Name            | Example value                                                      | Comment                                                                |
| --------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| relays          | :\[                                                                | List of relays participating in specified round and specified transfer |
| amount          | 90000                                                              | Amount of transfer                                                     |
| chainId         | 1                                                                  | Id of the event’s chain                                                |
| contractAddress | 0:91b879d842d2292db57abd10d1cd6e83959dd27fb70189d02032314c0de542a9 | Address of the transfer contract                                       |
| from            | 0xcbefe3344284444ac8141c930207b8ff82a3177e                         | Address of the sender                                                  |
| timestamp       | 1655983612000                                                      | Date time of the transfer                                              |
| to              | 0:1fcdda0bdb6cc28476575f1617949188fb9f29d35b9f86217438baf3519058c3 | Address of the receiver                                                |
| tokenAddress    | 0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2 | Address of the transferred token                                       |
| transferKind    | ethtoton                                                           | Transfer kind (tontoeth, ethtoton)                                     |
| totalCount      | 18                                                                 | Total number of relays participating in the transfer                   |

### Example

```java
app.post('/relays_pages/search/relays_events', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/search/relays_events`,
        data: {
            amountGe: req.body.amountGe,
            amountLe: req.body.amountLe,
            chainId: req.body.chainId,
            ethUserAddress: req.body.ethUserAddress,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            relayAddress: req.body.relayAddress,
            roundNum: req.body.roundNum,
            timestampGe: req.body.timestampGe,
            timestampLe: req.body.timestampLe,
            tokenAddress: req.body.tokenAddress,
            tonUserAddress: req.body.tonUserAddress,
            transferContractAddress: req.body.transferContractAddress,
            transferKind: req.body.transferKind
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/relays_pages/search/global_relays_events</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/search/global_relays_events" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get global relayer </h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "relays": [
    {
      "transferKind": "ethtoton",
      "contractAddress": "0:91b879d842d2292db57abd10d1cd6e83959dd27fb70189d02032314c0de542a9",
      "chainId": 1,
      "tokenAddress": "0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2",
      "from": "0xcbefe3344284444ac8141c930207b8ff82a3177e",
      "to": "0:1fcdda0bdb6cc28476575f1617949188fb9f29d35b9f86217438baf3519058c3",
      "amount": "90000",
      "timestamp": 1655983612000
    }
  ],
  "totalCount": 1
}
```
</details>

</details>

</div>


This function returns details about relayer’s events based on the chain id of the event, kind of transfer, receiver’s address, sender’s address, token address, relayer’s address, contract’s address, round number.

It can be used for filtering all the events based on the required parameters and displaying them in the list form along with information such as amount transferred, chain id, sender’s address, receiver’s address, token address etc.

### Request parameters

Required body parameters:

| Name                    | Example value                                                      | Comment                                                         |
| ----------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| amountGe                | 0                                                                  | Bottom border of the transferred amount                         |
| amountLe                | 10000000000000000                                                  | Top border of the transferred amount                            |
| chainId                 | 1                                                                  | Id of the event’s chain                                         |
| ethUserAddress          | 0xcbefe3344284444ac8141c930207b8ff82a3177e                         | User address on the ethereum network                            |
| limit                   | 10                                                                 | Maximum number of relayers to be retrieved                      |
| offset                  | 0                                                                  | Offset                                                          |
| ordering                | amountascending                                                    | Value based on which the retrieved relayer data will be ordered |
| relayAddress            | -                                                                  | Address of the relayer                                          |
| roundNum                | 18                                                                 | Round number                                                    |
| timestampGe             | 1642813200000                                                      | Bottom border of the date time of the transfer                  |
| timestampLe             | 1656032400000                                                      | Top border of the date time of the transfer                     |
| tokenAddress            | 0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2 | Address of the transferred token                                |
| tonUserAddress          | 0:1fcdda0bdb6cc28476575f1617949188fb9f29d35b9f86217438baf3519058c3 | User address on the everscale network                           |
| transferContractAddress | 0:91b879d842d2292db57abd10d1cd6e83959dd27fb70189d02032314c0de542a9 | Address of the transfer contract                                |
| transferKind            | ethtoton                                                           | Transfer kind (tontoeth, ethtoton)                              |

### Response fields explanation

| Name            | Example value                                                     | Comment                                                                |
| --------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| relays          |                                                                   | List of relays participating in specified round and specified transfer |
| amount          | 90000                                                             | Transferred amount                                                     |
| chainId         | 1                                                                 | Id of the event’s chain                                                |
| contractAddress | 091b879d842d2292db57abd10d1cd6e83959dd27fb70189d02032314c0de542a9 | Address of the transfer contract                                       |
| from            | 0xcbefe3344284444ac8141c930207b8ff82a3177e                        | Address of the sender                                                  |
| timestamp       | 1655983612000                                                     | Date time of the transfer                                              |
| to              | 01fcdda0bdb6cc28476575f1617949188fb9f29d35b9f86217438baf3519058c3 | Address of the receiver                                                |
| tokenAddress    | 0a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2 | Address of the transferred token                                       |
| transferKind    | ethtoton                                                          | Transfer kind (tontoeth, ethtoton)                                     |
| totalCount      | 1                                                                 | Total number of relays participating in the transfer                   |

### Example

```java
app.post('/relays_pages/search/global_relays_events', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/search/global_relays_events`,
        data: {
            amountGe: req.body.amountGe,
            amountLe: req.body.amountLe,
            chainId: req.body.chainId,
            ethUserAddress: req.body.ethUserAddress,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            roundNum: req.body.roundNum,
            timestampGe: req.body.timestampGe,
            timestampLe: req.body.timestampLe,
            tokenAddress: req.body.tokenAddress,
            tonUserAddress: req.body.tonUserAddress,
            transferContractAddress: req.body.transferContractAddress,
            transferKind: req.body.transferKind
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a>https://api.octusbridge.io/v1/relays_pages/rounds_calendar</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/rounds_calendar" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get rounds calendar </h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
[
  {
    "roundAddress": "0:77f4e7eb93d7fb3432f297782f2cd2e5fb2a62bb05d8a9590ea54c6ab954254d",
    "roundNum": 1,
    "startTime": 1645303857000,
    "endTime": 1645908657000,
    "electionStartTime": 1644958278000,
    "electionEndTime": 1645131078000
  },
  ...
  {
    "roundAddress": "0:547c234e01d17b33331ed0f1270598906bcfec03d55d414cafc69e6118258da5",
    "roundNum": 9,
    "startTime": 1650371126000,
    "endTime": 1650975926000,
    "electionStartTime": 1650025543000,
    "electionEndTime": 1650198343000
  }
]
```
</details>

</details>

</div>



This fuction returns data about the rounds between from and to rounds numbers.

It can be used as round’s calendar where data about election start and end time, round’s start and end time, number and address for each round will be displayed

### Request parameters

Required body parameters:

| Name         | Example value | Comment                        |
| ------------ | ------------- | ------------------------------ |
| fromRoundNum | 1             | First round number to retrieve |
| toRoundNum   | 10            | Last round number to retrieve  |

### Response fields explanation

| Name              | Example value                                                      | Comment                               |
| ----------------- | ------------------------------------------------------------------ | ------------------------------------- |
| electionEndTime   | 1645131078000                                                      | Date time of the election’s end       |
| electionStartTime | 1644958278000                                                      | Date time of the election’s start     |
| endTime           | 1645908657000                                                      | Date time of the round’s end          |
| roundAddress      | 0:77f4e7eb93d7fb3432f297782f2cd2e5fb2a62bb05d8a9590ea54c6ab954254d | Address of the validation relay round |
| roundNum          | 1                                                                  | Round number                          |
| startTime         | 1645303857000                                                      | Date time of the round’s start        |

### Example

```java
app.post('/relays_pages/rounds_calendar', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/rounds_calendar`,
        data: {
            fromRoundNum: req.body.fromRoundNum,
            toRoundNum: req.body.toRoundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a>https://api.octusbridge.io/v1/relays_pages/relays_pages/relay_rounds_info</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/relays_pages/relays_pages/relay_rounds_info" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get validation rounds info </h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;"  class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "relays": [
    {
      "roundAddress": "0:cc312267aa40b7f9a56ce1aad46dbca5088c2d30ee1ba88555d2e97941ac9816",
      "roundNum": 10,
      "stake": "244636",
      "eventsConfirmed": 529,
      "toTonUsdt": "4509235.2178",
      "toTonUsdtShare": "0.4642",
      "fromTonUsdt": "5204152.7479",
      "fromTonUsdtShare": "0.5358",
      "startTime": 1650975926000,
      "endTime": 1651580726000,
      "eventsShare": "0.8773"
    }
  ],
  "totalCount": 0
}
```
</details>

</details>

</div>


This function returns information about the relayerabout relayer relay taking part in the specific round based on itsit’s address and round number.

It can be used for filtering where relayer’s and round’s information, for the chosen round, such as round end, round start, events information, amount of assets transferred through the round etc., will be displayed.

### Request parameters

Required body parameters:

| Name        | Example value                                                      | Comment                                                                                            |
| ----------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| limit       | 10                                                                 | Maximum number of relayers to be retrieved                                                         |
| offset      | 0                                                                  | Offset                                                                                             |
| ordering    | stakeascending                                                     | Value based on which the retrieved relayer data will be ordered (stakeascending, stakedescending…) |
| userAddress | 0:daacff0f136da1d5c9fa73200d481362c44756b0ff7d083ee02e95f00a078557 | Address of the relayer                                                                             |
| roundNum    | 10                                                                 | Round number                                                                                       |

### Response fields explonation

| Name             | Example value                                                      | Comment                                                                              |
| ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| relays           | : \[                                                               | Relay with specified address participating in specified round                        |
| endTime          | 1651580726000                                                      | Round end time                                                                       |
| eventsConfirmed  | 529                                                                | Total number of confirmed events                                                     |
| eventsShare      | 0.8773                                                             | Amount of share relayer earns per event                                              |
| fromTonUsdt      | 5204152.7479                                                       | Amount of USDTs transferred from everscale                                           |
| fromTonUsdtShare | 0.5358                                                             | Share of transferring evers to usdt                                                  |
| roundAddress     | 0:cc312267aa40b7f9a56ce1aad46dbca5088c2d30ee1ba88555d2e97941ac9816 | Address of the specified round                                                       |
| roundNum         | 10                                                                 | Round number                                                                         |
| stake            | 244636                                                             | Invested stake of a relayer for participating in the round                           |
| startTime        | 1650975926000                                                      | Round start time                                                                     |
| toTonUsdt        | 4509235.2178                                                       | Amount of USDTs transferred to everscale                                             |
| toTonUsdtShare   | 0.4642                                                             | Share of transferring to everscale in USDTs                                          |
| totalCount       | 0                                                                  | Total number of relayers with specified address participating in the specified round |

### Example

```java
app.post('/relays_pages/relay_rounds_info', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relay_rounds_info`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            roundNum: req.body.roundNum,
            userAddress: req.body.userAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
```
<script>
import { defineComponent, ref, onMounted } from "vue";
import copy from "../../../.vitepress/theme/components/shared/BKDCopyIcon.vue"
export default defineComponent({
  name: "summaryArrow",
  components:{
    copy
  },
  setup() {

    function copyContent(e, content){
      try{
      if(e.target.parentNode.parentNode != "showIcon" || e.target.parentNode.parentNode != "hideIcon"){navigator.clipboard.writeText(e.target.parentNode.parentNode.attributes.value.value)}
      }catch{
         
      }
      
    }
    
    function rotateArrow(e){
    if(e.target.parentNode.className == 'arrowContainer_f'){
      let tempInVal = e.target.parentNode.getElementsByTagName('span')[0].className
      tempInVal == "summaryArrow" ?
      e.target.parentNode.getElementsByTagName('span')[0].className = "summaryArrowDown"
      :
      e.target.parentNode.getElementsByTagName('span')[0].className = "summaryArrow"

    } else if( e.target.className == 'arrowContainer_f'){
      let tempInVal = e.target.getElementsByTagName('span')[0].className
      tempInVal == "summaryArrow" ?
      e.target.getElementsByTagName('span')[0].className = "summaryArrowDown"
      :
      e.target.getElementsByTagName('span')[0].className = "summaryArrow"
    }else{
      if(e.target.className != "summaryArrow" && e.target.className != "summaryArrowDown" )
      { 
        e.target.getElementsByTagName('p')[0].className == "summaryArrow"  ? 
        e.target.getElementsByTagName('p')[0].className = "summaryArrowDown"
        :
        e.target.getElementsByTagName('p')[0].className = "summaryArrow"
      }else{
        e.target.className == "summaryArrow"  ? 
        e.target.className = "summaryArrowDown"
        :
        e.target.className = "summaryArrow"
      }
    }


  }
  return{rotateArrow, copyContent}
  }
})

</script>

<style>
  .post, .get{
  background-color: rgb(0, 136, 71);
  transition: background-color 0.1s;
  padding: 0 10px 0 10px ;
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  font-weight: 600;
  font-size: .8rem;
  cursor : pointer;  
  display:inline-block;
  color : #fff;
}
.get{
  background-color: rgb(52, 109, 219);
}

.linkDesc{
  margin-left: 18px; 
}
.linkContainer{
  margin : 0;
  padding : 10px 12px ;
  font-weight: 600;
  border: 1px solid rgb(0, 136, 71);
  width :100%;
}
.linkDetails{
  border-radius: none;
  display: inline-block;
}
.linkSummary{
  cursor: pointer;
  display: inline-block;
}
.linkSummary > a{
  font-size: 14px
}
.summaryParams{
  padding : 10px 0 0 20px;
}
.APIParams{
  font-weight: 400;
  opacity:0.9;
}
.APIRes{
  font-weight: 900;
  align-items: center; /* Vertically center the content */
  display: flex;
  font-weight: 700;
  font-size: 12px;
}
.greenDot{
  margin-right:15px;
  position: relative;
  bottom:0px;
  font-size: 8px;
  display: inline-block;
}
.linkDetails{
width: 100%;
}
.linkContainer .sec {
  opacity: 0.7;
  padding-right: 15px;
  text-align: right;
}

.summaryArrowDown{
  margin-right: 10px;
  display : inline-block;
  transform-origin: center;
  transform: rotate(90deg);
}
.summaryArrow{
  display : inline-block;
  transform-origin: center;
  transform: rotate(0deg);
  margin-right: 10px;
}
.arrowContainer_f{
  display: inline-block;
  overlay:1;
  position: relative;
  margin-right : 10px;
}
.copyApiLink{
  /* cursor : pointer;   */
  display: inline-block;
  font-size: 12px;
  margin-left: 18px;
  padding : 0 5px 0 5px;
  border: 1px solid gray;
  border-radius: 5px
}
</style>