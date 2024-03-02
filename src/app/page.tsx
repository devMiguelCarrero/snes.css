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

export default function Home() {
  return (
    <main className="main-container">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque est
        officia, temporibus at obcaecati nulla aliquid officiis eaque? Hic
        veritatis vero laboriosam consequuntur, laborum enim tempore ad
        aspernatur? Culpa, sed!
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
