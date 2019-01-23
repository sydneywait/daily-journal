// // 
//     Define the keys and value for a JavaScript object that
//     represents a journal entry about what you learned today
// // 

const objectsJournalEntry = {
    Date: "1-23-19",
    Concept: "DOM query selectors",
    Entry: "Today we learned how to print to the DOM",
    dailyMood: "Happy :)"
}

console.log(objectsJournalEntry)
const journalEntryArray = [];
journalEntryArray.push("objectsJournalEntry");
console.log(journalEntryArray);

// // 
//     Purpose: To create, and return, a string template that
//     represents a single journal entry object as HTML

//     Arguments: journalEntry (object)
// // 
const makeJournalEntryComponent = (JournalEntry) => {
    // Create your own HTML structure for a journal entry

    return `<h2>${JournalEntry.Date}</h2>
    <h3>${JournalEntry.Concept}</h3>
    <p>${JournalEntry.Entry}</p>
    <p>Today I feel ${JournalEntry.dailyMood}</p>`

    }
const journalEntries = makeJournalEntryComponent(objectsJournalEntry)
console.log(journalEntries);

// test the html string
// document.querySelector(".entryLog").innerHTML=journalEntries
    // Purpose: To render all journal entries to the DOM
    // Arguments: entries (array of objects)

function renderJournalEntries(){
document.querySelector(".entryLog").innerHTML=journalEntries;
console.log("I am inside the function")
}
renderJournalEntries();




