const makeJournalEntryComponent = (arrayInput) => {
        // Create your own HTML structure for a journal entry
        journalString = "";
        arrayInput.forEach(function(element) { 
        // Build the html string for each individual entry
            buildString = `<h2>${element.Date}</h2>
        <h3>${element.Concept}</h3>
        <p>${element.Entry}</p>
        <p>Today I feel ${element.dailyMood}</p>
        <hr></hr>`
    
        //add the string from the current entry to the previous entries 
            journalString = `${journalString} ${buildString}`;
            // console.log("This is the journal string", (i + 1), journalString);
        
    })
    renderJournalEntries(journalString)    
    
    }