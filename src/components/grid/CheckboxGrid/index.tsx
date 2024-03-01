'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import CodeBlock from '@/components/utilities/CodeBlock';

type CheckBoxSelect = {
  [key: string]: boolean;
};

const CheckboxGridRaw: FC = () => {
  const [learnedSongs, setLearnedSongs] = useState<CheckBoxSelect>({
    minuetOfForest: true,
    boleroOfFire: true,
    serenadeOfWater: false,
    nocturneOfShadow: false,
    requiemOfSpirit: false,
  });
  const [archetype, setArchetype] = useState<CheckBoxSelect>({
    shoto: true,
    rushdown: false,
    grappler: false,
  });

  const handleLearnedSongs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setLearnedSongs((prev: CheckBoxSelect) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleArchetypes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setArchetype((prev: CheckBoxSelect) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className="snes-form-group">
        <label>LEARNED WARP SONGS</label>
        <div className="snes-checkbox snes-checkbox--vertical">
          <label className="snes-checkbox__item has-nature-icon">
            <input
              type="checkbox"
              name="minuetOfForest"
              checked={learnedSongs.minuetOfForest}
              onChange={handleLearnedSongs}
            />
            <span className="snes-checkbox__item__content">
              Minuet of Forest
            </span>
          </label>
          <label className="snes-checkbox__item has-ember-icon">
            <input
              type="checkbox"
              name="boleroOfFire"
              checked={learnedSongs.boleroOfFire}
              onChange={handleLearnedSongs}
            />
            <span className="snes-checkbox__item__content">Bolero of Fire</span>
          </label>
          <label className="snes-checkbox__item has-ocean-icon">
            <input
              type="checkbox"
              name="serenadeOfWater"
              checked={learnedSongs.serenadeOfWater}
              onChange={handleLearnedSongs}
            />
            <span className="snes-checkbox__item__content">
              Serenade of water
            </span>
          </label>
          <label className="snes-checkbox__item has-galaxy-icon">
            <input
              type="checkbox"
              name="nocturneOfShadow"
              checked={learnedSongs.nocturneOfShadow}
              onChange={handleLearnedSongs}
            />
            <span className="snes-checkbox__item__content">
              Nocturne of Shadow
            </span>
          </label>
          <label className="snes-checkbox__item has-sunshine-icon">
            <input
              type="checkbox"
              name="requiemOfSpirit"
              checked={learnedSongs.requiemOfSpirit}
              onChange={handleLearnedSongs}
            />
            <span className="snes-checkbox__item__content">
              Requiem of Spirit
            </span>
          </label>
        </div>
      </div>
      <div className="snes-form-group">
        <label>select archetypes you like</label>
        <div className="snes-checkbox has-plumber-icons">
          <label className="snes-checkbox__item">
            <input
              type="checkbox"
              name="shoto"
              checked={archetype.shoto}
              onChange={handleArchetypes}
            />
            <span className="snes-checkbox__item__content">Shoto</span>
          </label>

          <label className="snes-checkbox__item">
            <input
              type="checkbox"
              name="rushdown"
              checked={archetype.rushdown}
              onChange={handleArchetypes}
            />
            <span className="snes-checkbox__item__content">Rushdown</span>
          </label>

          <label className="snes-checkbox__item">
            <input
              type="checkbox"
              name="grappler"
              checked={archetype.grappler}
              onChange={handleArchetypes}
            />
            <span className="snes-checkbox__item__content">Grappler</span>
          </label>
        </div>
      </div>
    </>
  );
};

const CheckboxGridCode = () => {
  return `
  <div className="snes-form-group">
    <label>LEARNED WARP SONGS</label>
    <div className="snes-checkbox snes-checkbox--vertical">
      <label className="snes-checkbox__item has-nature-icon">
        <input
          type="checkbox"
          name="warp-songs"
          value="minuet-of-forest"
          checked
        />
        <span className="snes-checkbox__item__content">
          Minuet of Forest
        </span>
      </label>
      <label className="snes-checkbox__item has-ember-icon">
        <input
          type="checkbox"
          name="warp-songs"
          value="bolero-of-fire"
          checked
        />
        <span className="snes-checkbox__item__content">
          Bolero of Fire
        </span>
      </label>
      <label className="snes-checkbox__item has-ocean-icon">
        <input
          type="checkbox"
          name="warp-songs"
          value="serenade-of-water"
        />
        <span className="snes-checkbox__item__content">
          Serenade of water
        </span>
      </label>
      <label className="snes-checkbox__item has-galaxy-icon">
        <input
          type="checkbox"
          name="warp-songs"
          value="nocturne-of-shadow"
        />
        <span className="snes-checkbox__item__content">
          Nocturne of Shadow
        </span>
      </label>
      <label className="snes-checkbox__item has-sunshine-icon">
        <input
          type="checkbox"
          name="warp-songs"
          value="requiem-of-spirits"
        />
        <span className="snes-checkbox__item__content">
          Requiem of Spirit
        </span>
      </label>
    </div>
  </div>
  <div className="snes-form-group">
    <label>select archetypes you like</label>
    <div className="snes-checkbox has-plumber-icons">
      <label className="snes-checkbox__item">
        <input type="checkbox" name="archetype" value="shoto" checked />
        <span className="snes-checkbox__item__content">Shoto</span>
      </label>
      <label className="snes-checkbox__item">
        <input type="checkbox" name="archetype" value="rushdown" />
        <span className="snes-checkbox__item__content">Rushdown</span>
      </label>
      <label className="snes-checkbox__item">
        <input type="checkbox" name="archetype" value="grappler" />
        <span className="snes-checkbox__item__content">Grappler</span>
      </label>
    </div>
  </div>
  `;
};

const CheckboxGrid: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="snes-container has-secondary-purple-bg">
        <h3 className="snes-container-title has-sunshine-underline">
          Checkboxes
        </h3>
        <p>
          The checkbox icon colors can be selected individually or as a group
        </p>
        <div id="checkboxes" className="columns-grid">
          <CheckboxGridRaw />
        </div>
        {isClient && (
          <CodeBlock language="html" code={<CheckboxGridCode />}></CodeBlock>
        )}
      </div>
    </>
  );
};
export default CheckboxGrid;
