import { FC } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const ButtonGridRaw: FC = () => {
  return (
    <>
      <button className="snes-button">Nature</button>
      <button className="snes-button has-plumber-color">Plumber</button>
      <button className="snes-button has-sunshine-color">Sunshine</button>
      <button className="snes-button has-ocean-color">Ocean</button>
      <button className="snes-button has-turquoise-color">Turquoise</button>
      <button className="snes-button has-phantom-color">Phantom</button>
      <button className="snes-button has-rose-color">Rose</button>
      <button className="snes-button has-galaxy-color">Galaxy</button>
      <button className="snes-button has-ember-color">Ember</button>
      <button className="snes-button has-ember-color" disabled={true}>
        Disabled
      </button>
    </>
  );
};

const ButtonGridCode = () => {
  return `
  <button class="snes-button">Nature</button>
  <button class="snes-button has-plumber-color">Plumber</button>
  <button class="snes-button has-sunshine-color">Sunshine</button>
  <button class="snes-button has-ocean-color">Ocean</button>
  <button class="snes-button has-turquoise-color">Turquoise</button>
  <button class="snes-button has-phantom-color">Phantom</button>
  <button class="snes-button has-rose-color">Rose</button>
  <button class="snes-button has-galaxy-color">Galaxy</button>
  <button class="snes-button has-ember-color">Ember</button>
  <button class="snes-button has-ember-color" disabled> Disabled</button>
  `;
};

const ButtonGrid: FC = () => {
  return (
    <>
      <div className="snes-container has-aged-yellow-bg">
        <h3 className="snes-container-title">Buttons</h3>
        <div id="buttons" className="item-grid code-grid">
          <ButtonGridRaw />
        </div>
        <CodeBlock language="html" code={<ButtonGridCode />}></CodeBlock>
      </div>
    </>
  );
};
export default ButtonGrid;
