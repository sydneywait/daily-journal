

const API = {
    getJournalEntries: ()=> {
return fetch("http://localhost:3000/journalEntryArray") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    
    }
    
    }