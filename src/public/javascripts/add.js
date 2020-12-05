const addForm = document.querySelector('#add-form');
const addQuestionInput = document.querySelector('#add-question');
const addChoicesInput = document.querySelector('#add-choice');
const addChoiceButton = document.querySelector('#add-choice-button');
const addPostButton = document.querySelector('#add-post');
const choicesDiv = document.querySelector('#add-choice-list');
let choicesArray = [];

addForm.addEventListener('submit', (e) => { return preventDefault(e) });
addChoiceButton.addEventListener('click', addChoice);
addPostButton.addEventListener('click', sendPost);

function addChoice() {
    let choice = addChoicesInput.value;
    choiceObject = {
        text: choice,
        voteCount: 0
    };
    choicesArray.push(choiceObject);

    if (!choice) { addChoicesInput.focus(); return; }

    let choiceElement = `
        <span class="add-choice-list-item">
            ${choice}
            <a onclick="alert('deleted')" href="#">X</a>
        </span>
        `;

    choicesDiv.innerHTML += choiceElement;

    addChoicesInput.value = "";
    addChoicesInput.focus();
}

async function sendPost() {
    await axios.post('/api/posts', {
        question: addQuestionInput.value,
        choices: choicesArray
    })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

    addQuestionInput.value = '';
    choicesDiv.innerHTML = '';
    choicesArray = [];
}

