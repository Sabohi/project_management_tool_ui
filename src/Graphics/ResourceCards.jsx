import React from 'react';
import Grid from '@material-ui/core/Grid';
import RenderLayout from './../Render/RenderLayout.jsx';

class ResourceCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceList: props.resourceList
    };
  }// constructor close here

  render() {
    console.log(this.state.resourceList);
    return(
      <Grid container style={{marginTop:"7px"}}> 
          <Grid container spacing={24} justify="space-between">
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={24}>
                  <RenderLayout componentType='mediaCard' columns='4'/>
                  <RenderLayout componentType='mediaCard' columns='4'/>
                  <RenderLayout componentType='mediaCard' columns='4'/>
                  <RenderLayout componentType='mediaCard' columns='4'/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ResourceCards;
