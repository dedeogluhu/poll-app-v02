// let examplePost = {
//     header: '1-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
//     choices: [
//         'First choice',
//         'Second choice',
//         'Third choice',
//         'Fourth choice'
//     ],
//     date: new Date(2018, 11, 24, 10, 33, 30, 0)
// };
// let examplePost2 = {
//     header: '2-) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
//     choices: [
//         'First choice2',
//         'Second choice2',
//         'Third choice2',
//         'Fourth choice2'
//     ],
//     date: new Date(2017, 11, 24, 10, 33, 30, 0)
// };
// let examplePostList = [
//     examplePost,
//     examplePost2,
// ];
// examplePostList.sort((x, y) => {
//     return y.date - x.date;
// });


const choiceButtons = document.querySelectorAll('.choice');
const postListDiv = document.querySelector('#post-list');
let postList = [];
let postListHtml = '';

async function main() {
    await getPosts();
    setPosts(postList);
}

function changeColor(event) {
    event.classList.add('choice-selected');
}

async function getPosts() {
    await axios.get('/api/posts')
        .then(function (response) {
            for (let element of response.data) {
                postList.push(element);
                console.log(element);
            }
        })
        .catch(error => console.log(error));
}

function sortPosts(list) {
    list.sort((x, y) => {
        return y.date - x.date;
    });
}

function setPosts(list) {

    sortPosts(list);

    for (let post of list) {
        let choicesHtml = '';

        let postChoices = post.choices;

        if (postChoices.length > 4) {
            let extraCount = postChoices.length - 4
            postChoices[3] += ` and ${extraCount} more`;
        }

        for (let i = 0; i < 4; i++) {
            let choiceTemplate = `
            <button class="choice" onclick="changeColor(this)">
                <span class='choice-sign'>X</span>
                ${postChoices[i]}
            </button>
            `;
            choicesHtml += choiceTemplate;
        }

        let postHtml = `
        <div class="post">
            <p class="post-header">${post.question}</p>
            <div class="choice-list">
                ${choicesHtml}
            </div>
        </div>
        `;

        postListHtml += postHtml;
    }

    postListDiv.innerHTML = postListHtml;
}

main();