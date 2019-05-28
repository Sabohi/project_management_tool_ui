import React from 'react';
import Grid from '@material-ui/core/Grid';
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
  constructor(props) {
    super(props);
    // this.state = {
    //   resourceList: props.resourceList
    // };
  }// constructor close here

  componentDidMount() {
    fetch('http://172.16.3.215:3030/elasticAPI',{
        method: 'post',
        body: JSON.stringify({
            index: 'ss',
            call_type: 'searchIndexData'
          })
    })
    .then((response) => 
    {
        console.log('response is here');
        console.log(response);
        response.json()
    })
    .then(data => console.log(data));
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
