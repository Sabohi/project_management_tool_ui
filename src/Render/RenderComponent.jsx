import React from 'react';
import MediaCard from './../Components/MediaCard';
import SimpleCard from './../Components/SimpleCard';

class RenderComponent extends React.Component{
    render(){
        let dashboardComponent = null;
    
        let element = this.props.componentType;
        switch(element){
            case 'mediaCard':
                dashboardComponent = (
                    <MediaCard {...this.props}/>
                );
            break;
            case 'simpleCard':
                dashboardComponent = (
                    <SimpleCard {...this.props}/>
                );
            break;
            default:
        }
        return(
            dashboardComponent
        );
    }
}

export default RenderComponent;
