import { FC } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';
import Link from 'next/link';

const LinkGridRaw: FC = () => {
  return (
    <>
      <Link href="#" className="snes-link">
        New Game
      </Link>
      <Link href="#" className="snes-link text-ocean-color has-ember-underline">
        Continue
      </Link>
      <Link href="#" className="snes-link text-nature-color has-rose-underline">
        Load
      </Link>
      <Link
        href="#"
        className="snes-link text-phantom-color has-turquoise-underline"
      >
        Gallery
      </Link>
      <Link
        href="#"
        className="snes-link text-plumber-color has-sunshine-underline"
      >
        Exit
      </Link>
    </>
  );
};

const LinkGridCode: FC = () => {
  return `
  <a href="#" class="snes-link">Normal</a>
  <a href="#" class="snes-link text-nature-color">Nature</a>
  <a href="#" class="snes-link text-plumber-color">Plumber</a>
  <a href="#" class="snes-link text-sunshine-color">Sunshine</a>
  <a href="#" class="snes-link text-ocean-color">Ocean</a>
  <a href="#" class="snes-link text-turquoise-color">Turquoise</a>
  <a href="#" class="snes-link text-phantom-color">Phantom</a>
  <a href="#" class="snes-link text-rose-color">Rose</a>
  <a href="#" class="snes-link text-galaxy-color">Galaxy</a>
  <a href="#" class="snes-link text-ember-color">Ember</a>
  `;
};

const LinkGrid: FC = () => {
  return (
    <>
      <div className="snes-container has-soft-green-bg">
        <h3 className="snes-container-title has-nature-underline">Links</h3>
        <p>
          Links can have any of the main colors with different underline color
        </p>
        <div id="links" className="item-grid">
          <LinkGridRaw />
        </div>
        <CodeBlock language="html" code={<LinkGridCode />}></CodeBlock>
      </div>
    </>
  );
};
export default LinkGrid;
