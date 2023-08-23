# Staking

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/staking/search/stakeholders</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/staking/search/stakeholders" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get stakeholders data </h4>
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
  "stakeholders": [
    {
      "userAddress": "0:2e6d5fcecfcdd36c748de15d1dd7102728b528a3538582aa5a093e6088d79e28",
      "userType": "Relay",
      "stakeBalance": "100000",
      "frozenStakeBalance": "100000",
      "lastReward": "0",
      "totalReward": "0",
      "createdAt": 1654255227000
    },
    ...
     {
      "userAddress": "0:e75a9cdc1058e59d4ceb52f4cb276ee1d7e7f6180aad66e38ee607f9c8ca46d7",
      "userType": "Relay",
      "stakeBalance": "100001",
      "frozenStakeBalance": "100001",
      "lastReward": "1084.475546937000",
      "totalReward": "1084.475546937000",
      "createdAt": 1650297478000
    }
  ],
  "totalCount": 3
}
```
</details>

</details>

</div>

This function returns stakeholders data based on their addresses, type, time of creation, stake, balance, rewards etc. 

It can be used for filtering stakeholders based on required parameters and displaying information about the filtered stakeholders such as time of creation, frozen stake, reward, address, type etc.

### Request parameters

Required body parameters:

| Name                 | Example value | Comment                                                                   |
|----------------------|---------------|---------------------------------------------------------------------------|
| createdAtGe          |1640998800000| Value representing bottom border of the date time stakeholder was created |
| createdAtLe          |1656032400000| Value representing top border of the date time stakeholder was created    |
| frozenStakeGe        |0| Value representing bottom border of the frozen stake amount               |
| frozenStakeLe        |20000000000| Value representing top border of the frozen stake amount                  |
| lastRewardGe         |0| Value representing bottom border of the last reward amount                |
| lastRewardLe         |200000000000| Value representing top border of the last reward amount                   |
| limit                |10| Maximum number of stakeholders to be retrieved                            |
| offset               |0| Offset                                                                    |
| ordering             |updateatascending| Value based on which the retrieved stakeholder data will be ordered       |
| relayCreatedAtGe     |1640998800000| Value representing bottom border of the date time relayer was created     |
| relayCreatedAtLe     |1656032400000| Value representing top border of the date time relayer was created        |
| stakeholderAddresses |"0:e75a9cdc1058e59d4ceb52f4cb276ee1d7e7f6180aad66e38ee607f9c8ca46d7","0:099341ccbe3f2db59432fc1cc794773b9da06048d14e43ae24ae224dd768145d","0:2e6d5fcecfcdd36c748de15d1dd7102728b528a3538582aa5a093e6088d79e28"| Address of the stakeholder                                                |
| stakeholderKind      |relay| Stakeholder kind (ordinary, relayer…)                                     |
| totalRewardGe        |0| Value representing bottom border of the total reward amount               |
| totalRewardLe        |200000000000| Value representing top border of the total reward amount                  |
| untilFrozenGe        |0| Value representing bottom border of the until frozen amount               |
| untilFrozenLe        |100000000000| Value representing top border of the until frozen amount                  |
| userBalanceGe        |0| Value representing bottom border of the user’s balance amount             |
| userBalanceLe        |200000000000| Value representing top border of the user’s balance amount                |

### Response fields explanation

| Name               | Example value | Comment                                                              |
|--------------------|---------------|----------------------------------------------------------------------|
| stakeholders       |: [| List of stakeholders retrieved based on the value of body parameters |
| createdAt          |1654255227000| Date time of stakeholder’s creation                                  |
| frozenStakeBalance |100000| Amount of stakeholder’s frozen stake                                 |
| lastReward         |0| Amount of stakeholder’s reward form the last round                   |
| stakeBalance       |100000| Amount of stake                                                      |
| totalReward        |0| Total amount of reward                                               |
| userAddress        |0:2e6d5fcecfcdd36c748de15d1dd7102728b528a3538582aa5a093e6088d79e28| Stakeholder’s address                                                |
| userType           |Relay| type of stakeholder (relayer, ordinary…)                             |
| totalCount         |3| Total number of stakeholders retrieved                               |

### Example

```java
app.post('/staking/search/stakeholders', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/staking/search/stakeholders`,
        data: {
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            frozenStakeGe: req.body.frozenStakeGe,
            frozenStakeLe: req.body.frozenStakeLe,
            lastRewardGe: req.body.lastRewardGe,
            lastRewardLe: req.body.lastRewardLe,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            relayCreatedAtGe: req.body.relayCreatedAtGe,
            relayCreatedAtLe: req.body.relayCreatedAtLe,
            stakeholderAddresses: req.body.stakeholderAddresses,
            stakeholderKind: req.body.stakeholderKind,
            totalRewardGe: req.body.totalRewardGe,
            totalRewardLe: req.body.totalRewardLe,
            untilFrozenGe: req.body.untilFrozenGe,
            untilFrozenLe: req.body.untilFrozenLe,
            userBalanceGe: req.body.userBalanceGe,
            userBalanceLe: req.body.userBalanceLe,
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
<a >https://api.octusbridge.io/v1/staking/search/transactions</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/staking/search/transactions" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get transactions data </h4>
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
  "transactions": [
    {
      "transactionHash": "1a56f0984d31f42bc29ba4968fe9176eef6183a9e301cf9f942c562eb8dc1046",
      "transactionKind": "Deposit",
      "amountExec": "39.17627067",
      "timestampBlock": 1654509651000
    }
  ],
  "totalCount": 1
}
```
</details>

</details>

</div>



This function returns list of transactions based on their amount, kind, time of transaction, user that initiated transaction. 

It can be used for filtering all transactions from a certain user based on the required parameters and displaying them with data such as total number of transactions, time of transaction, kind, amount, for each one of them.

### Request parameters

Required body parameters:

| Name             | Example value | Comment                                                                       |
|------------------|---------------|-------------------------------------------------------------------------------|
| amountGe         |0| Value representing bottom border of the amount spent in the transaction       |
| amountLe         |10000000| Value representing top border of the amount spent in the transaction          |
| limit            |10| Maximum number of stakeholders to be retrieved                                |
| offset           |0| Offset                                                                        |
| ordering         |amountascending| Value based on which the retrieved transaction data will be ordered           |
| timestampBlockGe |1654045200| Value representing bottom border of the date time of transaction’s conclusion |
| timestampBlockLe |1654822800| Value representing top border of the date time of transaction’s conclusion    |
| transactionKind  |deposit| Kind of transaction (deposit, withdraw…)                                      |
| userAddress      |0:e5623ad7084d054fb326afaa1eb41288b4ef1f6891d6f4053e09b87e501f03da| Address of the user initiated the transaction                                 |

### Response fields explanation

| Name            | Example value | Comment                                            |
|-----------------|---------------|----------------------------------------------------|
| totalCount      |1| Total number of retrieved transactions             |
| transactions    |: [| List of retrieved transactions with following data |
| amountExec      |39.17627067| Amount of the transaction                          |
| timestampBlock  |1654509651000| Date time of transaction conclusion                |
| transactionHash |1a56f0984d31f42bc29ba4968fe9176eef6183a9e301cf9f942c562eb8dc1046| Hash code of the transaction                       |
| transactionKind |Deposit| Kind of transaction (deposit, withdraw…)           |

### Example

```java
app.post('/staking/search/transactions', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/staking/search/transactions`,
        data: {
            amountGe: req.body.amountGe,
            amountLe: req.body.amountLe,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            timestampBlockGe: req.body.timestampBlockGe,
            timestampBlockLe: req.body.timestampBlockLe,
            transactionKind: req.body.transactionKind,
            userAddress: req.body.userAddress,
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
<div class="linkContainer c_get">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="get" >GET</p>
</div>
<a style="color : rgb(52, 109, 219);">https://api.octusbridge.io/v1/staking/main</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/staking/main"> 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get main page data</h4>
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
  "tvl": "2941620.097043126000",
  "tvlChange": "0.0500",
  "reward30d": "0",
  "reward30dChange": "0",
  "averageApr": "0",
  "stakeholders": 127
}
```
</details>

</details>

</div>


This function returns all the data necessary for staking. 

It can be used for displaying information interesting for stakeholders, such as average annual percentage rate, monthly reward, monthly reward change, total value locked and it’s change and number of stakeholders.

### Request parameters

*No required parameters*

### Response fields explanation

| Name            | Example value | Comment                                                       |
|-----------------|---------------|---------------------------------------------------------------|
| averageApr      |0| Average value of the Annual percentage rate (APR) in percents |
| reward30d       |0| Reward amount for 30 days staking period                      |
| reward30dChange |0| Change of reward for 30 days of staking (in percents)         |
| stakeholders    |127| Number of stakeholders                                        |
| tvl             |2941620.097043126000| Total value locked in the staking pool                        |
| tvlChange       |0.0500| Change of total value locked (in percents)                    |

### Example

```java
app.get('/staking/main', (req, res) => {
    axios({
        method: 'get',
        url: `${apiUrl}/staking/main`
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
<div class="linkContainer ">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://api.octusbridge.io/v1/staking</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/staking" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Post user page data </h4>
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
  "userTvl": "100",
  "userTvlChange": "0",
  "userFrozenStake": "0",
  "user30dReward": "0.534055306000",
  "user30dRewardChange": "0",
  "averageApr": "0"
}
```
</details>

</details>

</div>


This function returns staking data unique for a user based on its address. 

It can be used for showing to a user his personal staking page with information about average percentage rate, his reward for the last month and monthly reward change, frozen stake, user’s tvl and tvl change.

### Request parameters

Required body parameters:

| Name        | Example value                                                      | Comment                  |
|-------------|--------------------------------------------------------------------|--------------------------|
| userAddress | 0:10252b69cc825be1f24a327cd091fa648e262ca78ab0f6ae67663b4fbbcf2136 | Address of a stakeholder |

### Response fields explanation

| Name                | Example value | Comment                                                       |
|---------------------|---------------|---------------------------------------------------------------|
| averageApr          |0| Average value of the Annual percentage rate (APR) in percents |
| user30dReward       |0.534055306000| Reward amount for 30 days staking period                      |
| user30dRewardChange |0| Change of reward for 30 days of staking (in percents)         |
| userFrozenStake     |0| Amount of user’s frozen stake                                 |
| userTvl             |100| Total value locked in the staking pool                        |
| userTvlChange       |0| Change of total value locked (in percents)                    |

### Example 

```java
app.post('/staking', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/staking`,
        data: {
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
  font-size: 12px;
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
  }
.c_get{
  border: 1px solid rgb(52, 109, 219);
 }
.linkSummary{
  cursor: pointer;
  display: inline-block;
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