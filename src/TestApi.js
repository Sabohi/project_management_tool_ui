import React from 'react';
// var request = require("request");

// import axios from "axios";

// import Grid from '@material-ui/core/Grid';
// import RenderLayout from './../Render/RenderLayout.jsx';

// var getDataFromLocalStorage = () => {
//     fetch("/api/dashboard_search?client_id=590&agent_id=1")
//     .then(data => data.json())
//     .then((res) =>
//         {
//             var add_time = 10000;
//             var fetched_timestamp = res.success.timestamp+add_time;
//             var fetched_dashboard_json = res.success.dashboard_json;
//             fetched_dashboard_json = JSON.stringify(fetched_dashboard_json);
//             localStorage.setItem('timestamp', fetched_timestamp);
//             localStorage.setItem('dashboard_json', fetched_dashboard_json);
//         }
//     );
// }

class TestApi extends React.Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   resourceList: props.resourceList
    // };
  // }// constructor close here

  componentDidMount() {
//     var options = { method: 'POST',
//   url: 'http://172.16.3.215:3030/elasticAPI',
//   headers: 
//    { 'cache-control': 'no-cache',
//      Connection: 'keep-alive',
//      'content-length': '44',
//      'accept-encoding': 'gzip, deflate',
//      Host: '172.16.3.215:3030',
//      'Postman-Token': '0e37dd8d-9f4f-4ad2-896b-a0a0e68997ba,150315bf-9c36-45fd-a469-40464a5dbbd9',
//      'Cache-Control': 'no-cache',
//      Accept: '*/*',
//      'User-Agent': 'PostmanRuntime/7.13.0',
//      'Content-Type': 'application/json' },
//   body: { index: 'ss', call_type: 'searchIndexData' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
var myObj = {index: "ss", call_type: "searchIndexData"};
var myJSON = JSON.stringify(myObj);

// var arr=[];
// arr['index']='ss';
// arr['call_type'] = 'searchIndexData';
// var myJSON = JSON.stringify(arr);
console.log(myJSON);
    // fetch('http://172.16.3.215:3030/elasticAPI',{
    //     method: 'post',
    //    // mode: 'cors',
    //     headers: {
    //       'Content-Type': 'application/json'
    //      },
    //     body: myJSON
    // })
    // .then((response) => 
    // {
    //     console.log('response is here');
    //     console.log(response);
    //     response.json()
    // })
    // .then(data => console.log(data));


// ============
// var jrfData = {
//   index: 'ss',
//   call_type: 'searchIndexData'
// };

// var data = new FormData();
// data.append( "json", JSON.stringify( payload ) );

// fetch("http://172.16.3.215:3030/elasticAPI",
// {
//   method: "POST",
//   body: data
// })
// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data ) ) })
// ============




    //   // Where we're fetching data from
    fetch('http://172.16.3.215:3030/elasticAPI',{
      method: 'post',
      // mode: 'cors',
      // body: myJSON
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        index: 'ss',
        call_type: 'searchIndexData'
      }),
      // headers: {
      //   // 'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
    })
    .then(response => response.json())
    .then((data) =>
      {
        // this.setState({
        // users: data,
        // isLoading: false,
        // })
        console.log('hre')
        console.log(data)
      }
    )
    // Catch any errors we hit and update the app
    .catch((error) => 
      {
        console.log(error);
        // this.setState({ error, isLoading: false })
      }
    );

  // var headers = {
  //   'Content-Type': 'application/json',
  //   // 'Authorization': 'JWT fefege...' 
  // }
  // var data = {
  //   index: 'ss',
  //   call_type: 'searchIndexData'
  // }
  // axios.post('http://172.16.3.215:3030/elasticAPI',
  //   {data: data},
  //   {headers: headers}
  //   )
  //   .then((response) => {
  //     console.log('data');
  //       console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log('error');
  //       console.log(error);
  //   })

  }

  render() {
    // console.log(this.state.resourceList);
    return(
        <div>
        <p> subuhi</p>
        </div>
    //   <Grid container style={{marginTop:"7px"}}> 
    //       <Grid container spacing={24} justify="space-between">
    //         <Grid item xs={12} sm={12} md={12} lg={12}>
    //             <Grid container spacing={24}>
    //               <RenderLayout componentType='mediaCard' columns='4'/>
    //               <RenderLayout componentType='mediaCard' columns='4'/>
    //               <RenderLayout componentType='mediaCard' columns='4'/>
    //               <RenderLayout componentType='mediaCard' columns='4'/>
    //             </Grid>
    //         </Grid>
    //     </Grid>
    //   </Grid>
    );
  }
}

export default TestApi;
