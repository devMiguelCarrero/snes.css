export default function Home() {
  return (
    <main className="main-container">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque est
        officia, temporibus at obcaecati nulla aliquid officiis eaque? Hic
        veritatis vero laboriosam consequuntur, laborum enim tempore ad
        aspernatur? Culpa, sed!
      </p>
      <div className="snes-container has-white-bg">
        <h3 className="snes-container-title has-nature-underline">Texts</h3>
        <div id="buttons" className="item-grid">
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
        </div>
      </div>
      <div className="snes-container has-aged-yellow-bg">
        <h3 className="snes-container-title">Buttons</h3>
        <div id="buttons" className="item-grid code-grid">
          <button className="snes-button">Nature</button>
          <button className="snes-button has-plumber-color">Plumber</button>
          <button className="snes-button has-sunshine-color">Sunshine</button>
          <button className="snes-button has-ocean-color">Ocean</button>
          <button className="snes-button has-turquoise-color">Turquoise</button>
          <button className="snes-button has-phantom-color">Phantom</button>
          <button className="snes-button has-rose-color">Rose</button>
          <button className="snes-button has-galaxy-color">Galaxy</button>
          <button className="snes-button has-ember-color">Ember</button>
        </div>
      </div>
      <div className="snes-container has-secondary-purple-bg">
        <h3 className="snes-container-title has-phantom-underline">Lists</h3>
        <p>List icons can be of any of the main colors</p>
        <div id="lists" className="columns-grid">
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
        </div>
      </div>
      <div className="snes-container has-grey-bg">
        <h3 className="snes-container-title has-ocean-underline">Inputs</h3>
        <div className="snes-form-group">
          <label>Input Text</label>
          <div className="snes-input">
            <input type="text" value="" placeholder="Input text" />
          </div>
        </div>
        <div className="snes-form-group">
          <label>Success Input</label>
          <div className="snes-input is-success">
            <input
              type="text"
              value="This input has a correct value"
              placeholder="Input text"
            />
          </div>
        </div>
        <div className="snes-form-group">
          <label>Warned Input</label>
          <div className="snes-input is-warning">
            <input
              type="text"
              value="This input has a warned value"
              placeholder="Input text"
            />
          </div>
        </div>
        <div className="snes-form-group">
          <label>Error Input</label>
          <div className="snes-input is-error">
            <input
              type="text"
              value="This input has a incorrect value"
              placeholder="Input text"
            />
          </div>
        </div>
        <div className="snes-form-group">
          <label>Date input</label>
          <div className="snes-input">
            <input type="date" />
          </div>
        </div>
      </div>
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
