/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry, moodObj, instructorObj) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
          <b> Date: ${entry.date}<br>
          Instructor: ${instructorObj.first_name}<br>
          Concept Covered: ${entry.concept}<br>
          Journal Entry: ${entry.entry}<br>
          Mood: ${moodObj.label}<br>
          <button id="deleteEntry--${entry.id}">Delete</button>
        </section><br>
    `
}

