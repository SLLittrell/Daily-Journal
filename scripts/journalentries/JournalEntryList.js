/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getInstructor, useInstructor } from "../instructorDataProvider.js"
import { getEntries, useJournalEntries } from "../JournalDataProvider.js"
import { getMoods, useMoods } from "../MoodDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")


export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(getMoods)
    .then(getInstructor)
    .then ( () => {
        const entries = useJournalEntries()
        const moods = useMoods()
        const instructor = useInstructor()
        render (entries, moods, instructor)
    })
    
}

const render = (entryObject, moodObject, insructorObject) => {
    const entryMoods = entryObject.map(entry => {
        const relatedMood = moodObject.find(mood => mood.id === parseInt(entry.moodId))
        const relatedInstructor = insructorObject.find(teach => teach.id === parseInt(entry.instructorId))
        return JournalEntryComponent(entry, relatedMood, relatedInstructor)
        
    }).join(" ")

    entryLog.innerHTML += `
        <div class="entryLog">
            ${entryMoods}
        </div>
    `
}
