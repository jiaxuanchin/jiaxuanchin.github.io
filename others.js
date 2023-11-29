let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely","You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes","Don't count on it", "My reply is no","My sources say no", "Outlook not so good","Very doubtful", "Unsure, try again", "Ask again later", "Better not tell you now","Cannot predict now", "Concentrate and ask again", "Reply hazy, try again"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function displayAns() {
    let question = document.getElementById('question').value
    let ans = document.getElementById('answer')
    if (question.trim().length == 0) {
        ans.textContent = 'Please ask a question'
    }
    else {
        let num = getRandomInt(0,20);
        ans.textContent = answers[num]
        document.getElementById('question').value = ""
    }
}