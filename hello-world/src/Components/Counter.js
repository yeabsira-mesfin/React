import React, { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment(){
    // this.setState({
    //   count: this.state.count+1,
      
      
    // },console.log(this.state.count));
    // console.log('callback value'+ this.state.count)
    // this.state.count = this.state.count + 1
    this.setState((prevState,props)  => ({count: prevState.count+1}))
    console.log(this.state.count)
  }
  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
    <div>
      <div>TouchAndIncrease - {this.state.count}</div>
      <button onClick={()=> this.incrementFive()}>count</button>
    </div>

    ) 
      
    
  }
}

export default Counter;