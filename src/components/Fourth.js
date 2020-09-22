import React, { Component } from 'react';
import ctx from '../Context'
import uctx from '../UserContext'
class Fourth extends Component {
    componentDidMount() {
        const ct = this.context
        console.log('ct: ', ct)
        console.log('prp: ', this.props.theme)
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
Fourth.contextType = uctx;

export default props=>(
    <ctx.Consumer>
        {theme=>(
            <Fourth {...props} theme = {theme}/>
        )}
    </ctx.Consumer>
);