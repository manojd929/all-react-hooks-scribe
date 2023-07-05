import React, { useState } from 'react';
import UseStateComp from './concepts/UseStateComp';
import UseEffectComp from './concepts/UseEffectComp';
import UseMemoComp from './concepts/UseMemoComp';
import UseRefComp from './concepts/UseRefComp';
import './style.css';

const HOOK_MAP = {
  USE_STATE: 'useState',
  USE_EFFECT: 'useEffect',
  USE_MEMO: 'useMemo',
  USE_REF: 'useRef',
};

const App = () => {
  const [hook, setHook] = useState(HOOK_MAP.USE_STATE);

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
          <label for={HOOK_MAP.USE_STATE}>useState</label>
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
          <label for={HOOK_MAP.USE_EFFECT}>useEffect</label>
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
          <label for={HOOK_MAP.USE_MEMO}>useMemo</label>
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
          <label for={HOOK_MAP.USE_REF}>useRef</label>
        </div>
      </fieldset>
      <h3>{hook}</h3>
      {getCompToRender()}
    </>
  );
};

export default App;
