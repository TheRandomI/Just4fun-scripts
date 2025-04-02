// Generates every possible combination of letters writeable on a 8 digit calculator

num = 11111111
str = ''
word = ''

for (var i = 0; num < 44444445; i++) {
    str = num.toString()
    word = ''
    
    if (str.includes('0') || str.includes('5') || str.includes('6') || str.includes('7') || str.includes('8') || str.includes('9')) {

    } else {
        word = str.replace(/1/g, 'a');
        word = word.replace(/2/g, 'b');
        word = word.replace(/3/g, 'c');
        word = word.replace(/4/g, 'd');
        console.log(word)
    }

    num = num + 1
}

