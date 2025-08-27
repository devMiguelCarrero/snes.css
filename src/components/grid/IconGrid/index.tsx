import { FC } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const IconGridRaw: FC = () => {
  return (
    <>
      <div>
        <i className="snes-icon icon-heart"></i>
      </div>
      <div>
        <i className="snes-icon icon-warning"></i>
      </div>
      <div>
        <i className="snes-icon icon-star"></i>
      </div>
    </>
  );
};

const IconGridCode: FC = () => {
  return `
  <p>Normal</p>
  <p class="text-nature-color">Nature</p>
  <p class="text-plumber-color">Plumber</p>
  <p class="text-sunshine-color">Sunshine</p>
  <p class="text-ocean-color">Ocean</p>
  <p class="text-turquoise-color">Turquoise</p>
  <p class="text-phantom-color">Phantom</p>
  <p class="text-rose-color">Rose</p>
  <p class="text-galaxy-color">Galaxy</p>
  <p class="text-ember-color">Ember</p>
  `;
};

const IconGrid: FC = () => {
  return (
    <>
      <div className="snes-container has-aged-yellow-bg">
        <h3 className="snes-container-title has-plumber-underline">Icons</h3>
        <div id="icons" className="item-grid text-[40px] lg:text-[52px]">
          <IconGridRaw />
        </div>
        <CodeBlock language="html" code={<IconGridCode />}></CodeBlock>
      </div>
    </>
  );
};
export default IconGrid;
