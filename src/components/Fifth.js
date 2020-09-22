import React, { Component } from 'react';
import ctx from '../Context'

class Fifth extends Component {
    render() {
        const ct = this.context
        console.log('ct: ', ct)
        return (
            <div>
                
            </div>
        );
    }
}
Fifth.contextType = ctx;

export default Fifth;