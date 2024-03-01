'use client';

import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import cx from 'classnames';

import 'prismjs/themes/prism-tomorrow.css';

import classes from './code-block.module.scss';

const CodeBlock = ({ code, language }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveCode = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const classNames = cx(classes['code-block'], {
    [classes.active]: isActive,
  });

  return (
    
    <div className={classNames}>
      <button
        className={`snes-button has-ocean-color ${classes['code-button']}`}
        onClick={handleActiveCode}
      >
        {'<>'}
      </button>
      <pre className={`${classes['code-block__pre']} language-html`}>
        <code className={`${classes['code-block__pre__code']}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
