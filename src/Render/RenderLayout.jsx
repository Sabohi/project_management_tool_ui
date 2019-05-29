import React from "react";
import Grid from "@material-ui/core/Grid";
import RenderComponent from './RenderComponent.jsx';

const RenderLayout = props => {
    let gridItem= null;

    let columns = props.columns;

    let renderComponent = (
        <RenderComponent
            {...props}
         />
    );

    switch(columns){
        case "1":
            gridItem = (
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    {renderComponent}
                </Grid>
            );
        break;
        case "2":
            gridItem = (
                <Grid item lg={6} md={6} sm={10} xs={12}>
                    {renderComponent}
                </Grid>
            );
        break;
        case "3":
            gridItem = (
                <Grid item lg={4} md={4} sm={10} xs={12}>
                    {renderComponent}
                </Grid>
            );
        break;
        case "4":
            gridItem = (
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    {renderComponent}
                </Grid>
            );
        break;
        default:
            gridItem = (
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    {renderComponent}
                </Grid>
            );
        break;
    }

    return(
        gridItem
    );
};

export default RenderLayout;