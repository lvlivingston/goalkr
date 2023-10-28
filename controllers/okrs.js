const User = require('../models/user');
const Okr = require('../models/okr');
const Note = require('../models/note');

module.exports = {
// add exports here i.e. index, show, newOkr, create, delete
};

// render "Add OKR" view, including:
// Textbox to type in OKR (max 140 characters)
// Dropdown to choose which Objective or Key Result (i.e. Objective 1 - Key Result 3) (Should have options disappear as they are filled)
// Dropdown to choose Quarter & Year (i.e. Q4 - 2023)
// Calendar to add Due Date
// Progress not here, as automatically defaults to 0% to start (Option to update percentage in "Update OKR" page)
// Button to "Add to OKR List" (that adds OKR to list and redirects to "With OKRs" view)

// render "No OKRs" view of OKR page, includes:
// Static text with "You haven't set any OKRs yet"
// "Add OKR" icon/link (that redirects to "Add OKR" page)

// render "With OKRs" view of OKR page, includes:
// Table with 3 column (OKR, Date, Progress)
// Left column : OKR (Top line is Objective, with 3 bottom lines the Key Results in descending order)
// Middle column: Date (Top Line is the EOQ date, with 3 bottom lines the Key Results' due dates)
// Right column: Percentage progress (Top Line is the Objective's calculated percentage from average of bottom 3 lines)

// Below table, if no notes yet, render "No Notes" view, includes:
// Table with 3 column headers (Date (timestamp), Note, OKR)
// Below this, static text with "You haven't taken any notes yet"

// Below table, if there are notes, render "No Notes" view, includes:
// Table with 3 column headers (Date (timestamp), Note, OKR)
// Left column : Date (formatted as mm/dd/year)
// Middle column: Note
// Right column: O1 - KR2 (clickable to OKR detail page)

// ability to swipe screen left to see other 2 objectives (or click three bubbles at bottom of the screen)

// If user clicks on anywhere inside specific OKR field (i.e. from Line 1 Objective to Line 4 Key Result Three, a Due Date or % Progress)
// OR if user clicks on 3rd column of Note on OKR, redirects to OKR detail page

// render "OKR detail page" view with almost similar view as "With OKRs" 
// Unclickable view of OKRs, Dates & Progress
// Except remove "Time Period Title" and "Bubble Navigation" 
// Include "Edit OKR" button that redirects to "Update OKR" page

// render "Update OKR" view with almost similar view as "OKR detail page"
// All OKRs, Dates & Progress fields are prefilled with current information & ready to manually change
// Except remove "Edit OKR" button 
// Include "Delete OKR" button on left (1/3 of view)
// Include "Save Updated OKR" button on right (2/3 of view)
// after clicking either button, redirects to "OKR view"
