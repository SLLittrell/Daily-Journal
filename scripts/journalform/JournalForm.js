const formContainer = document.querySelector(".formContainer")


export const JournalForm = () => {
return formContainer.innerHTML =
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
    <input type="radio" id="Amazing" name="mood" value="Amazing">
    <label for="Amazing">Amazing</label>
    <input type="radio" id="Good" name="mood" value="Good">
    <label for="Good">Good</label>
    <input type="radio" id="Okay" name="mood" value="Okay">
    <label for="Okay">Okay</label>
    <input type="radio" id="Awful" name="mood" value="Awful">
    <label for="Awful">Taylor Swift after a breakup</label>
    </div>
    </fieldset>
    <input type="submit" class="submitbutton" id="record" value="Submit Journal Entry">
    </form>`
}

