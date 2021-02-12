import { saveJournalEntry } from "../JournalDataProvider.js";
import { getMoods, useMoods} from "../MoodDataProvider.js";

const formContainer = document.querySelector(".formContainer")


export const JournalForm = () => {
    getMoods()
        .then(()=>{
            const moodArray = useMoods()
formContainer.innerHTML =
    `<form class="formContainer__form">
    <fieldset class="dateInput">
    <label for="eDate">Date</label>
    <input type="date" id="eDate" name="entryDate">
    </fieldset>
    <fieldset class="conceptInput">
    <label for="concept">Concepts Covered</label>
    <input type="text" id="concept" name="concept" required>
    </fieldset>
    <fieldset class="journalInput"> 
    <label for="Journal">Journal Entry</label>
    <textarea name="jEntry" id="Journal" value="Journal Entry"></textarea>
    </fieldset>
    <fieldset class="moods">
    <div>
    <p>My mood today is...</p>
    <select class="dropdown" id="MoodSelect">
    <option value="0">Mood</option>
    ${moodArray.map(mood => 
        `<option value="${mood.id}">${mood.label}</option>`)}
    </select>
    </div>
    </fieldset>
    <input type="submit" class="submitbutton" id="record" value="Submit Journal Entry">
    </form>`
    })
}

const eventHub = document.querySelector(".mainContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "record") {
        clickEvent.preventDefault()
        // console.log ("click happened")
    // debugger
        // Make a new object representation of a note
        const newEntry = {
            // Key/value pairs here
                date:document.querySelector("#eDate").value,
                concept:document.querySelector("#concept").value,
                entry: document.querySelector("#Journal").value,
                moodId: document.querySelector("#MoodSelect").value
            }


        // Change API state and application state
        saveJournalEntry(newEntry)
    }
})
