import { useState } from "react";
import * as math from 'mathjs'

function Calc(){
    let [counter,setCounter] = useState("");

    function add(){
        let a = Number.parseInt(document.getElementById('input1').value);
        let b = Number.parseInt(document.getElementById('input2').value);
        counter = a+b;
        console.log(counter)
        setCounter(counter);
    }
    function sub(){
        let a = Number.parseInt(document.getElementById('input1').value);
        let b = Number.parseInt(document.getElementById('input2').value);
        counter = a-b;
        console.log(counter)
        setCounter(counter);
    }
    function mul(){
        let a = Number.parseInt(document.getElementById('input1').value);
        let b = Number.parseInt(document.getElementById('input2').value);
        counter = a*b;
        console.log(counter)
        setCounter(counter);
    }
    function dib(){
        let a = Number.parseInt(document.getElementById('input1').value);
        let b = Number.parseInt(document.getElementById('input2').value);
        if(b!=0){
            counter = (a/b);
            setCounter(counter);
        }else{
            counter = "no number divided by 0";
            setCounter(counter);
        }
        console.log(counter)
    }
    function log(){
        let a = Number.parseInt(document.getElementById('input3').value);
        counter = math.log(a,10);
        console.log(counter)
        setCounter(counter);
    }
    function fact(){
        let a = Number.parseInt(document.getElementById('input3').value);
        // let b = Number.parseInt(document.getElementById('input2').value);
        counter = math.factorial(a);
        console.log(counter)
        setCounter(counter);
    }
    
    function deri(){
        try{
            let expression = document.getElementById('derivation').value;
            let wrt = document.getElementById('wrt').value;
            const derivation = math.derivative(expression,wrt);
            setCounter(derivation.toString());
        }catch(error){
            setCounter("Invalid expression");
        }
    }
    function combi(){
        let a = Number.parseInt(document.getElementById('input1').value);
        let b = Number.parseInt(document.getElementById('input2').value);
        try{
            counter = math.combinations(a,b);
            console.log(counter)
            setCounter(counter);
        }catch(error){
            setCounter("Invalid")
        }
    }
    function permu(){
        let a = Number.parseInt(document.getElementById('input1').value);
        let b = Number.parseInt(document.getElementById('input2').value);
        try{
            counter = math.permutations(a,b);
            console.log(counter)
            setCounter(counter);
        }catch(error){
            setCounter("Invalid")
        }
    }
    return(
        <div id="calc">
            <label htmlFor="input">Input Box A:- </label>
            <input class="border border-gray-300 rounded-md p-2" placeholder="binary operations & C/P" type="number" name="input" id="input1" />
            <br /><br />
            <label htmlFor="input">Input Box B:- </label>
            <input class="border border-gray-300 rounded-md p-2" placeholder="binary operations & C/P" type="number" name="input" id="input2" />
            <br /><br />
            <label htmlFor="input">Single Input(SI) Box:- </label>
            <input class="border border-gray-300 rounded-md p-2" placeholder="for log, factorial" type="number" name="input3" id="input3" />
            <br /><br />
            <label htmlFor="derivation">Derivation Expression:- </label>
            <input class="border border-gray-300 rounded-md p-2" placeholder="Derivation Expression" type="text" name="" id="derivation" />
            <br /><br />
            <label htmlFor="wrt">with respect to:- </label>
            <input class="border border-gray-300 rounded-md p-2" placeholder="x, y, z" type="text" name="" id="wrt" />
            <br /><br /><hr />
            <h2>Opperations</h2>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={dib}>/</button>
            <button onClick={log}>log(SI)</button>
            <button onClick={fact}>factorial(SI)</button>
            <button onClick={deri}>Derivation</button>
            <button onClick={combi}>Combinations</button>
            <button onClick={permu}>permutations</button>
            <hr />
            <h2>result:- {counter}</h2>
        </div>
    );
}
export default Calc;