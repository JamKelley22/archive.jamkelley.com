import React from 'react';
import './home.css';
const brain = require('brain.js');
const network = new brain.NeuralNetwork();

class Home extends React.Component {
  state = {
    secondsElapsed: 0,
    color: "white",
  }

  tick = () => {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});

    let e = document.getElementById("name");
    let style = window.getComputedStyle(e, null);
    let backgroundStyle = style.getPropertyValue("background-color");
    let rgb = backgroundStyle.split(",");
    let nr = parseInt(rgb[0].substring(4),10);
    let ng = parseInt(rgb[1].substring(1),10);
    let nb = parseInt(rgb[2].substring(1,2),10);

    let output = network.run({ r: nr, g: ng, b: nb });  // { white: 0.99, black: 0.002 }
    //console.log("Black: " +output.black);
    //console.log("White: " + output.white);
    let newcolor = (output.black >= output.white) ? "black" : "white";
    //console.log(typeof(newcolor));
    this.setState({
      color: newcolor
    });
    //console.log(newcolor);
  }

  componentDidMount() {
    network.train([
               {input: { r: 255, g: 0, b: 0 }, output: { white: 1 }},
               {input: { r: 0, g: 255, b: 0 }, output: { white: 1 }},
               {input: { r: 0, g: 0, b: 255 }, output: { white: 1 }},
               {input: { r: 255, g: 255, b: 0 }, output: { black: 1 }},
               {input: { r: 0, g: 255, b: 255 }, output: { black: 1 }},
               {input: { r: 255, g: 0, b: 255 }, output: { white: 1 }}
             ]);
    this.interval = setInterval(this.tick, 100);
    //const backgroundStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
  }

  componentWillUnmount() {
    this.setState({secondsElapsed: 0});
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1 id='outline'>Hi</h1>
        <h1 id='outline'>I'm <span id='name' className={this.state.color}>Jameel Kelley</span></h1>
      </div>
    );
  }
}

export default Home;
