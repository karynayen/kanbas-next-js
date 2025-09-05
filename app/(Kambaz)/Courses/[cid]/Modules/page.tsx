export default function Modules() {
    return (
      <div>
        <div id="wd-module-buttons">
          <button type="button" id="wd-collapse-all">Collapse All</button>
          &nbsp;
          <button type="button" id="wd-in-progress">In Progress</button>
          &nbsp;
          <select id="wd-select-one-genre" defaultValue="PUBLISH-ALL">
            <option value="PUBLISH-ALL">Publish All</option>
            <option value="PUBLISH-MOD-ITEMS">Publish All Modules and Items</option>
            <option value="PUBLISH-ONLY-MODULES">Publish Modules Only</option>
          </select>
          &nbsp;
          <button type="button" id="wd-plus-module">+ Module</button>
        </div>
  
        <ul id="wd-modules">
          {/* Week 1 */}
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
  
              {/* Lecture 1 */}
              <li className="wd-lesson">
                <span className="wd-title">Lecture 1 - Course Introduction, Syllabus, Agenda</span>
                <ul className="wd-content">
                  <li className="wd-content-item">LEARNING OBJECTIVES
                    <ul>
                      <li>Introduction to the course</li>
                      <li>Learn what is Web Development</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">READING
                    <ul>
                      <li>Full Stack Developer - Chapter 1 - Introduction</li>
                      <li>Full Stack Developer - Chapter 2 - Creating Us</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">SLIDES
                    <ul>
                      <li>Introduction to Web Development</li>
                      <li>Creating an HTTP server with Node.js</li>
                      <li>Creating a React Application</li>
                    </ul>
                  </li>
                </ul>
              </li>
  
              {/* Lecture 2 */}
              <li className="wd-lesson">
                <span className="wd-title">Lecture 2 - Formatting User Interfaces with HTML</span>
                <ul className="wd-content">
                  <li className="wd-content-item">LEARNING OBJECTIVES
                    <ul>
                      <li>Learn how to create user interfaces with HTML</li>
                      <li>Deploy the assignment to Netlify</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">SLIDES
                    <ul>
                      <li>Introduction to HTML and the DOM</li>
                      <li>Formatting Web content with Headings</li>
                      <li>Formatting content with Lists and Tables</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
  
          {/* Week 2 */}
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
  
              {/* Lecture 3 */}
              <li className="wd-lesson">
                <span className="wd-title">Lecture 3 - Styling with CSS</span>
                <ul className="wd-content">
                  <li className="wd-content-item">LEARNING OBJECTIVES
                    <ul>
                      <li>Understand the role of CSS in web development</li>
                      <li>Learn how to apply inline, internal, and external styles</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">READING
                    <ul>
                      <li>Full Stack Developer - Chapter 3 - Introduction to CSS</li>
                      <li>MDN Docs - CSS Basics</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">SLIDES
                    <ul>
                      <li>Selectors and Properties</li>
                      <li>Box Model and Layout</li>
                      <li>Using Flexbox for Page Structure</li>
                    </ul>
                  </li>
                </ul>
              </li>
  
              {/* Lecture 4 */}
              <li className="wd-lesson">
                <span className="wd-title">Lecture 4 - Responsive Design and Media Queries</span>
                <ul className="wd-content">
                  <li className="wd-content-item">LEARNING OBJECTIVES
                    <ul>
                      <li>Learn mobile-first design principles</li>
                      <li>Use media queries to adapt layouts</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">READING
                    <ul>
                      <li>Full Stack Developer - Chapter 4 - Responsive Web Design</li>
                      <li>CSS Tricks - Complete Guide to Flexbox</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">SLIDES
                    <ul>
                      <li>Mobile-First vs Desktop-First Approaches</li>
                      <li>Media Query Examples</li>
                      <li>Using Grid Layout for Complex Designs</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
  
          {/* Week 3 */}
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
  
              {/* Lecture 5 */}
              <li className="wd-lesson">
                <span className="wd-title">Lecture 5 - Introduction to JavaScript</span>
                <ul className="wd-content">
                  <li className="wd-content-item">LEARNING OBJECTIVES
                    <ul>
                      <li>Understand JavaScript syntax and data types</li>
                      <li>Write basic scripts to interact with web pages</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">READING
                    <ul>
                      <li>Full Stack Developer - Chapter 5 - JavaScript Basics</li>
                      <li>MDN Docs - JavaScript Guide</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">SLIDES
                    <ul>
                      <li>Variables and Operators</li>
                      <li>Functions and Scope</li>
                      <li>Event Handling Basics</li>
                    </ul>
                  </li>
                </ul>
              </li>
  
              {/* Lecture 6 */}
              <li className="wd-lesson">
                <span className="wd-title">Lecture 6 - DOM Manipulation with JavaScript</span>
                <ul className="wd-content">
                  <li className="wd-content-item">LEARNING OBJECTIVES
                    <ul>
                      <li>Learn how to access and modify the DOM with JavaScript</li>
                      <li>Respond to user interactions dynamically</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">READING
                    <ul>
                      <li>Full Stack Developer - Chapter 6 - Working with the DOM</li>
                      <li>MDN Docs - Document Object Model (DOM)</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">SLIDES
                    <ul>
                      <li>Selecting and Updating Elements</li>
                      <li>Creating and Removing Nodes</li>
                      <li>Handling Events and Listeners</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
  