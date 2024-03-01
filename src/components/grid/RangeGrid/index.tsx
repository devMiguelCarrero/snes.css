'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const RangeControlGridRaw: FC = () => {
  const [PS, setPS] = useState<number>(91);
  const [attack, setAttack] = useState<number>(134);
  const [defense, setDefense] = useState<number>(95);
  const [specialAttack, setSpecialAttack] = useState<number>(100);
  const [specialDefense, setSpecialDefense] = useState<number>(100);
  const [speed, setSpeed] = useState<number>(80);

  return (
    <>
      <div className="snes-form-group">
        <label>PS</label>
        <input
          value={PS}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPS(Number(event.target.value));
          }}
          type="range"
          className="snes-range has-nature-bg has-soft-green-thumb"
          min="0"
          max="255"
        />
      </div>
      <div className="snes-form-group">
        <label>Attack</label>
        <input
          value={attack}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setAttack(Number(event.target.value));
          }}
          type="range"
          className="snes-range has-plumber-bg"
          min="0"
          max="255"
        />
      </div>
      <div className="snes-form-group">
        <label>Defense</label>
        <input
          value={defense}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setDefense(Number(event.target.value));
          }}
          type="range"
          className="snes-range has-aged-yellow-thumb has-galaxy-bg"
          min="0"
          max="255"
        />
      </div>
      <div className="snes-form-group">
        <label>Special Attack</label>
        <input
          value={specialAttack}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSpecialAttack(Number(event.target.value));
          }}
          type="range"
          className="snes-range has-secondary-purple-thumb has-ember-bg"
          min="0"
          max="255"
        />
      </div>
      <div className="snes-form-group">
        <label>Special Defense</label>
        <input
          value={specialDefense}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSpecialDefense(Number(event.target.value));
          }}
          type="range"
          className="snes-range has-white-thumb has-sunshine-bg"
          min="0"
          max="255"
        />
      </div>
      <div className="snes-form-group">
        <label>Speed</label>
        <input
          value={speed}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSpeed(Number(event.target.value));
          }}
          type="range"
          className="snes-range has-soft-green-thumb has-turquoise-bg"
          min="0"
          max="255"
        />
      </div>
    </>
  );
};

const RangeControlGridCode = () => {
  return `
  <div class="snes-form-group">
    <label>PS</label>
    <input
      value="91"
      type="range"
      class="snes-range has-soft-green-thumb"
      min="0"
      max="255"
    />
  </div>
  <div class="snes-form-group">
    <label>Attack</label>
    <input
      value="134"
      type="range"
      class="snes-range has-ocean-bg"
      min="0"
      max="255"
    />
  </div>
  <div class="snes-form-group">
    <label>Defense</label>
    <input
      value="95"
      type="range"
      class="snes-range has-aged-yellow-thumb has-ember-bg"
      min="0"
      max="255"
    />
  </div>
  <div class="snes-form-group">
    <label>Special Attack</label>
    <input
      value="100"
      type="range"
      class="snes-range has-secondary-purple-thumb has-galaxy-bg"
      min="0"
      max="255"
    />
  </div>
  <div class="snes-form-group">
    <label>Special Defense</label>
    <input
      value="100"
      type="range"
      class="snes-range has-white-thumb has-nature-bg"
      min="0"
      max="255"
    />
  </div>
  <div class="snes-form-group">
    <label>Speed</label>
    <input
      value="80"
      type="range"
      class="snes-range has-soft-green-thumb has-turquoise-bg"
      min="0"
      max="255"
    />
  </div>
  `;
};

const RangeControlGrid: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="snes-container has-grey-bg">
        <h3 className="snes-container-title has-galaxy-underline">
          Range controls
        </h3>
        <p>
          Range tracks can have of any of the main colors and range thumbs can
          have any of the background colors
        </p>
        <div id="ranges" className="columns-grid">
          <RangeControlGridRaw />
        </div>
        {isClient && (
          <CodeBlock
            language="html"
            code={<RangeControlGridCode />}
          ></CodeBlock>
        )}
      </div>
    </>
  );
};
export default RangeControlGrid;
