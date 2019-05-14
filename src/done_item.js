import React from 'react';
import Done from './done';




class DoingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
     }
  }






render(){

  let rightBtn = this.props.right ? "/right.svg" : null
  let leftBtn = this.props.left ? "/left.svg" : null

  return (
    <div className="todoItem">
      <img className="imageIcon" src={leftBtn} alt="" onClick={() => this.handleClick("left",this.props.doing)}/>
      <div>{this.props.done}</div>
      <img className="imageIcon" src={rightBtn} alt="" onClick={() => this.handleClick("right",this.props.doing)}/>
    </div>
  )
}


}




export default DoingItem;
