/*
 *   Journal data provider for Daily Journal application
 *
 *      fetches the api data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const eventHub = document.querySelector(".mainContainer")


const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

// Use `fetch` with the POST method to add your entry to your API
export const saveJournalEntry = (newJournalEntry) => {

    return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(getEntries)// <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
         
        
}

 // use fetch() to get data from API
let journalEntry = []



export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(entries => {
        journalEntry = entries
    })
}
// debugger
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journalEntry.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}