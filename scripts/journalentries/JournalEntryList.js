/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "../JournalDataProvider.js"
import { getMoods, useMoods } from "../MoodDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")


export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(getMoods)
    .then ( () => {
        const entries = useJournalEntries()
        const moods = useMoods()
        render (entries, moods)
        
    })
    
}

const render = (entryObject, moodObject) => {
    const entryMoods = entryObject.map(entry => {
        const relatedMood = moodObject.find(mood => mood.id === parseInt(entry.moodId))
        return JournalEntryComponent(entry,relatedMood)
        
    })

    entryLog.innerHTML += `
        <div class="entryLog">
            ${entryMoods}
        </div>
    `
}
// let journalHTMLRep = ""
// for (const entry of entries) {
//     journalHTMLRep = JournalEntryComponent(entry)
//     /*
//         Invoke the component that returns an
//         HTML representation of a single entry
//     */
//     
// }