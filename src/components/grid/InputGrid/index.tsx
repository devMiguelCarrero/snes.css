'use client';

import { FC, useEffect, useState } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const InputGridRaw: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [successValue, setSuccessValue] = useState<string>(
    'This input has a correct value'
  );
  const [warningValue, setWarningValue] = useState<string>(
    'This input has a warned value'
  );
  const [failValue, setFailValue] = useState<string>(
    'This input has an incorrect value'
  );
  const [dateValue, setDateValue] = useState<string>('1997-01-31');

  return (
    <>
      <div className="snes-form-group">
        <label>Input Text</label>
        <div className="snes-input">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            placeholder="Input text"
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Success Input</label>
        <div className="snes-input is-success">
          <input
            type="text"
            value={successValue}
            onChange={(event) => {
              setSuccessValue(event.target.value);
            }}
            placeholder="Input text"
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Warned Input</label>
        <div className="snes-input is-warning">
          <input
            type="text"
            value={warningValue}
            onChange={(event) => {
              setWarningValue(event.target.value);
            }}
            placeholder="Input text"
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Error Input</label>
        <div className="snes-input is-error">
          <input
            type="text"
            value={failValue}
            onChange={(event) => {
              setFailValue(event.target.value);
            }}
            placeholder="Input text"
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Date input</label>
        <div className="snes-input">
          <input
            type="date"
            value={dateValue}
            onChange={(event) => {
              setDateValue(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const InputGridCode = () => {
  return `
  <div class="snes-form-group">
    <label>Input Text</label>
    <div class="snes-input">
      <input type="text" value="" placeholder="Input text" />
    </div>
  </div>
  <div class="snes-form-group">
    <label>Success Input</label>
    <div class="snes-input is-success">
      <input
        type="text"
        value="This input has a correct value"
        placeholder="Input text"
      />
    </div>
  </div>
  <div class="snes-form-group">
    <label>Warned Input</label>
    <div class="snes-input is-warning">
      <input
        type="text"
        value="This input has a warned value"
        placeholder="Input text"
      />
    </div>
  </div>
  <div class="snes-form-group">
    <label>Error Input</label>
    <div class="snes-input is-error">
      <input
        type="text"
        value="This input has a incorrect value"
        placeholder="Input text"
      />
    </div>
  </div>
  <div class="snes-form-group">
    <label>Date input</label>
    <div class="snes-input">
      <input type="date" value="1997-01-31" />
    </div>
  </div>
  `;
};

const InputGrid: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="snes-container has-grey-bg">
        <h3 className="snes-container-title has-ocean-underline">Inputs</h3>
        <InputGridRaw />
        {isClient && (
          <CodeBlock language="html" code={<InputGridCode />}></CodeBlock>
        )}
      </div>
    </>
  );
};
export default InputGrid;
