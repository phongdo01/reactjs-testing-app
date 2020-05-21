import React, { Component } from 'react';
import BuyDT from '../data/BuyDT'
import SellDT from '../data/SellDT'
import { throwStatement } from '@babel/types';
import { async } from 'q';
import Boo from './Boo'
class MainCmn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countM:0
        }
    }
    clickCal(){
        this.setState({
            countM:3
        });
    }
    render() {
        
        return (
            <div>
                <Boo cal = {this.clickCal.bind(this)}/>
                <div className="btn btn-success" onClick={()=>this.clickCal()}>Caculating</div>
            </div>
        );
    }
}

export default MainCmn;