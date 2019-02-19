

const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:8088/journalEntryArray") // Fetch from the API
            .then(entries => entries.json())  // Parse as JSON

    },

    postJournalEntries: (journalObject) => {
        fetch("http://localhost:8088/journalEntryArray", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(journalObject)
        })

    }
}

