import React from 'react';
import DoneItem from './done';



class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
     }
  }


    render() {
      let done;
      if (this.props.done) {
       done = (this.props.done).map((done,i) => {
      return (
        <DoneItem
          key={i}
          done={done}
          left={"yes"}
          container={"done"}
        />
      );
      });
      }
      return (
        <div>
          <h1>Done</h1>
          <div>{done}</div>
        </div>
      )
    }

  }

    export default Done;
