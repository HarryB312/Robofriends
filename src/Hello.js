import React, { Component } from 'react'
import './Hello.css';


class Hello extends Component {
  render() {
    return(
      <div className='f1 tc'>
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default Hello;

// function Hello(props) {
//   return(
//     <div className='f1 tc'>
//       <h1>Hello World</h1>
//       <p>{props.greeting}</p>
//     </div>
    
//   )
// }

// export default Hello

// const Hello = (props) =>{
//   return (
//     <div className='f1 tc'>
//       <h1>Tuft Daddy</h1>
//       <p>{props.tuft}</p>
//     </div>
//   )
// }

// export default Hello