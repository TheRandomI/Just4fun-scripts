function fromAscii(asciiString) {
    let result = '';
    for (let i = 0; i < asciiString.length; i += 3) {
        let asciiCode = asciiString.substring(i, i + 3);
        if (asciiCode.length === 3) { // Ensure valid length
            result += String.fromCharCode(parseInt(asciiCode, 10));
        }
    }
    return result;
}

function fromHex(hexString) {
    let result = '';
    for (let i = 0; i < hexString.length; i += 4) {
        let hexCode = hexString.substring(i, i + 4);
        let codePoint = parseInt(hexCode, 16);
        if (!isNaN(codePoint)) {
            result += String.fromCodePoint(codePoint);
        } else {
            console.error("Invalid hex code:", hexCode);
            return "Invalid hex sequence";
        }
    }
    return result;
}

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

function variableToUnicode(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        let unicodeCode = inputString.codePointAt(i).toString(16).toUpperCase();
        while (unicodeCode.length < 4) {
            unicodeCode = '0' + unicodeCode;
        }
        result += unicodeCode;
    }
    return result;
}

let Txt = window.prompt("What is da alien text??", "");
let Key = window.prompt("What is ur key???", "");

Key = toHex(Key);
Key = toAscii(Key);

if (Key.length > 0) {
    Key = parseInt(Key, 10) / 1.3333;
}

Txt = variableToUnicode(Txt);

let adjustedLength = Math.floor(Key.toString().length);
if (adjustedLength > 0) {
    Txt = Txt.substring(adjustedLength);
}

Txt = fromAscii(Txt);
Txt = fromHex(Txt);

window.alert("Decrypted Output: " + Txt);
