import { FC } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const TextGridRaw: FC = () => {
  return (
    <>
      <p>Normal</p>
      <p className="text-nature-color">Nature</p>
      <p className="text-plumber-color">Plumber</p>
      <p className="text-sunshine-color">Sunshine</p>
      <p className="text-ocean-color">Ocean</p>
      <p className="text-turquoise-color">Turquoise</p>
      <p className="text-phantom-color">Phantom</p>
      <p className="text-rose-color">Rose</p>
      <p className="text-galaxy-color">Galaxy</p>
      <p className="text-ember-color">Ember</p>
    </>
  );
};

const TextGridCode: FC = () => {
  return `
  <p>Normal</p>
  <p className="text-nature-color">Nature</p>
  <p className="text-plumber-color">Plumber</p>
  <p className="text-sunshine-color">Sunshine</p>
  <p className="text-ocean-color">Ocean</p>
  <p className="text-turquoise-color">Turquoise</p>
  <p className="text-phantom-color">Phantom</p>
  <p className="text-rose-color">Rose</p>
  <p className="text-galaxy-color">Galaxy</p>
  <p className="text-ember-color">Ember</p>
  `;
};

const TextGrid: FC = () => {
  return (
    <>
      <div className="snes-container has-white-bg">
        <h3 className="snes-container-title has-nature-underline">Texts</h3>
        <p>List icons can be of any of the main colors</p>
        <div id="texts" className="item-grid">
          <TextGridRaw />
        </div>
        <CodeBlock language="html" code={<TextGridCode />}></CodeBlock>
      </div>
    </>
  );
};
export default TextGrid;
