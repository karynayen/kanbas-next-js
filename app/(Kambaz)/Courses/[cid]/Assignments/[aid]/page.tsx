"use client";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" defaultValue="The assignment is available online."></textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group" defaultValue="ASSIGNMENTS">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECTS">PROJECTS</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                  <option value="PERCENTAGE">Percentage</option>
                  <option value="DECIMAL">Decimal</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type" defaultValue="ONLINE">
                  <option value="ONLINE">Online</option>
                  <option value="INPERSON">In Person</option>
                </select>
                <br /><br />
                <label>Online Entry Options</label><br />
                <input type="checkbox" name="wd-online-entry-options" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" name="wd-online-entry-options" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label><br />
                <input type="checkbox" name="wd-online-entry-options" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" name="wd-online-entry-options" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" name="wd-online-entry-options" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label><br />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign">Assign</label>
              </td>
              <td>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                <input id="wd-assign-to" defaultValue="Everyone" />
                <br /> <br />
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input type="date" defaultValue="2024-05-13" id="wd-due-date" />
                <br /> <br />
                <table>
                  <tbody>
                    <tr>
                      <td align="left">
                        <label htmlFor="wd-available-from">Available from</label>
                      </td>
                      <td align="left">
                        <label htmlFor="wd-available-until">Until</label>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <input type="date" defaultValue="2024-05-06" id="wd-available-from" />
                      </td>
                      <td align="left">
                        <input type="date" defaultValue="2024-05-20" id="wd-available-until" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div style={{ textAlign: 'right' }}>
          <button id="wd-cancel">Cancel</button> <button id="wd-save">Save</button>
        </div>
      </div>
    );
}