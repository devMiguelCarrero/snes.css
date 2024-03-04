import BlockquoteGrid from '@/components/grid/BlockquoteGrid';
import ButtonGrid from '@/components/grid/ButtonGrid';
import CheckboxGrid from '@/components/grid/CheckboxGrid';
import InputGrid from '@/components/grid/InputGrid';
import LinkGrid from '@/components/grid/LinkGrid';
import ListGrid from '@/components/grid/ListGrid';
import RadioControlGrid from '@/components/grid/RadioControlGrid';
import RangeControlGrid from '@/components/grid/RangeGrid';
import SelectGrid from '@/components/grid/SelectGrid';
import TextAreaGrid from '@/components/grid/TextAreaGrid';
import TextGrid from '@/components/grid/TextGrid';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-container">
      <h1 className="snes-container-title has-plumber-underline">SNES.CSS</h1>
      <p>
        SNES.CSS is a css framework inspired in the 90's 16bit videogames,
        bringing a nostalgin pixel art style and taking a high learning and
        inspiration from B.C.Rikko's framework: nes.css.
      </p>
      <h2 className="snes-container-title has-phantom-underline">
        Installation
      </h2>
      <p>
        You can install SNES.CSS via npm or directly via CDN. Please, read the
        complete instructions{' '}
        <Link
          target="_blank"
          className="snes-link text-phantom-color has-plumber-underline"
          href="https://github.com/devMiguelCarrero/snes.css"
        >
          here
        </Link>
        .
      </p>
      <h2 className="snes-container-title has-ocean-underline">Details</h2>
      <p>
        <span className="text-ember-color">
          This framework doesn't provides layout styles or javascript code
        </span>
        , this makes it a nice fit with modern frameworks integrations such as
        React.js or Tailwind.
      </p>
      <TextGrid />
      <LinkGrid />
      <ButtonGrid />
      <ListGrid />
      <InputGrid />
      <SelectGrid />
      <TextAreaGrid />
      <RangeControlGrid />
      <RadioControlGrid />
      <CheckboxGrid />
      <BlockquoteGrid />
    </main>
  );
}
