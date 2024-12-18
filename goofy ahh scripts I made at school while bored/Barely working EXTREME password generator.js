function toHex(str) {
    return Array.from(str, (c) => c.charCodeAt(0).toString(16).padStart(4, '0')).join('');
}

function toAscii(variable) {
    let str = String(variable);
    let asciiString = '';
    
    for (let i = 0; i < str.length; i++) {
        let asciiCode = str.charCodeAt(i).toString().padStart(3, '0');
        asciiString += asciiCode;
    }
    
    return asciiString;
}

function unicodeToVariable(unicodeString) {
    let result = '';
    
    for (let i = 0; i < unicodeString.length; i += 4) {
        let unicodeCode = unicodeString.substring(i, i + 4);
        result += String.fromCodePoint(parseInt(unicodeCode, 16));
    }
    
    return result;
}

function alien() {
let Text = password


    const characters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = '';
        const charactersLength = characters2.length;
        for (let i = 0; i < length; i++) {
            result += characters2.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    Key = generateString(12);


Key = toHex(Key);
Text = toHex(Text);

Key = toAscii(Key);
Text = toAscii(Text);

let Output = Key + Text;

    Output = Output / Math.random()

    Output = toAscii(Output)

Output = unicodeToVariable(Output);

return Output
}


function passwordGenerator() {
characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBBNM1234567890-=!@#$%^&*()_+`~[]\\{}|;\':"./>?'
password = ''
for (var i = 0; i < originalLength; i++) {
password = password + characters.split('')[Math.floor((Math.random()*characters.split('').length))]
}
password = alien()
thing = password
function idk() {
for (var e = 0; e < repeatEncryption; e++) {
thing = password
password = alien()
}
}
for (var i = 0; i < originalLength; i++) {
password = password + thing + thing
idk()
password = password + thing + thing
}
    
return password
}

originalLength = 1
repeatEncryption = 5
passwordGenerator()

