import React,{useState} from "react";
import "./style.css";
const App = ()=>{

    const [user ,setUser] = useState({num1:null,num2:null})
    const [res , setRes] = useState(0)
    const [error,setError] = useState("");
    const [success,setSuccess]= useState("");
 
    let {num1,num2} = user;

    function performOperation(e){
        if(e==="+"){
            setRes(+num1 + (+num2));
        }else if(e==="-"){
            setRes(+num1 - (+num2));
        }else if(e==="*"){
            setRes(+num1 * (+num2));
        }else{
            setRes(+num1 / (+num2));
        }

        setSuccess("Success!");
        setError("");
    }

    function btnOperation(e){
        e.preventDefault();
        
        console.log(e.target.innerHTML);
        console.log(!isNaN(Number(num1)));
        if(!num1 || !num2){
           console.log(num1.isNaN());
            setSuccess("");
            if(!num1){
                setError("Error! Num1 cannot be empty")
            }else{
                setError("Error! Num2 cannot be empty")
            }
           return 
        }else if(isNaN(Number(num1)) || isNaN(Number(num2))){
            setError("Error! String Cannot be Calculated");
            setSuccess("");
            return
        }
        performOperation(e.target.innerHTML);
        
    }
    return (
        <div className="main">

            <div className="cal">
                <h3>React Calculator</h3>
                <input type="text" placeholder="Number1"
                    onChange={(e)=>{setUser({...user,num1:e.target.value})}}
                />
              <p></p>
                <input type="text" placeholder="Number2"
                     onChange={(e)=>{setUser({...user,num2:e.target.value})}}
                />
                <p></p>
                <div className="btn">
                    <button
                        onClick={btnOperation}
                    >+</button>
                    <button
                         onClick={btnOperation}
                    >-</button>
                    <button
                        onClick={btnOperation}
                    >*</button>
                    <button
                        onClick={btnOperation}
                    >/</button>
                </div>
                {   error && <h4 style={{color:"red",textAlign:"center"}}>{error}</h4> }
                
                {   success && <h4 style={{color:"green",textAlign:"center"}}>{success}</h4>}
                
                { success && <div className="res">Result : {res}</div>}
            </div>

        </div>
    )
}

export default App;