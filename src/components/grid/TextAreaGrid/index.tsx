'use client';

import { FC, useEffect, useState } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const TextAreaGridRaw: FC = () => {
  const [inputValue, setTextAreaValue] = useState<string>('');
  const [successValue, setSuccessValue] = useState<string>(
    'This success textarea fills you with determination'
  );
  const [warningValue, setWarningValue] = useState<string>(
    "if you keep going the way you are now... you're gonna have a bad time"
  );
  const [failValue, setFailValue] = useState<string>('Hesitation is defeat');

  return (
    <>
      <div className="snes-form-group">
        <label>Textarea</label>
        <div className="snes-input">
          <textarea
            value={inputValue}
            onChange={(event) => {
              setTextAreaValue(event.target.value);
            }}
            placeholder=""
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Success Textarea</label>
        <div className="snes-input is-success">
          <textarea
            value={successValue}
            onChange={(event) => {
              setSuccessValue(event.target.value);
            }}
            placeholder="Textarea text"
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Warned Textarea</label>
        <div className="snes-input is-warning">
          <textarea
            value={warningValue}
            onChange={(event) => {
              setWarningValue(event.target.value);
            }}
            placeholder="Textarea text"
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Error Textarea</label>
        <div className="snes-input is-error">
          <textarea
            value={failValue}
            onChange={(event) => {
              setFailValue(event.target.value);
            }}
            placeholder="Textarea text"
          />
        </div>
      </div>
      <div className="snes-form-group">
        <label>Disabled Textarea</label>
        <div className="snes-input">
          <textarea
            value=""
            placeholder="But the future refused to change"
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

const TextAreaGridCode = () => {
  return `
  <div className="snes-form-group">
    <label>Textarea</label>
    <div className="snes-input">
      <textarea
        value=""
        placeholder=""
      />
    </div>
  </div>
  <div className="snes-form-group">
    <label>Success Textarea</label>
    <div className="snes-input is-success">
      <textarea
        value="This success textarea fills you with determination"
        placeholder="Textarea text"
      />
    </div>
  </div>
  <div className="snes-form-group">
    <label>Warned Textarea</label>
    <div className="snes-input is-warning">
      <textarea
        value="if you keep going the way you are now... you're gonna have a bad time"
        placeholder="Textarea text"
      />
    </div>
  </div>
  <div className="snes-form-group">
    <label>Error Textarea</label>
    <div className="snes-input is-error">
      <textarea
        value="But the future refused to change"
        placeholder="Textarea text"
      />
    </div>
  </div>
  `;
};

const TextAreaGrid: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="snes-container has-aged-yellow-bg">
        <h3 className="snes-container-title has-rose-underline">Textareas</h3>
        <TextAreaGridRaw />
        {isClient && (
          <CodeBlock language="html" code={<TextAreaGridCode />}></CodeBlock>
        )}
      </div>
    </>
  );
};
export default TextAreaGrid;
