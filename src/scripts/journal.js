document.querySelector("#submit-button").addEventListener("click", ()=>{

    const journalObject ={
    "Date": document.querySelector("#journalDate").value,
    "Concept": document.querySelector("#conceptsCovered").value,
    "Entry": document.querySelector("#journalEntry").value,
    "dailyMood": document.querySelector("#dailyMood").value

}

    API.postJournalEntries(journalObject)

    API.getJournalEntries().then(makeJournalEntryComponent)

console.log("you clicked")
})

// call the api function and make journal entries
API.getJournalEntries().then(makeJournalEntryComponent)

