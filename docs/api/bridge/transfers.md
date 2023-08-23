# Transfers

<br/>
<div class="linkContainer">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a>https://api.octusbridge.io/v1/transfers/search</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/transfers/search" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get transfers data </h4>
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
    "transfers": [
        {
            "tonUserAddress": "0:fdbc0c8ac30050ac2d3166ce714e3ca3a4641fe251a33751c037d88bbd514d49",
            "transferStatus": "Confirmed",
            "transferKind": "TonToEth",
            "creditProcessorAddress": null,
            "tonEthContractAddress": "0:3dbfd8d3d8ae79cc1a67af212e03c3646fd0c6f866000efeb3ac95c63587fcf8",
            "tonEthChainId": 56,
            "tonEthVolumeExec": "1240",
            "tonEthVolumeUsdtExec": "1240",
            "tonEthTonTokenAddress": "0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2",
            "tonEthEthTokenAddress": "0x55d398326f99059ff775485246999027b3197955",
            "tonEthProxyAddress": "0:a3023d7812aff9cafa73365853bdc11eeb010f09cd657de6e802adf16cfcd282",
            "tonEthEthUserAddress": "0xa2a38f05baf66b20e89f87dd9a35ebcb840210ba",
            "tonEthStatus": "Confirmed",
            "tonEthRequiredVotes": 18,
            "ethTonContractAddress": null,
            "ethTonChainId": null,
            "ethTonVolumeExec": null,
            "ethTonVolumeUsdtExec": null,
            "ethTonTonTokenAddress": null,
            "ethTonEthTokenAddress": null,
            "ethTonProxyAddress": null,
            "ethTonEthUserAddress": null,
            "ethTonTransactionHashEth": null,
            "ethTonStatus": null,
            "ethTonRequiredVotes": null,
            "updatedAt": 1657215766000,
            "createdAt": 1657215335000
        },
        ...
            }
    ],
    "totalCount": 9369
}
```
</details>

</details>

</div>


This function returns all the details about transfer for specified user based on tokens transferred, transfer kind, amount transferred. 

It can be used for filtering user’s transfers and displaying them in the list form with following details such as total number of transfers filtered, time of creation, credit processor, transfer contracts addresses, number of required votes, proxy addresses, volume, status etc.

### Request parameters

Required body parameters:

| Name            | Example value | Comment                                                             |
|-----------------|---------------|---------------------------------------------------------------------|
| createdAtGe     |1654822800| Bottom border of transfer creation date time                        |
| createdAtLe     |1655946000| Top border of transfer creation date time                           |
| ethTokenAddress |0xc506f883f71151b0ecd48b1683fbd15cc4a1ad95| Token address on ethereum network                                   |
| ethTonChainId   |1| Ethereum to everscale event chain id                                |
| limit           |10| Maximum number of transactions to be retrieved                      |
| offset          |0| Offset                                                              |
| ordering        |tonethvolumeexecascending| Value based on which the retrieved transaction data will be ordered |
| status          |pending| Transaction status (pending, confirmed…)                            |
| tonEthChainId   |56| Everscale to ethereum event chain id                                |
| tonTokenAddress |0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2| Token address on everscale network                                  |
| transferKinds   |      [         | List of transfer kinds (ethtoton, tontoeth…)                        |
| updatedAtGe     |1654822800| Bottom border of transfer update date time                          |
| updatedAtLe     |1655946000| Top border of transfer update date time                             |
| userAddress     |0:fc01c67598aa6e3c863630103971f791b856d86de54e960d7097dce4683e7575| Address of the user                                                 |
| volumeExecGe    |0| Bottom border of transferred volume amount                          |
| volumeExecLe    |100000000| Top border of transferred volume amount                             |

Parameters used for test:

| Name          | Value               |
|---------------|---------------------|
| limit         | 10                  |
| offset        | 0                   |
| ordering      | createdatdescending |
| transferKinds | []                  |

### Response fields explanation

| Name                     | Example value | Comment                                                                   |
|--------------------------|---------------|---------------------------------------------------------------------------|
| totalCount               |9369| Total number of transfers                                                 |
| transfers                |-| List of transfers retrieved based on body parameters with following data: |
| createdAt                |1657215335000| Date time of transaction’s creation                                       |
| creditProcessorAddress   |null| Address of the credit processor                                           |
| ethTonChainId            |null| Ethereum to Everscale event chain id                                      |
| ethTonContractAddress    |null| Transfer contract address (ethereum-everscale)                            |
| ethTonEthTokenAddress    |null| Token address on ethereum network (ethereum-everscale)                    |
| ethTonEthUserAddress     |null| User address on ethereum network                                          |
| ethTonProxyAddress       |null| Proxy address for ethereum to everscale transfer                          |
| ethTonRequiredVotes      |null| Number of required votes                                                  |
| ethTonStatus             |null|                                                                           |
| ethTonTonTokenAddress    |null| Token address on everscale network (ethereum-everscale)                   |
| ethTonTransactionHashEth |null| Transaction hash code on ethereum network                                 |
| ethTonVolumeExec         |null| Amount of volume transferred from ethereum to everscale                   |
| tonEthChainId            |56| Everscale to ethereum event chain id                                      |
| tonEthContractAddress    |0:3dbfd8d3d8ae79cc1a67af212e03c3646fd0c6f866000efeb3ac95c63587fcf8| Transfer contract address (everscale - ethereum)                          |
| tonEthEthTokenAddress    |0x55d398326f99059ff775485246999027b3197955| Token address on Ethereum network (everscale - ethereum)                  |
| tonEthEthUserAddress     |0xa2a38f05baf66b20e89f87dd9a35ebcb840210ba| User address on ethereum network (everscale - ethereum)                   |
| tonEthProxyAddress       |0:a3023d7812aff9cafa73365853bdc11eeb010f09cd657de6e802adf16cfcd282| Proxy address for everscale to ethereum transfer                          |
| tonEthRequiredVotes      |18| Number of required votes                                                  |
| tonEthStatus             |Confirmed| Status of everscale to ethereum transfer                                  |
| tonEthTonTokenAddress    |0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2| Token address on everscale network (everscale - ethereum)                 |
| tonEthVolumeExec         |1240| Amount of volume transferred from everscale to ethereum                   |
| tonUserAddress           |0:fdbc0c8ac30050ac2d3166ce714e3ca3a4641fe251a33751c037d88bbd514d49| User address on everscale network                                         |
| transferKind             |TonToEth| Kind of transfer (deposit, withdraw…)                                     |
| transferStatus           |Confirmed| Status of transfer (pending, confirmed…)                                  |
| updatedAt                |1657215766000| Date time of transfer update                                              |

### Example

```java
app.post('/transfers/search', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/transfers/search`,
        data: {
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            ethTokenAddress: req.body.ethTokenAddress,
            ethTonChainId: req.body.ethTonChainId,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            status: req.body.status,
            tonEthChainId: req.body.tonEthChainId,
            tonTokenAddress: req.body.tonTokenAddress,
            transferKinds: req.body.transferKinds,
            updatedAtGe: req.body.updatedAtGe,
            updatedAtLe: req.body.updatedAtLe,
            userAddress: req.body.userAddress,
            volumeExecGe: req.body.volumeExecGe,
            volumeExecLe: req.body.volumeExecLe
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
<a>https://api.octusbridge.io/v1/transfers/search_not_instant</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/transfers/search_not_instant" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get not instant transfers data </h4>
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
  "transfers": [
    {
      "bounty": "7000",
      "currentAmount": "0",
      "status": "Close",
      "userId": "0",
      "payloadId": "0x5da3db5ce2e56676abe61cd11babab0bb4d06c7c13dc2fe13085ef695d1f305b",
      "tonUserAddress": "0:76bb1dda9746d1366c57515e4d26ea8b3e9fa549444879a473cf96609e699ae3",
      "contractAddress": "0:1adcc1fa516ea7d2e5d843a2353e53176374ff474bfb6267ced8de12e0ba748e",
      "chainId": 43114,
      "volumeExec": "0.00031000",
      "volumeUsdtExec": "9.8003",
      "tonTokenAddress": "0:2ba32b75870d572e255809b7b423f30f36dd5dea075bd5f026863fceb81f2bcf",
      "ethTokenAddress": "0x50b7545627a5162f82a992c33b87adc75187b218",
      "ethUserAddress": "0x02a312c4303037f12acfe3513e6b14a8d8daecf3",
      "timestamp": 1654087434000
    },
    ...
      ],
  "totalCount": 70
}
```
</details>

</details>

</div>



This function returns all the details about transfer for a specified user based on tokens transferred, transfer kind, amount transferred, bounty amount. 

It can be used for filtering user’s transfers and displaying them in the list form with following details such as total number of transfers filtered, time of creation, bounty amount, transfer contract address, number of required votes, user addresses, current balance, volume transferred, status etc.

### Request parameters

Required body parameters:

| Name            | Example value | Comment                                                             |
|-----------------|---------------|---------------------------------------------------------------------|
| bountyGe        |0| Bottom border of bounty amount                                      |
| bountyLe        |1000| Top border of bounty amount                                         |
| chainId         |1| Id of the event’s chain                                             |
| contractAddress |0:3b4a6596b97ec5ded77eee9893416120898f45a4cb7f81dd7930aba8270bbc71| Transfer contract address                                           |
| createdAtGe     |1651366800000| Bottom border of transfer creation date time                        |
| createdAtLe     |1655859600000| Top border of transfer creation date time                           |
| ethTokenAddress |0x55d398326f99059ff775485246999027b3197955| Token address on ethereum network                                   |
| limit           |10| Maximum number of transactions to retrieve                          |
| offset          |0| Offset                                                              |
| ordering        |volumeexecascending| Value based on which the retrieved transaction data will be ordered |
| status          |Open|                                                                     |
| tonTokenAddress |0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2| Token address on everscale network                                  |
| userAddress     |0:1c346354f24e9346de20dbf3690435085194bbf18259f780510eea1ad1e6d624| Address of the user                                                 |
| volumeExecGe    |0| Bottom border of transfer volume                                    |
| volumeExecLe    |1000| Top border of transfer volume                                       |

Parameters used for test:

| Name          | Value               |
|---------------|---------------------|
| limit         | 10                  |
| offset        | 0                   |
| ordering      | volumeexecascending |

### Response fields explanation

| Name            | Example value | Comment                                            |
|-----------------|---------------|----------------------------------------------------|
| totalCount      |70| Total number of transfers                          |
| transfers       |               | List of retrieved transactions with following data |
| bounty          |7000| Bounty amount                                      |
| chainId         |43114| Id of the event’s chain                            |
| contractAddress |0:1adcc1fa516ea7d2e5d843a2353e53176374ff474bfb6267ced8de12e0ba748e| Address of a transfer contract                     |
| currentAmount   |0| Current amount                                     |
| ethTokenAddress |0x50b7545627a5162f82a992c33b87adc75187b218| Token address on ethereum network                  |
| ethUserAddress  |0x02a312c4303037f12acfe3513e6b14a8d8daecf3| User address on ethereum network                   |
| payloadId       |0x5da3db5ce2e56676abe61cd11babab0bb4d06c7c13dc2fe13085ef695d1f305b| Id of a payload                                    |
| status          |Close| Transfer status                                    |
| timestamp       |1654087434000| Date time of transfer                              |
| tonTokenAddress |0:2ba32b75870d572e255809b7b423f30f36dd5dea075bd5f026863fceb81f2bcf| Token address on everscale network                 |
| tonUserAddress  |0:76bb1dda9746d1366c57515e4d26ea8b3e9fa549444879a473cf96609e699ae3| Address of a user on everscale network             |
| userId          |0| Id of the user                                     |
| volumeExec      |0.00031000| Volume transferred                                 |
| volumeUsdtExec  |9.8003| Volume transferred in USDTs                        |

### Example

```java
app.post('/transfers/search_not_instant', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/transfers/search_not_instant`,
        data: {
            bountyGe: req.body.bountyGe,
            bountyLe: req.body.bountyLe,
            chainId: req.body.chainId,
            contractAddress: req.body.contractAddress,
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            ethTokenAddress: req.body.ethTokenAddress,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            status: req.body.status,
            tonTokenAddress: req.body.tonTokenAddress,
            userAddress: req.body.userAddress,
            volumeExecGe: req.body.volumeExecGe,
            volumeExecLe: req.body.volumeExecLe
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
<a style="color : rgb(52, 109, 219);">https://api.octusbridge.io/v1/transfers/main_page</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/transfers/main_page" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get transfers main page data </h4>
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
  "volume24hUsdt": "103033.0836",
  "volume24hUsdtChange": "-77.6500",
  "volume7dUsdt": "1756514.8873",
  "volume7dUsdtChange": "-28.6500",
  "fromEverscaleUsdt": "76111457.8632",
  "toEverscaleUsdt": "78524067.1362"
}
```
</details>

</details>

</div>




This function returns global transfer details such as volumes transferred from everscale network and to everscale network, 24h volume change, 7 days volume change. 

It can be used for monitoring transfer data on the whole application level.

### Request parameters

*No required parameters*

### Response fields explanation

| Name                | Example value | Comment                                                                 |
|---------------------|---------------|-------------------------------------------------------------------------|
| fromEverscaleUsdt   |76111457.8632| Volume transferred from everscale in USDTs                              |
| toEverscaleUsdt     |78524067.1362| Volume transferred to everscale in USDTs                                |
| volume24hUsdt       |103033.0836| Volume transferred in the last 24h in USDTs                             |
| volume24hUsdtChange |-77.6500| Change of volume transfer in the last 24 hours calculated in percentage |
| volume7dUsdt        |1756514.8873| Volume transferred in the last 7 days in USDTs                          |
| volume7dUsdtChange  |-28.6500| Change of weekly volume transfer calculated in percentage               |

### Example

```java
app.get('/transfers/main_page', (req, res) => {
    axios({
        method: 'get',
        url: `${apiUrl}/transfers/main_page`
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
<a>https://api.octusbridge.io/v1/transfers/graph/volume</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/transfers/graph/volume" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get transfers volume graph data </h4>
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
    "ethTonVolume": "10.7100",
    "tonEthVolume": "6980.2140",
    "timestamp": 1654988400000
  },
    }
]
```
</details>

</details>

</div>



This function returns a list of transferred volumes from ethereum to everscale and vice versa as well as the date time of measured data inside of a given timespan hourly or daily, depending on how the parameter is set. 

It can be used to show graphical representation of transfers in the given timespan.

### Request parameters

| Name      | Example value | Comment                                                                |
|-----------|---------------|------------------------------------------------------------------------|
| from      |1651366800000| Bottom border of the monitoring date time                              |
| timeframe |H1| Step for retrieving volume data in the given timespan (hourly, daily…) |
| to        |1655859600000| Top border of the monitoring date time                                 |

### Response fields explanation

| Name         | Example value | Comment                                                 |
|--------------|---------------|---------------------------------------------------------|
| ethTonVolume |10.7100| Amount of volume transferred from ethereum to everscale |
| timestamp    |1654988400000| Date time of the data rerieved                          |
| tonEthVolume |6980.2140| Amount of volume transferred from everscale to ethereum |

### Example 

```java
app.post('/transfers/graph/volume', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/transfers/graph/volume`,
        data: {
            from: req.body.from,
            timeframe: req.body.timeframe,
            to: req.body.to
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