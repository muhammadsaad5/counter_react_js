import React from "react";


class Count extends React.Component{
constructor(){
  super()
  this.state ={count: 0}
  this.plus= this.plus.bind(this)
  this.minus= this.minus.bind(this)
  this.reset= this.reset.bind(this)
}

plus(){
//console.log("plus clicked")
this.setState(preState =>{ return {count: preState.count + 1}});
}
minus(){
//console.log("minus clicked")
this.setState(preState =>{return {count: preState.count - 1}});
}
reset(){
//console.log("reset  clicked")
this.setState({count: 0})
}
render(){
  return(
    <div>
 <h1>count: {this.state.count} </h1>     
<button onClick={this.plus}>plus</button>
<button onClick={this.minus}>minus</button>
<button onClick={this.reset}>reset</button>

    </div>
  );
}
}


export default Count;