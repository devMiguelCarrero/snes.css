'use client';

import { FC, useEffect, useState } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const SelectGridRaw: FC = () => {
  const [selectValue, setSelectValue] = useState<string>('2');
  const [errorSelectValue, setErrorSelectValue] = useState<string>('1');
  const [warningSelectValue, setWarningSelectValue] = useState<string>('1');
  const [successSelectValue, setSuccessSelectValue] = useState<string>('1');

  return (
    <>
      <div className="snes-form-group">
        <label>Select</label>
        <div className="snes-input">
          <select
            value={selectValue}
            onChange={(event) => {
              setSelectValue(event.target.value);
            }}
          >
            <option value="1">The power of the warrior</option>
            <option value="2">The power of the mystic</option>
            <option value="3">The power of the guardian</option>
          </select>
        </div>
      </div>
      <div className="snes-form-group">
        <label>Success Select</label>
        <div className="snes-input is-success">
          <select
            value={successSelectValue}
            onChange={(event) => {
              setSuccessSelectValue(event.target.value);
            }}
          >
            <option value="1">Invincible courage</option>
            <option value="2">Inner strengh</option>
            <option value="3">Kindess to aid friends</option>
          </select>
        </div>
      </div>
      <div className="snes-form-group">
        <label>Warned Select</label>
        <div className="snes-input is-warning">
          <select
            value={warningSelectValue}
            onChange={(event) => {
              setWarningSelectValue(event.target.value);
            }}
          >
            <option value="1">A sword of terrible destruction</option>
            <option value="2">A staff of wonder and ruin</option>
            <option value="3">A shield to repel all</option>
          </select>
        </div>
      </div>
      <div className="snes-form-group">
        <label>Error Select</label>
        <div className="snes-input is-error">
          <select
            value={errorSelectValue}
            onChange={(event) => {
              setErrorSelectValue(event.target.value);
            }}
          >
            <option value="1">Maybe...</option>
            <option value="2">The future</option>
            <option value="3">Refused to change</option>
          </select>
        </div>
      </div>
    </>
  );
};

const SelectGridCode = () => {
  return `
  <div class="snes-form-group">
    <label>Select</label>
    <div class="snes-input">
      <select>
        <option value="1">The power of the warrior</option>
        <option value="2">The power of the mystic</option>
        <option value="3">The power of the guardian</option>
      </select>
    </div>
  </div>
  <div class="snes-form-group">
    <label>Success Select</label>
    <div class="snes-input is-success">
      <select>
        <option value="1">Invincible courage</option>
        <option value="2">Inner strengh</option>
        <option value="3">Kindess to aid friends</option>
      </select>
    </div>
  </div>
  <div class="snes-form-group">
    <label>Warned Select</label>
    <div class="snes-input is-warning">
      <select>
        <option value="1">A sword of terrible destruction</option>
        <option value="2">A staff of wonder and ruin</option>
        <option value="3">A shield to repel all</option>
      </select>
    </div>
  </div>
  <div class="snes-form-group">
    <label>Error Select</label>
    <div class="snes-input is-error">
      <select>
        <option value="1">Maybe...</option>
        <option value="2">The future</option>
        <option value="3">Refused to change</option>
      </select>
    </div>
  </div>
  `;
};

const SelectGrid: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="snes-container has-white-bg">
        <h3 className="snes-container-title has-ember-underline">Selects</h3>
        <SelectGridRaw />
        {isClient && (
          <CodeBlock language="html" code={<SelectGridCode />}></CodeBlock>
        )}
      </div>
    </>
  );
};
export default SelectGrid;
