import React, { useState } from 'react';
import UseStateComp from './concepts/UseStateComp';
import UseEffectComp from './concepts/UseEffectComp';
import UseMemoComp from './concepts/UseMemoComp';
import UseRefComp from './concepts/UseRefComp';
import UseContextComp from './concepts/UseContext/UseContextComp';
import UseContextRefactoredComp from './concepts/UseContextRefactored/UseContextRefactoredComp';
import UseIdComp from './concepts/UseIdComp';
import UseReducerComp from './concepts/UseReducerComp';
import UseCallbackComp from './concepts/UseCallbackComp';
import UseCustomHookComp from './concepts/UseCustomHook/UseCustomHookComp';
import './style.css';

const HOOK_MAP = {
  USE_STATE: 'useState',
  USE_EFFECT: 'useEffect',
  USE_MEMO: 'useMemo',
  USE_REF: 'useRef',
  USE_CONTEXT: 'useContext',
  USE_CONTEXT_REFACTORED: 'useContext - Refactored Code',
  USE_ID: 'useId',
  USE_REDUCER: 'useReducer',
  USE_CALLBACK: 'useCallback',
  USE_CUSTOM_HOOK: 'useCustomHook - useData',
};

const App = () => {
  const [hook, setHook] = useState(HOOK_MAP.USE_CUSTOM_HOOK);

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
      case HOOK_MAP.USE_REDUCER:
        return <UseReducerComp />;
      case HOOK_MAP.USE_CALLBACK:
        return <UseCallbackComp />;
      case HOOK_MAP.USE_CUSTOM_HOOK:
        return <UseCustomHookComp />;
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
          <label htmlFor={HOOK_MAP.USE_STATE}>{HOOK_MAP.USE_STATE}</label>
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
          <label htmlFor={HOOK_MAP.USE_EFFECT}>{HOOK_MAP.USE_EFFECT}</label>
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
          <label htmlFor={HOOK_MAP.USE_MEMO}>{HOOK_MAP.USE_MEMO}</label>
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
          <label htmlFor={HOOK_MAP.USE_REF}>{HOOK_MAP.USE_REF}</label>
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
          <label htmlFor={HOOK_MAP.USE_CONTEXT}>{HOOK_MAP.USE_CONTEXT}</label>
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
            {HOOK_MAP.USE_CONTEXT_REFACTORED}
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
          <label htmlFor={HOOK_MAP.USE_ID}>{HOOK_MAP.USE_ID}</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_REDUCER}
            name="hook"
            value={HOOK_MAP.USE_REDUCER}
            checked={hook === HOOK_MAP.USE_REDUCER}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_REDUCER}>{HOOK_MAP.USE_REDUCER}</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_CALLBACK}
            name="hook"
            value={HOOK_MAP.USE_CALLBACK}
            checked={hook === HOOK_MAP.USE_CALLBACK}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_CALLBACK}>{HOOK_MAP.USE_CALLBACK}</label>
        </div>
        <div>
          <input
            type="radio"
            id={HOOK_MAP.USE_CUSTOM_HOOK}
            name="hook"
            value={HOOK_MAP.USE_CUSTOM_HOOK}
            checked={hook === HOOK_MAP.USE_CUSTOM_HOOK}
            onChange={(e) => setHook(e.target.value)}
          />
          <label htmlFor={HOOK_MAP.USE_CUSTOM_HOOK}>
            {HOOK_MAP.USE_CUSTOM_HOOK}
          </label>
        </div>
      </fieldset>
      <h3>Demo of {hook}</h3>
      {getCompToRender()}
    </>
  );
};

export default App;
