import { FC } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const ListGridRaw: FC = () => {
  return (
    <>
      <ul className="snes-list is-plumber-list-color">
        <li>Sorry, Mario</li>
        <li>But the Princess</li>
        <li>Is in another castle</li>
      </ul>
      <ul className="snes-list is-nature-list-color">
        <li>Ma'am, you're mistaken.</li>
        <li>I'm not a pet.</li>
        <li>I'm a Knight.</li>
        <li>And master swordsman.</li>
      </ul>
      <ul className="snes-list is-phantom-list-color">
        <li>Estuans interius</li>
        <li>Ira vehementi</li>
        <li>SEPHIROTH!</li>
      </ul>
      <ul className="snes-list is-ocean-list-color">
        <li>It's easy to forget</li>
        <li>what a sin is</li>
        <li>in the middle of a battlefield</li>
      </ul>
    </>
  );
};

const ListGridCode: FC = () => {
  return `
  <ul class="snes-list is-plumber-list-color">
    <li>Sorry, Mario</li>
    <li>But the Princess</li>
    <li>Is in another castle</li>
  </ul>
  <ul class="snes-list is-nature-list-color">
    <li>Ma'am, you're mistaken.</li>
    <li>I'm not a pet.</li>
    <li>I'm a Knight.</li>
    <li>And master swordsman.</li>
  </ul>
  <ul class="snes-list is-phantom-list-color">
    <li>Estuans interius</li>
    <li>Ira vehementi</li>
    <li>SEPHIROTH!</li>
  </ul>
  <ul class="snes-list is-ocean-list-color">
    <li>It's easy to forget</li>
    <li>what a sin is</li>
    <li>in the middle of a battlefield</li>
  </ul>
  `;
};

const ListGrid: FC = () => {
  return (
    <>
      <div className="snes-container has-secondary-purple-bg">
        <h3 className="snes-container-title has-phantom-underline">Lists</h3>
        <p>List icons can be of any of the main colors</p>
        <div id="lists" className="columns-grid">
          <ListGridRaw />
        </div>
        <CodeBlock language="html" code={<ListGridCode />}></CodeBlock>
      </div>
    </>
  );
};
export default ListGrid;
