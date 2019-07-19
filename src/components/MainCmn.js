import React, { Component } from 'react';
import BuyDT from '../data/BuyDT'
import SellDT from '../data/SellDT'
import { throwStatement } from '@babel/types';
import { async } from 'q';
class MainCmn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results:[],
            change: true,
            BuyDT: [],
            SellDT: []
        }
    }
    async changeBuyDT() {
        this.setState({
            BuyDT: BuyDT
        });
    }
    async changeSellDT() {
        this.setState({
            SellDT: SellDT
        });
    }
    processing(SellDT, BuyDT) {
        while ((SellDT.length>0)&&(BuyDT.length>0)&&(SellDT[0].txdate<BuyDT[0].txdate)) {
            SellDT.shift()
        }
        var results = []
        var obj = {}
        while (SellDT.length > 0) {
            if (SellDT[0].orderqtty <= BuyDT[0].orderqtty) {
                // buy.orderqtty > sell.orderqtty
                obj = {
                    ...SellDT[0]
                }
                obj.buyingPrice = BuyDT[0].orderamt
                BuyDT[0].orderqtty -= SellDT[0].orderqtty
                if (BuyDT[0].orderqtty===0) BuyDT.shift()
                SellDT.shift()
                
            } else {
                // sell.orderqtty > buy.orderqtty
                obj = {
                    ...SellDT[0]
                }
                obj.orderqtty = BuyDT[0].orderqtty
                obj.buyingPrice = BuyDT[0].orderamt
                SellDT[0].orderqtty -= BuyDT[0].orderqtty
                BuyDT.shift()
            }
            results.push(obj)
        }
        this.setState({
            results: results
        });
    }
    async clickCal() {
        await this.changeBuyDT()
        this.changeSellDT()
        this.processing(this.state.SellDT, this.state.BuyDT)
    }
    render() {
        console.log('results: ', this.state.results);
        
        return (
            <div>
                <div className="btn btn-success" onClick={()=>this.clickCal()}>Caculating</div>
            </div>
        );
    }
}

export default MainCmn;