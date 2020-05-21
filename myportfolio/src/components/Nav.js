import React, { Component } from 'react'

export default class Nav extends Component {
    state={
        name:'',
    }
    componentDidMount(){
        this.setState({...this.state,name:'leroy'})
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
