import {EntryListComponent} from './JournalEntryList.js'

EntryListComponent()

import {getEntries} from "./JournalDataProvider.js"



// useJournalEntry()
// console.log('useJournalEntry: ', useJournalEntry);

const entryArray = getEntries()
console.log('getEntries: ', entryArray);
