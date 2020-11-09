let examplePost = {
    header: '1-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'First choice',
        'Second choice',
        'Third choice',
        'Fourth choice'
    ],
    date: new Date(2018, 11, 24, 10, 33, 30, 0)
};

let examplePost2 = {
    header: '2-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'First choice2',
        'Second choice2',
        'Third choice2',
        'Fourth choice2'
    ],
    date: new Date(2017, 11, 24, 10, 33, 30, 0)
};

let examplePost3 = {
    header: '3-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'First choice3',
        'Second choice3',
        'Third choice3',
        'Fourth choice3'
    ],
    date: new Date(2019, 11, 24, 10, 33, 30, 0)
};

let examplePost4 = {
    header: '4-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'First choice4',
        'Second choice4',
        'Third choice4',
        'Fourth choice4',
        'Fifth choice4',
        'Sixth choice4',
    ],
    date: Date.now()
};

let examplePostList = [
    examplePost,
    examplePost2,
    examplePost3,
    examplePost4
];

examplePostList.sort((x, y) => {
    return y.date - x.date;
});

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