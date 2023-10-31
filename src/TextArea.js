import React, { Component } from "react";
import "./App.css"; // Eğer stil dosyasını kullanıyorsanız ekleyin


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

class TextArea extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      charCount: 0,
      backgroundColor: "#808080", 
      textColor: "#FFFFFF", // Varsayılan metin rengi
      
      
    };
  }

  handleTextChange = (e) => {
    const newText = e.target.value;
    const newTextColor = getRandomColor(); // Rastgele metin rengi
    const newBackgroundColor = getRandomColor(); // Rastgele arkaplan rengi
    const charCount = newText.length;
    const newBackgroundColor2 = getRandomColor();

    this.setState({
      text: newText,
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
      charCount: charCount,
    });
    document.querySelector(".App-header").style.backgroundColor = newBackgroundColor2;
  }
  

  render() {
    const text = this.state.text;

    const animatedText = text.split("").map((char, index) => (
      <span key={index} className="animated-text" style={{ color: this.state.textColor }}>
        {char}
      </span>
    ));

    return (
      <div style={{ backgroundColor: this.state.backgroundColor,  position:"relative", bottom:30}}>
        
        <textarea
          value={this.state.text}
          onChange={this.handleTextChange}
          placeholder="Type something..."
          style={{width:"400px",height:"90px",margin: "10px" , color:"#000000" }}
        />
        <div>
          <p>Entered Text: {animatedText}</p>
          <p>Character Count: {this.state.charCount}</p>
        </div>

        
      </div>
    );
  }
}

export default TextArea;

