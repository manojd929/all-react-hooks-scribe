import React, { useState } from 'react';
import UseStateComp from './concepts/UseStateComp';
import UseEffectComp from './concepts/UseEffectComp';
import UseMemoComp from './concepts/UseMemoComp';
import UseRefComp from './concepts/UseRefComp';
import UseContextComp from './concepts/UseContext/UseContextComp';
import UseContextRefactoredComp from './concepts/UseContextRefactored/UseContextRefactoredComp';
import UseIdComp from './concepts/UseIdComp';
import './style.css';

const HOOK_MAP = {
  USE_STATE: 'useState',
  USE_EFFECT: 'useEffect',
  USE_MEMO: 'useMemo',
  USE_REF: 'useRef',
  USE_CONTEXT: 'useContext',
  USE_CONTEXT_REFACTORED: 'useContext - Refactored Code',
  USE_ID: 'useId',
};

const App = () => {
  const [hook, setHook] = useState(HOOK_MAP.USE_ID);

  const getCompToRender = () => {
    switch (hook) {
      case HOOK_MAP.USE_STATE:
        return <UseStateComp />;
      case HOOK_MAP.USE_EFFECT:
        return <UseEffectComp />;
      case HOOK_MAP.USE_MEMO:
        return <UseMemoComp />;
      case HOOK_MAP.USE_REF:
        return <UseRefComp />;
      case HOOK_MAP.USE_CONTEXT:
        return <UseContextComp />;
      case HOOK_MAP.USE_CONTEXT_REFACTORED:
        return <UseContextRefactoredComp />;
      case HOOK_MAP.USE_ID:
        return <UseIdComp />;
    }
  };

  return (
    <>
      <fieldset>
        <legend>Select Hook</legend>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_STATE}
            name="hook"
            value={HOOK_MAP.USE_STATE}
            checked={hook === HOOK_MAP.USE_STATE}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_STATE}>useState</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_EFFECT}
            name="hook"
            value={HOOK_MAP.USE_EFFECT}
            checked={hook === HOOK_MAP.USE_EFFECT}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_EFFECT}>useEffect</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_MEMO}
            name="hook"
            value={HOOK_MAP.USE_MEMO}
            checked={hook === HOOK_MAP.USE_MEMO}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_MEMO}>useMemo</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_REF}
            name="hook"
            value={HOOK_MAP.USE_REF}
            checked={hook === HOOK_MAP.USE_REF}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_REF}>useRef</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_CONTEXT}
            name="hook"
            value={HOOK_MAP.USE_CONTEXT}
            checked={hook === HOOK_MAP.USE_CONTEXT}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_CONTEXT}>useContext</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_CONTEXT_REFACTORED}
            name="hook"
            value={HOOK_MAP.USE_CONTEXT_REFACTORED}
            checked={hook === HOOK_MAP.USE_CONTEXT_REFACTORED}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_CONTEXT_REFACTORED}>
            useContext - Refactored Code
          </label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_ID}
            name="hook"
            value={HOOK_MAP.USE_ID}
            checked={hook === HOOK_MAP.USE_ID}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_ID}>useId</label>
        </div>
      </fieldset>
      <h3>{hook}</h3>
      {getCompToRender()}
    </>
  );
};

export default App;
