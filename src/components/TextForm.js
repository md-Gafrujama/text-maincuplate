import React,{ useState } from 'react'


export default function TextForm(props){
  const [text, settext] = useState("");
 
  const handleLoClick= ()=>{
    var newtext = text.toLowerCase();
    settext(newtext)
  }
  
  const handleUpClick= ()=>{
    var newtext = text.toUpperCase();
    settext(newtext)
  }
  
  const handleOnChange= (event)=>{
    var changeText = event.target.value;
    settext(changeText)
  }

  const textClearClick= ()=>{
    var newtext = "";
    settext(newtext)
  }


  const [mystyle, setmystyle] = useState({display:"None"});
  const [ShowButton, setShowButton] = useState("Show Review");
  const showPrevClick= ()=>{
    if(mystyle.display==="None"){
        setmystyle({display:"Block"})
        setShowButton("Hide Review");
        
      }else{
        setmystyle({display:"None"})    
        setShowButton("Show Review");
    }
  }
 
  return (
    <div className="container my-3">
        <h1>{props.headingName}</h1>
        <div className="mb-3" >
            <textarea className="form-control" style={{backgroundColor:props.mode}} id="myText" value={text} onChange={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1 buttondec" onClick={handleUpClick} >Convert to UPPERCASE</button>
            <button className="btn btn-primary my-3 mx-1 buttondec" onClick={handleLoClick} >Convert to lowercase</button>
            <button className="btn btn-primary my-3 mx-1 buttondec" onClick={showPrevClick}  >{ShowButton}</button>
            <button className="btn btn-primary my-3 mx-1 buttondec" onClick={textClearClick}  >Clear text</button>
        </div>
        <div className="container my-3">
          <h2>Word & Character count</h2>
          <p>No of characters is = {text.length}</p>
          <p>No of Words is = {text.split(" ").length}</p>
          <p>average Time to read {0.1*text.length} Sec</p>
          <div style={mystyle} >
            <h3>Review</h3>
            <p>{text.length>0?text:"enter text to show review"}</p>
          </div>
        </div>
    </div>
  )
}
