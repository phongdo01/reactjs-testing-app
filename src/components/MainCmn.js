import React, { Component } from 'react';
// import Boo from './Boo';
import LearnHook from './LearnHook'
class MainCmn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countM: 0
        }
    }
    clickCal() {
        this.setState({
            countM: 3
        });
    }
    showPrj() {
        LearnHook()
    }
    render() {

        return (
            <div>
                {/* <Boo cal={this.clickCal.bind(this)} /> */}
                {/* <div className="btn btn-success" onClick={() => this.clickCal()}>Caculating</div> */}
                <div className='mt-1'></div>
                <LearnHook/>
            </div>
        );
    }
}

export default MainCmn;