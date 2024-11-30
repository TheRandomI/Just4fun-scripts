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

let Text = window.prompt("Enter the message to encrypt:", "");
let Key = window.prompt("Enter an encryption key, leave blank to generate a random one:", "");

if (Key === "") {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    Key = generateString(12);
}

Key = toHex(Key);
Text = toHex(Text);

Key = toAscii(Key);
Text = toAscii(Text);
Key = Key*Key*1.3333

let Output = Key + Text;

Output = unicodeToVariable(Output);
Output = "Your alien text is: " + Output

window.alert(Output);
