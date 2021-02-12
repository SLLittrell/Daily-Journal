/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry, moodObj) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
          <b> Date: ${entry.date}<br>Concept Covered: ${entry.concept}<br>
          Journal Entry: ${entry.entry}<br>
          Mood: ${moodObj.label}
        </section>
    `
}