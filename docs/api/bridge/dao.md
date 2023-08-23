# DAO

<br/>
<div class="linkContainer">
<details style="border: none;" class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a>https://api.octusbridge.io/v1/dao/search/stakeholders</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/dao/search/stakeholders" > 
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
<details style="border: none;" class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```
{
  "stakeholders": [
    {
      "userAddress": "0:0a75c8fa5a9efa817eda3fcd51717d9690cc7ec989881fecb73616f249b8fbce",
      "votes": "0",
      "voteWeight": "0",
      "proposalVotesCount": 1
    },
    ...
{
      "userAddress": "0:8e17dbaa03a309b9f05867595126a72e5cbbe8c61d10f1250fb8d9753aaf0f7d",
      "votes": "0",
      "voteWeight": "0",
      "proposalVotesCount": 0
    }
  ],
  "totalCount": 206
}
```
</details>

</details>

</div>


This function is used to get stakeholders data.

It can be used for showing a list of desired number of stakeholders, where the information about total number of votes a stakeholder raised, how much stakeholder’s vote can weigh, address and number of proposals he voted for ordered by the vote weight.

### Request parameters

Required body parameters:

| Name     | Example value         | Comment                                                                                                                                                                                                                      |
| -------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit    | `50`                  | Maximum number of stakeholders to be retrieved                                                                                                                                                                               |
| offset   | `0`                   | Offset                                                                                                                                                                                                                       |
| ordering | `voteweightascending` | Value based on which the retrieved stakeholders data will be ordered (voteweightascending, voteweightdescending…)based on which the retrieved stakeholders data will be ordered (voteweightascending, voteweightdescending…) |

### Response fields explanation

| Name               | Example value                                                        | Comment                                                          |
| ------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| stakeholders       | -                                                                    | List of stakeholders data determined by the limit body parameter |
| proposalVotesCount | `1`                                                                  | Amount of proposals stakeholder raised a vote                    |
| userAddress        | `0:0c3fbf8b400ce637a49e09e7ae2fc5e92920680b1d10f4cd6956c7aebde93903` | Address of the stakeholder                                       |
| voteWeight         | `0`                                                                  | Amount per vote                                                  |
| votes              | `0`                                                                  | Total amount of votes raised                                     |
| totalCount         | `208`                                                                | Total number of stakeholders                                     |

### Example

```java
app.post('/dao/search/stakeholders', (req, res) => {
    axios({
        method: 'post',
        url: `${apiUrl}/dao/search/stakeholders`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering
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
<details style="border: none;" class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="get" >GET</p>
</div>
<a style="color : rgb(52, 109, 219);">https://api.octusbridge.io/v1/dao/user/{user_address}</a>
<button class="copyApiLink" @click="copyContent" value="https://api.octusbridge.io/v1/dao/user/{user_address}" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get stakeholder data </h4>
</summary>

<div class="summaryParams">

<h5 class="APIParamsTitle"> Parameters </h5>
<p class="APIParams"> No parameters </p>
<h5 class="APIResTitle"> Responses </h5>
<p class="APIRes"> <span class="greenDot">🟢</span> 200: OK </p>

</div>
<details style="border: none;" class="linkDetails sec">
<summary class="linkSummary" style="margin: 0 0 20px 0;"> <pre @click="rotateArrow">Successful request    <p class="summaryArrow" > > </p></pre></summary>

```python
{
  "userAddress": "0:66003d2db4bc1566c3d7d3c118004b1e1d54f1f62c30c6b173845db3aa459f07",
  "votes": "100002.580351726000",
  "voteWeight": "3.4000",
  "proposalVotesCount": 1
}
```
</details>

</details>

</div>


This function is used to get stakeholder data.

It can be used to show one’s stakeholder data based on his account address. Information that can be displayed is the amount of votes certain stakeholder raised, his vote weight, address and total number of proposal votes.

### Request parameters

Required parameters:

| Name        | Example Value                                                      | Comment                       |
| ----------- | ------------------------------------------------------------------ | ----------------------------- |
| userAddress | 0:66003d2db4bc1566c3d7d3c118004b1e1d54f1f62c30c6b173845db3aa459f07 | Address of particular account |

### Response fields explanation

| Name               | Example value                                                      | Comment                                        |
| ------------------ | ------------------------------------------------------------------ | ---------------------------------------------- |
| proposalVotesCount | 1                                                                  | Amount of proposals stakeholder raised a vote  |
| userAddress        | 0:66003d2db4bc1566c3d7d3c118004b1e1d54f1f62c30c6b173845db3aa459f07 | Address of the user                            |
| voteWeight         | 3.400                                                              | Amount representing the vote weight (per vote) |
| votes              | 100002.580351726000                                                | Total amount of votes raised                   |

### Example

```java
app.get('/dao/user/:user_address', (req, res) => {
    axios({
        method: 'get',
        url: `${apiUrl}/dao/user/${req.params.user_address}`
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