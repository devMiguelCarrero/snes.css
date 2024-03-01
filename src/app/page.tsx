import ButtonGrid from '@/components/grid/ButtonGrid';
import InputGrid from '@/components/grid/InputGrid';
import ListGrid from '@/components/grid/ListGrid';
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
      <div className="snes-container has-white-bg">
        <h3 className="snes-container-title has-ember-underline">Selects</h3>
        <div className="snes-form-group">
          <label>Select</label>
          <div className="snes-input">
            <select className="snes-input">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="snes-container has-aged-yellow-bg">
        <h3 className="snes-container-title has-rose-underline">Textareas</h3>
        <div className="snes-form-group">
          <label>Textarea</label>
          <div className="snes-input">
            <textarea></textarea>
          </div>
        </div>
      </div>
      <div className="snes-container has-grey-bg">
        <h3 className="snes-container-title has-galaxy-underline">
          Range controls
        </h3>
        <p>
          Range tracks can have of any of the main colors and range thumbs can
          have any of the background colors
        </p>
        <div id="ranges" className="columns-grid">
          <div className="grid-item">
            <input
              type="range"
              className="snes-range has-soft-green-thumb"
              min="0"
              max="100"
            />
          </div>
          <div className="grid-item">
            <input
              type="range"
              className="snes-range has-ocean-bg"
              min="0"
              max="100"
            />
          </div>
          <div className="grid-item">
            <input
              type="range"
              className="snes-range has-secondary-purple-thumb has-galaxy-bg"
              min="0"
              max="100"
            />
          </div>
          <div className="grid-item">
            <input
              type="range"
              className="snes-range has-aged-yellow-thumb has-ember-bg"
              min="0"
              max="100"
            />
          </div>
          <div className="grid-item">
            <input
              type="range"
              className="snes-range has-white-thumb has-turquoise-bg"
              min="0"
              max="100"
            />
          </div>
          <div className="grid-item">
            <input
              type="range"
              className="snes-range has-soft-green-thumb has-nature-bg"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>
      <div className="snes-container has-soft-green-bg">
        <h3 className="snes-container-title has-plumber-underline">
          Radio controls
        </h3>
        <p>
          The Radio control icon colors can be selected individually or as a
          group
        </p>
        <div id="radios" className="columns-grid has-3-cols">
          <div className="snes-form-group">
            <label>CONTINUE?</label>
            <div className="snes-radio">
              <label className="snes-radio__item">
                <input type="radio" name="continue" value="yes" checked />
                <span className="snes-radio__item__content">yes</span>
              </label>
              <label className="snes-radio__item has-plumber-icon">
                <input type="radio" name="continue" value="no" />
                <span className="snes-radio__item__content">NO</span>
              </label>
            </div>
          </div>
          <div className="snes-form-group">
            <label>STARTING CLASS</label>
            <div className="snes-radio snes-radio--vertical has-ember-icons">
              <label className="snes-radio__item">
                <input type="radio" name="class" value="warrior" checked />
                <span className="snes-radio__item__content">warrior</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="Knight" />
                <span className="snes-radio__item__content">Knight</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="wanderer" />
                <span className="snes-radio__item__content">wanderer</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="thief" />
                <span className="snes-radio__item__content">thief</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="bandit" />
                <span className="snes-radio__item__content">bandit</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="hunter" />
                <span className="snes-radio__item__content">hunter</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="hunter" />
                <span className="snes-radio__item__content">sorecerer</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="hunter" />
                <span className="snes-radio__item__content">pyromancer</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="hunter" />
                <span className="snes-radio__item__content">cleric</span>
              </label>
              <label className="snes-radio__item">
                <input type="radio" name="class" value="hunter" />
                <span className="snes-radio__item__content">deprived</span>
              </label>
            </div>
          </div>
          <div className="snes-form-group">
            <label>SELECT DIFICULTY</label>
            <div className="snes-radio snes-radio--vertical">
              <label className="snes-radio__item has-turquoise-icon">
                <input type="radio" name="dificulty" value="easiest" checked />
                <span className="snes-radio__item__content">easiest</span>
              </label>
              <label className="snes-radio__item has-nature-icon">
                <input type="radio" name="dificulty" value="easy" />
                <span className="snes-radio__item__content">easy</span>
              </label>
              <label className="snes-radio__item has-galaxy-icon">
                <input type="radio" name="dificulty" value="balanced" />
                <span className="snes-radio__item__content">balanced</span>
              </label>
              <label className="snes-radio__item has-ember-icon">
                <input type="radio" name="dificulty" value="hard" />
                <span className="snes-radio__item__content">hard</span>
              </label>
              <label className="snes-radio__item has-plumber-icon">
                <input type="radio" name="dificulty" value="easy" />
                <span className="snes-radio__item__content">very hard</span>
              </label>
              <label className="snes-radio__item has-phantom-icon">
                <input type="radio" name="dificulty" value="easy" />
                <span className="snes-radio__item__content">god of war</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="snes-container has-secondary-purple-bg">
        <h3 className="snes-container-title has-sunshine-underline">
          Checkboxes
        </h3>
        <p>
          The checkbox icon colors can be selected individually or as a group
        </p>
        <div className="columns-grid">
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
        </div>
      </div>
    </main>
  );
}
