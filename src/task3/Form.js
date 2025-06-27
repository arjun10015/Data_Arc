import React,{useState} from "react";
import './form.css';
function Form(){
    const [inputText,setInputText] = useState(""); 
    const [inputText1,setInputText1] = useState(""); 
    const [inputText2,setInputText2] = useState(""); 
    const [inputText3,setInputText3] = useState(""); 


    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    const handleInputChange1 = (e) => {
        setInputText1(e.target.value);
    };
    const handleInputChange2 = (e) => {
        setInputText2(e.target.value);
    };
    const handleInputChange3 = (e) => {
        setInputText3(e.target.value);
    };

return(
        <div className="form-container">
            <form>
            <h3>Input Form</h3>
            <label>Name: </label><input
                type="text"
                placeholder="Type Name....."
                value={inputText}
                onChange={handleInputChange}
            /><br/>
             <label>Address: </label><input
                type="text"
                placeholder="Type Address....."
                value={inputText1}
                onChange={handleInputChange1}
            /><br/>
            <label>Email: </label><input
                type="email"
                placeholder="Type email....."
                value={inputText2}
                onChange={handleInputChange2}
            /><br/>
            <label>Phone No: </label><input
                type="number"
                placeholder="Type Phone No....."
                value={inputText3}
                onChange={handleInputChange3}
            /><br/>
            </form>
            <div className="result-container">
                <h3>Display Form</h3>
            <p>Typed Name: <strong>{inputText}</strong></p>
            <p>Typed Address: <strong>{inputText1}</strong></p>
            <p>Typed Email: <strong>{inputText2}</strong></p>
            <p>Typed Phone No: <strong>{inputText3}</strong></p>
            </div>
        </div>
    );
}
export default Form;
