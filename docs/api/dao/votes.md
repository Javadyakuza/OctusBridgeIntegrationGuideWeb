# Votes

<br/>
<div class="linkContainer ">
<details style="border: none;"  class="linkDetails" >
<summary class="linkSummary" style="margin: 0 0 10px 0;"> 
<div @click="rotateArrow" class="arrowContainer_f">
<span class="summaryArrow"> > </span>
<p class="post" >POST</p>
</div>
<a >https://dao.octusbridge.io/v1/votes/search</a>
<button class="copyApiLink" @click="copyContent" value="https://dao.octusbridge.io/v1/votes/search" > 
<copy />
</button> 
<br/>
<h4 class="linkDesc"> Get votes data </h4>
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
  "votes": [
    {
      "proposalId": 6,
      "voter": "0:99ea964906c807e89ff8e55ba96a86e4d85d8020c8365ded9428777aef4281cd",
      "support": true,
      "reason": "",
      "votes": "5061664014",
      "locked": false,
      "messageHash": "0275dde58e1a456e6dbba65aba2f295e2d33812353f0632c9728c084843a3678",
      "transactionHash": "3024c7309609b69cf8ad0f6efc686fb3bf91ccc257261e9063c5cee35ac6f7cf",
      "createdAt": 1654530320
    }
  ],
  "totalCount": 1
}
```


</details>

</details>

</div>

This function returns voting details of a specific user based on a specific proposal.

It can be used for showing detailed information about a user's vote such as number of votes raised for a specified proposal, reason for voting, did the user support the proposal or not, time of voting etc.

### Request parameters

Required body parameters:

| Name       | Example value                                                      | Comment                                                                  |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| limit      | 5                                                                  | Maximum number of proposals to be retrieved                              |
| locked     | false                                                              | True if locked, false otherwise                                          |
| offset     | 0                                                                  | Offset                                                                   |
| ordering   |                                                                    | Set of parameters based on which the retrieved proposals will be ordered |
| column     | createdAt                                                          | Order by given column name (i.e. createdAt)                              |
| direction  | ASC                                                                | Order by given direction (ascending or descending)                       |
| proposalId | 6                                                                  | Id of the proposal                                                       |
| support    | true                                                               | True if voted for, false if voted against the proposal                   |
| voter      | 0:99ea964906c807e89ff8e55ba96a86e4d85d8020c8365ded9428777aef4281cd | Voter’s address                                                          |

### Response fields explanation

| Name            | Example value                                                      | Comment                                                              |
| --------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| totalCount      |                                                                    | Total number of times voter voted for a specific proposal            |
| votes           | 5061664014                                                         | List of all the votes from a specific voter to the specific proposal |
| createdAt       | 1654530320                                                         | Date when the vote was raised                                        |
| locked          | false                                                              | True if vote is locked, false otherwise                              |
| messageHash     | 0275dde58e1a456e6dbba65aba2f295e2d33812353f0632c9728c084843a3678   | Hash code of the message                                             |
| proposalId      | 6                                                                  | Id of the proposal                                                   |
| reason          | ""string""                                                         | Reason for voting                                                    |
| support         | true                                                               | True if voter voted for, false if voted against                      |
| transactionHash | 3024c7309609b69cf8ad0f6efc686fb3bf91ccc257261e9063c5cee35ac6f7cf   | Hash code of the transaction                                         |
| voter           | 0:99ea964906c807e89ff8e55ba96a86e4d85d8020c8365ded9428777aef4281cd | Voter’s address                                                      |
| votes           | 5061664014                                                         | Amount staked for voting                                             |

### Example

```java
app.post('/votes/search', (req, res) => {
 
    axios({
        method: 'post',
        url: `${apiUrl}/votes/search`,
        data: {
            limit: req.body.limit,
            locked: req.body.locked,
            offset: req.body.offset,
            ordering: req.body.ordering,
            proposalId: req.body.proposalId,
            support: req.body.support,
            voter: req.body.voter
        }
    })
    .then(function(response){
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