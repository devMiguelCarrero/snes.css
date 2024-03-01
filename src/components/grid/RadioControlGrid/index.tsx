'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const RadioControlGridRaw: FC = () => {
  const [continueValue, setContinueValue] = useState('yes');
  const [startingClass, setStartingClass] = useState('warrior');
  const [dificulty, setDificulty] = useState('easiest');

  return (
    <>
      <div className="snes-form-group">
        <label>CONTINUE?</label>
        <div className="snes-radio">
          <label className="snes-radio__item">
            <input
              type="radio"
              name="continue"
              value="yes"
              checked={continueValue === 'yes'}
              onChange={(event) => {
                setContinueValue(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">yes</span>
          </label>
          <label className="snes-radio__item has-plumber-icon">
            <input
              type="radio"
              name="continue"
              value="no"
              checked={continueValue === 'no'}
              onChange={(event) => {
                setContinueValue(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">NO</span>
          </label>
        </div>
      </div>
      <div className="snes-form-group">
        <label>STARTING CLASS</label>
        <div className="snes-radio snes-radio--vertical has-ember-icons">
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="warrior"
              checked={startingClass === 'warrior'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">warrior</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="knight"
              checked={startingClass === 'knight'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">Knight</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="wanderer"
              checked={startingClass === 'wanderer'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">wanderer</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="thief"
              checked={startingClass === 'thief'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">thief</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="bandit"
              checked={startingClass === 'bandit'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">bandit</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="hunter"
              checked={startingClass === 'hunter'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">hunter</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="sorecerer"
              checked={startingClass === 'sorecerer'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">sorecerer</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="pyromancer"
              checked={startingClass === 'pyromancer'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">pyromancer</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="cleric"
              checked={startingClass === 'cleric'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">cleric</span>
          </label>
          <label className="snes-radio__item">
            <input
              type="radio"
              name="class"
              value="deprived"
              checked={startingClass === 'deprived'}
              onChange={(event) => {
                setStartingClass(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">deprived</span>
          </label>
        </div>
      </div>
      <div className="snes-form-group">
        <label>SELECT DIFICULTY</label>
        <div className="snes-radio snes-radio--vertical">
          <label className="snes-radio__item has-turquoise-icon">
            <input
              type="radio"
              name="dificulty"
              value="easiest"
              checked={dificulty === 'easiest'}
              onChange={(event) => {
                setDificulty(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">easiest</span>
          </label>
          <label className="snes-radio__item has-nature-icon">
            <input
              type="radio"
              name="dificulty"
              value="easy"
              checked={dificulty === 'easy'}
              onChange={(event) => {
                setDificulty(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">easy</span>
          </label>
          <label className="snes-radio__item has-galaxy-icon">
            <input
              type="radio"
              name="dificulty"
              value="balanced"
              checked={dificulty === 'balanced'}
              onChange={(event) => {
                setDificulty(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">balanced</span>
          </label>
          <label className="snes-radio__item has-ember-icon">
            <input
              type="radio"
              name="dificulty"
              value="hard"
              checked={dificulty === 'hard'}
              onChange={(event) => {
                setDificulty(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">hard</span>
          </label>
          <label className="snes-radio__item has-plumber-icon">
            <input
              type="radio"
              name="dificulty"
              value="agent-00"
              checked={dificulty === 'agent-00'}
              onChange={(event) => {
                setDificulty(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">00 Agent</span>
          </label>
          <label className="snes-radio__item has-phantom-icon">
            <input
              type="radio"
              name="dificulty"
              value="god-of-war"
              checked={dificulty === 'god-of-war'}
              onChange={(event) => {
                setDificulty(event.target.value);
              }}
            />
            <span className="snes-radio__item__content">god of war</span>
          </label>
        </div>
      </div>
    </>
  );
};

const RadioControlGridCode = () => {
  return `
  <div class="snes-form-group">
    <label>CONTINUE?</label>
    <div class="snes-radio">
      <label class="snes-radio__item">
        <input
          type="radio"
          name="continue"
          value="yes"
          checked
        />
        <span class="snes-radio__item__content">yes</span>
      </label>
      <label class="snes-radio__item has-plumber-icon">
        <input
          type="radio"
          name="continue"
          value="no"
        />
        <span class="snes-radio__item__content">NO</span>
      </label>
    </div>
  </div>
  <div class="snes-form-group">
    <label>STARTING CLASS</label>
    <div class="snes-radio snes-radio--vertical has-ember-icons">
      <label class="snes-radio__item">
        <input type="radio" name="class" value="warrior" checked />
        <span class="snes-radio__item__content">warrior</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="Knight" />
        <span class="snes-radio__item__content">Knight</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="wanderer" />
        <span class="snes-radio__item__content">wanderer</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="thief" />
        <span class="snes-radio__item__content">thief</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="bandit" />
        <span class="snes-radio__item__content">bandit</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="hunter" />
        <span class="snes-radio__item__content">hunter</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="sorecerer" />
        <span class="snes-radio__item__content">sorecerer</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="pyromancer" />
        <span class="snes-radio__item__content">pyromancer</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="cleric" />
        <span class="snes-radio__item__content">cleric</span>
      </label>
      <label class="snes-radio__item">
        <input type="radio" name="class" value="deprived" />
        <span class="snes-radio__item__content">deprived</span>
      </label>
    </div>
  </div>
  <div className="snes-form-group">
    <label>SELECT DIFICULTY</label>
    <div className="snes-radio snes-radio--vertical">
      <label className="snes-radio__item has-turquoise-icon">
        <input type="radio" name="dificulty" value="easiest" checked />
        <span className="snes-radio__item__content">easiest</span>
      </label>
      <label className="snes-radio__item has-nature-icon">
        <input type="radio" name="dificulty" value="easy" />
        <span className="snes-radio__item__content">easy</span>
      </label>
      <label className="snes-radio__item has-galaxy-icon">
        <input type="radio" name="dificulty" value="balanced" />
        <span className="snes-radio__item__content">balanced</span>
      </label>
      <label className="snes-radio__item has-ember-icon">
        <input type="radio" name="dificulty" value="hard" />
        <span className="snes-radio__item__content">hard</span>
      </label>
      <label className="snes-radio__item has-plumber-icon">
        <input type="radio" name="dificulty" value="agent-00" />
        <span className="snes-radio__item__content">00 Agent</span>
      </label>
      <label className="snes-radio__item has-phantom-icon">
        <input type="radio" name="dificulty" value="god-of-war" />
        <span className="snes-radio__item__content">god of war</span>
      </label>
    </div>
  </div>
  `;
};

const RadioControlGrid: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="snes-container has-soft-green-bg">
        <h3 className="snes-container-title has-plumber-underline">
          Radio controls
        </h3>
        <p>
          The Radio control icon colors can be selected individually or as a
          group
        </p>
        <div id="radios" className="columns-grid has-3-cols">
          <RadioControlGridRaw />
        </div>
        {isClient && (
          <CodeBlock
            language="html"
            code={<RadioControlGridCode />}
          ></CodeBlock>
        )}
      </div>
    </>
  );
};
export default RadioControlGrid;
