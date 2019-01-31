// // 
//     Define the keys and value for a JavaScript object that
//     represents a journal entry about what you learned today
//     For now, we will provide an array.  Later we will pull from the form
// // 



//This will be used to add additional entries to the journal entry array when we are pulling from the form
// const journalEntryArray = [];
// journalEntryArray.push(journalEntryObject);


//go out to the web and get the journal entry components
fetch("http://localhost:3000/journalEntryArray") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(entries => {

        // console.log("this is a journal entry", entries);  
        let journalEntryString = makeJournalEntryComponent(entries)
        // console.log(journalEntryString)

        renderJournalEntries(journalEntryString)

    });


// // ********************************************************** // //
//     Functions Section!                                           //                        
//     Purpose: To create, and return, a string template that       //
//     represents a journal entry objects as HTML                   //                 
// // ********************************************************** // //

const makeJournalEntryComponent = (arrayInput) => {
    // Create your own HTML structure for a journal entry
    journalString = "";
    for (i = 0; i < arrayInput.length; i++) {
    // Build the html string for each individual entry
        buildString = `<h2>${arrayInput[i].Date}</h2>
    <h3>${arrayInput[i].Concept}</h3>
    <p>${arrayInput[i].Entry}</p>
    <p>Today I feel ${arrayInput[i].dailyMood}</p>
    <hr></hr>`

    //add the string from the current entry to the previous entries 
        journalString = `${journalString} ${buildString}`;
        console.log("This is the journal string", (i + 1), journalString);
    }
    return journalString;
}

// const journalEntries = makeJournalEntryComponent(journalEntryArray)
// console.log(journalEntries);

// test the html string
// document.querySelector(".entryLog").innerHTML=journalEntries
// Purpose: To render all journal entries to the DOM
// Arguments: entries (array of objects)

function renderJournalEntries(string) {
    document.querySelector(".entryLog").innerHTML = string;
    console.log("I am inside the function")
}
//  To test:
// renderJournalEntries(journalEntries);  
// This will automatically run both functions and print to the DOM




