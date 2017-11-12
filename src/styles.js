import React, { Component } from 'react';
import './styles.css';


class Styles extends Component {

  constructor(props){
    super(props);
    this.state = {
      gamePath: props.children.props
    }
  }

  componentDidMount(){
    const script = document.createElement("script");
    script.src =this.state.gamePath.src;
    script.async = true;
    document.head.appendChild(script);
  }
  render() {
    return (
      <div className="container">
      <div id="phaser"></div>
      </div>
    );
  }
}
  
export default Styles;
  