let examplePost = {
    header: '1-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice',
        'second choice',
        'third choice',
        'fourth choice'
    ]
};

let examplePost2 = {
    header: '2-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice2',
        'second choice2',
        'third choice2',
        'fourth choice2'
    ]
};

let examplePost3 = {
    header: '3-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice3',
        'second choice3',
        'third choice3',
        'fourth choice3'
    ]
};

let examplePost4 = {
    header: '4-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice4',
        'second choice4',
        'third choice4',
        'fourth choice4',
        'fifth choice4',
        'sixth choice4',
    ]
};

let examplePostList = [
    examplePost,
    examplePost2,
    examplePost3,
    examplePost4
];

let postList = '';

for (let example of examplePostList) {
    let choices = '';

    let exampleChoices = example.choices;

    if (exampleChoices.length > 4) {
        let extraCount = exampleChoices.length - 4
        exampleChoices[3] += ` and ${extraCount} more`;
    }

    for (let i = 0; i < 4; i++) {
        let choiceTemplate = `
            <button class="choice">
                <span class='choice-sign'>X</span>
                ${exampleChoices[i]}
            </button>
        `;
        choices += choiceTemplate;
    }

    let post = `
    <div class="post">
        <p class="post-header">${example.header}</p>
        <div class="choice-list">
            ${choices}
        </div>
    </div>
`;

    postList += post;
}



document.querySelector('#post-list').innerHTML = postList;