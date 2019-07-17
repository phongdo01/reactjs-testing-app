import React, { Component } from 'react';
import BuyDT from '../data/BuyDT'
import SellDT from '../data/SellDT'
class MainCmn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results:[],
            change: true
        }
    }
    caculating(SellDT) {
        var sellLen = SellDT.length
        var index = 0
        while (index<sellLen) {
            var id = index
            var symbol =SellDT[index].symbol 
            var sellArr = []
            var buyArr = []
            while (id<sellLen) {
                if (SellDT[index].symbol!==SellDT[id].symbol) break
                id++
            }
            sellArr = SellDT.slice(index, id)
            index = id
            console.log(sellArr)
        }
    }
    cutArray
    processing(SellDT, BuyDT) {
        while (SellDT[0].txdate<BuyDT[0].txdate) {
            SellDT.shift()
        }
        var result = []
        var obj = {}
        while (SellDT.length > 0) {
            if (SellDT[0].orderqtty <= BuyDT[0].orderqtty) {
                // buy.orderqtty > sell.orderqtty
                obj = {
                    ...SellDT[0]
                }
                obj.buyingPrice = BuyDT[0].oderamt
                BuyDT[0].orderqtty -= SellDT[0].orderqtty
                if (BuyDT[0].orderqtty===0) BuyDT.shift()
                SellDT.shift()
                
            } else {
                // sell.orderqtty > buy.orderqtty
                obj = {
                    ...SellDT[0]
                }
                obj.orderqtty = BuyDT[0].orderqtty
                obj.buyingPrice = BuyDT[0].oderamt
                SellDT[0].orderqtty -= BuyDT[0].orderqtty
                BuyDT.shift()
            }
            result.push(obj)
        }
        console.log('result: ', result)
    }
    
    render() {
        {this.caculating(SellDT)}
        return (
            <div>
                ReactJs

            </div>
        );
    }
}

export default MainCmn;