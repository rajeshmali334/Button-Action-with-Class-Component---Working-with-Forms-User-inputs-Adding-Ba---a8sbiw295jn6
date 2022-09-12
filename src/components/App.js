import React, {Component, useState} from "react";
import '../styles/App.css';

function App(){
	const[showParagraph, setshowParagraph]= useState(false)
	const showPara= ()=>{
		if(showParagraph){
		setshowParagraph(false);
		}else{
		setshowParagraph(true);
		}

    	return(
    		<div id="main">
				
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={showPara}>click</button>
				{ showParagraph &&
					<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
				}
    		</div>
    	);
    
}


export default App;

