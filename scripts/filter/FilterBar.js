// import { getEntries, useJournalEntries } from "../JournalDataProvider.js"
import { getMoods, useMoods } from "../MoodDataProvider.js"
import { MoodFilter } from "./MoodFilter.js"

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const contentTarget = document.querySelector(".filters")
// const eventHub = document.querySelector(".mainContainer")

export const FilterBar = () => {
  const render =() => {
        getMoods()
        .then (() => {
            const allMoods = useMoods()
            
            console.log(allMoods)
            contentTarget.innerHTML = `
                ${MoodFilter(allMoods)}
            `
        })
    }

    render()
}


// getMoods()
// .then(getEntries)
// .then(() => {
//     const moodArray = useMoods()
//     const entryArray = useJournalEntries()

//     render(moodArray, entryArray)
// })

// const render = (moodfilter, entryFilter) => {
//     const allJournalEntries = entryFilter.map(entry => {
//         const relatedMood = moodfilter.find(mood => mood.id === parseInt(entry.moodId))
//         return MoodFilter(entry, relatedMood)
//     }).join(" ")