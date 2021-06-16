const chalk = require('chalk');
const readline = require("readline");
const date = new Date()
const data = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}, jest godzina ${date.getHours()}:${date.getMinutes()}`

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.green('App started!'));

rl.question(`Jak się nazywasz? `, function(name){
    // rl.question('W jakim mieście mieszkasz ', function(city){})

    console.log(chalk.bgGray(`Cześć ${name}!`));
    console.log(chalk.blueBright(`Mamy dziś ${data}`));
    
    setInterval(() => {
        console.clear()

        const date = new Date()
        const dataNow = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}, jest godzina ${date.getHours()}:${date.getMinutes()}`

        console.log(chalk.bgGray(`Cześć ${name}!`));
        console.log(chalk.blueBright(`Mamy dziś ${dataNow}`));
    }, 5000);
})