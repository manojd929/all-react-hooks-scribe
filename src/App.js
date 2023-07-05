import React from 'react';
import './style.css';
import UseStateComp from './concepts/UseStateComp';
import UseEffectComp from './concepts/UseEffectComp';
import UseMemoComp from './concepts/UseMemoComp';
import UseRefComp from './concepts/UseRefComp';
import UseReducer from './concepts/UseReducer';
import UseLayoutEffect from './concepts/UseLayoutEffect';
import ImperativeHandle from './concepts/UseImperative/ImperativeHandle';
import UseContext from './concepts/Context/UseContext';
import UseCallback from './concepts/Callback/UseCallback';

// Reference: https://youtu.be/LlvBzyy-558
export default function App() {
  return (
    <div>
      <h3>UseState</h3>
      <UseStateComp />
      <hr />
      <h3>UseEffect</h3>
      <UseEffectComp />
      <hr />
      <h3>UseMemo</h3>
      <UseMemoComp />
      <hr />
      <h3>UseRef</h3>
      <UseRefComp />
      <hr />
      <h3>UseReducer</h3>
      <UseReducer />
      <hr />
      <h3>UseLayoutEffect</h3>
      <UseLayoutEffect />
      <hr />
      <h3>ImperativeHandle</h3>
      <ImperativeHandle />
      <hr />
      <h3>UseConext</h3>
      <UseContext />
      <hr />
      <h3>UseCallback</h3>
      <UseCallback />
    </div>
  );
}
