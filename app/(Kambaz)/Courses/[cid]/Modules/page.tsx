export default function Modules() {
    return (
      <div>
        <div id="wd-module-buttons">
            <button type="button"
                    id="wd-collapse-all">Collapse All</button>
            &nbsp;
            <button type="button"
                    id="wd-in-progress">In Progress</button>
            &nbsp;
            <select id="wd-select-one-genre">
                <option selected value="PUBLISH-ALL">Publish All</option>
                <option value="PUBLISH-MOD-ITEMS">Publish All Modules and Items</option>
                <option value="PUBLISH-ONLY-MODULES">Publish Modules Only</option>
            </select>
            &nbsp;
            <button type="button"
                    id="wd-plus-module">+ Module</button>
        </div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
          </li>
        </ul>
      </div>
  );}
  