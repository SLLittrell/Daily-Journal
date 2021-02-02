/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
          <b> ${entry.date}</b><br>${entry.concept}</br> <br>${entry.entry}</br> <br>${entry.mood}</br>
        </section>
    `
}