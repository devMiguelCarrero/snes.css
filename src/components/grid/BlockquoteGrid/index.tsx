import { FC } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

const BlockquoteGridRaw: FC = () => {
  return (
    <>
      <blockquote className="snes-blockquote">
        <p>Papers, please!</p>
      </blockquote>
      <blockquote className="snes-blockquote has-plumber-bg">
        <p>What is a man? A miserable little pile of secrets.</p>
      </blockquote>
      <blockquote className="snes-blockquote has-phantom-bg">
        <p>
          Once something's alive... it doesn't die easy... You have to bury
          every last cinder!
        </p>
      </blockquote>
      <blockquote className="snes-blockquote has-ember-bg">
        <p>No gods or kings. Only man.</p>
      </blockquote>
    </>
  );
};

const BlockquoteGridCode: FC = () => {
  return `
  <blockquote class="snes-blockquote">
    <p>Papers, please!</p>
  </blockquote>
  <blockquote class="snes-blockquote has-plumber-bg">
    <p>What is a man? A miserable little pile of secrets.</p>
  </blockquote>
  <blockquote class="snes-blockquote has-phantom-bg">
    <p>
      Once something's alive... it doesn't die easy... You have to bury
      every last cinder!
    </p>
  </blockquote>
  <blockquote class="snes-blockquote has-ember-bg">
    <p>No gods or kings. Only man.</p>
  </blockquote>
  `;
};

const BlockquoteGrid: FC = () => {
  return (
    <>
      <div className="snes-container has-white-bg">
        <h3 className="snes-container-title has-turquoise-underline">
          Blockquotes
        </h3>
        <p>
          Blockquotes can have a background color with a darker version of every
          main color
        </p>
        <div id="texts" className="item-grid">
          <BlockquoteGridRaw />
        </div>
        <CodeBlock language="html" code={<BlockquoteGridCode />}></CodeBlock>
      </div>
    </>
  );
};
export default BlockquoteGrid;
