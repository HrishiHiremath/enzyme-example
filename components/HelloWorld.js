import React from 'react'

class HelloWorld extends React.Component {


  render() {

    return (
      <div className='classicBold' name='componentName'>
        <h1>Hello World</h1>
  
        <p>Welcome to my world</p>
  
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default HelloWorld