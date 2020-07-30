import React, { Component } from 'react';

class Boo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    UNSAFE_componentWillReceiveProps() {
        this.setState({
            count: this.state.count + 1
        });
    }
    click = () => {
        this.props.cal()
        this.setState({
            count: 333
        });
    }
    fn = async () => {
        return {foo: 'foo'}
    }
    render() {
        console.log('version: ', React.version)
        return (
            <div>
                <button className='btn btn-primary' onClick={this.click}>Cccc</button>
            </div>
        );
    }
}

export default Boo;