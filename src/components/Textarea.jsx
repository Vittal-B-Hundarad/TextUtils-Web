import React, { useState } from 'react'

export default function textarea(props) {
  const toupper = ()=>{
    console.log(text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" ,"success")
  }

  const tolower = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase" ,"success")
  }

  const cleartext = ()=>{
    let newText=''
    setText(newText);
    props.showAlert("Text cleared" ,"success")
  }
   const handllCopy=()=>{
   var text=document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Text Copied" ,"success")
   } 

  const handleExtraspaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed" ,"success")
  }

  const handleevent = (event)=>{
    console.log("on change");
    setText(event.target.value)
  }

const [text,setText]=useState('')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
     
      <div className="mb-3">
      <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleevent} id="myBox" colums="40" rows="10"></textarea>
      </div>
      <button type="button" onClick={toupper} className="btn btn-primary mx-1">ToUppercase</button>
      <button type="button" onClick={tolower} className="btn btn-primary mx-1">ToLower</button>
      <button type="button" onClick={handllCopy} className="btn btn-primary mx-1">Copy</button>
      <button type="button" onClick={handleExtraspaces} className="btn btn-primary mx-1">ExtraSpaceRemove</button>
      <button type="button" onClick={cleartext} className="btn btn-primary mx-1">ClearAll</button>
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
        <b><p>{text.split(" ").length} words and {text.length} characters </p></b>
      <b><p>{0.008 * text.split(" ").length} Minutes reading Required </p></b>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text above to preview it"}</p>
    </div>
    </>
  )
}
