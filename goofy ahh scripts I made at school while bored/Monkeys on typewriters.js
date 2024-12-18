function monkey() {
    typed = goal.split('')
    typed.shift()
    typed.push('ii')
    
    let startTime = Date.now();
    
    let time = 0;
    while (typed.join('') !== goal) {
        typed.shift();
        typed.push(characters[Math.floor(Math.random() * characters.length)]);  
        time++;
    }

    let endTime = Date.now();
    let elapsedTime = (endTime - startTime) / 1000;

    console.log("Goal reached:", typed.join(''));
    console.log('It took ' + time + ' cycles');
    if (elapsedTime.toFixed(2) < 60) {
    console.log('It took ' + elapsedTime.toFixed(2) + ' seconds');
    } else {
    console.log('It took ' + elapsedTime.toFixed(2)/60 + ' minutes');
    }
}

let characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM12345678901234567890-=!@#$%^&*()_+[]\\{}|;\':",./<>?';
characters = characters.split('');  
const goal = 'the entire works of Shakespeare.'; 

monkey();

