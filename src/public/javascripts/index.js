let examplePost = {
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice',
        'second choice',
        'third choice',
        'fourth choice'
    ]
};

let examplePost2 = {
    header: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice2',
        'second choice2',
        'third choice2',
        'fourth choice2'
    ]
};

let examplePost3 = {
    header: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice3',
        'second choice3',
        'third choice3',
        'fourth choice3'
    ]
};

let examplePost4 = {
    header: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    choices: [
        'first choice4',
        'second choice4',
        'third choice4',
        'fourth choice4'
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

    for (let choice of example.choices) {
        let choiceTemplate = `
    <button class="choice">
        <span class='choice-sign'>X</span>
        ${choice}
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