import ButtonGrid from '@/components/grid/ButtonGrid';
import CheckboxGrid from '@/components/grid/CheckboxGrid';
import InputGrid from '@/components/grid/InputGrid';
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
      <ButtonGrid />
      <ListGrid />
      <InputGrid />
      <SelectGrid />
      <TextAreaGrid />
      <RangeControlGrid />
      <RadioControlGrid />
      <CheckboxGrid />
    </main>
  );
}
