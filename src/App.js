import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index.js';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber, changeOperator, clearDisplay, memoryApply, memoryClear, memorySet} from './actions/index.js';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={()=>{dispatch(memorySet())}} value={"M+"}/>
              <CalcButton onClick={()=>{dispatch(memoryApply())}} value={"MR"}/>
              <CalcButton onClick={()=>{dispatch(memoryClear())}} value={"MC"}/>
            </div>

            <div className="row">
                       {/*onClick={()=>{dispatch(addOne())}}*/}
              <CalcButton onClick={()=>{dispatch(applyNumber(1))}} value={1}/>
              <CalcButton onClick={()=>{dispatch(applyNumber(2))}} value={2}/>
              <CalcButton onClick={()=>{dispatch(applyNumber(3))}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{dispatch(applyNumber(4))}} value={4}/>
              <CalcButton onClick={()=>{dispatch(applyNumber(5))}} value={5}/>
              <CalcButton onClick={()=>{dispatch(applyNumber(6))}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{dispatch(applyNumber(7))}} value={7}/>
              <CalcButton onClick={()=>{dispatch(applyNumber(8))}} value={8}/>
              <CalcButton onClick={()=>{dispatch(applyNumber(9))}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{dispatch(changeOperator("+"))}} value={"+"}/>
              <CalcButton onClick={()=>{dispatch(changeOperator("*"))}} value={"*"}/>
              <CalcButton onClick={()=>{dispatch(changeOperator("-"))}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={()=>{dispatch(clearDisplay())}}value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
