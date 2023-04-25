import React from 'react';
import { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer,  {initialState } from './reducers';
// import { addOne } from './actions';
import {applyNumber, changeOperation, clearDisplay} from './actions';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const eventHandler = (e) => {
    dispatch(applyNumber(e.target.value));
  };

  const changeOperationHandler = (e) => {
    dispatch(changeOperation(e.target.value));
  };

  const clearHandler = (e) => {
    dispatch(clearDisplay());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {eventHandler}/*onClick={() => {
                dispatch(addOne());
              }}*//>
              <CalcButton value={2} onClick = {eventHandler}/>
              <CalcButton value={3} onClick = {eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {eventHandler}/>
              <CalcButton value={5} onClick = {eventHandler}/>
              <CalcButton value={6} onClick = {eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {eventHandler}/>
              <CalcButton value={8} onClick = {eventHandler}/>
              <CalcButton value={9} onClick = {eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={changeOperationHandler}/>
              <CalcButton value={"*"} onClick={changeOperationHandler}/>
              <CalcButton value={"-"} onClick={changeOperationHandler}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {clearHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
