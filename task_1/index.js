import {encoded, translations} from './data.js'

console.log("Let's rock")

// console.log(encoded, translations)


const decoded = function (encoded, translations) {
    return encoded.map(obj => {
        for (let key in obj) {
            if (translations.hasOwnProperty(obj[key])) {
                obj[key] = translations[obj[key]];
            } else {
                obj[key] = obj[key];
            };
        };
        return obj
    });
};

const unique = function (encoded, translations) {
    const uniqueNumArr = [];
    encoded.forEach(obj => {
        for (let key in obj) {
            if (!translations.hasOwnProperty(obj[key]) && !Number.isNaN(Number.parseInt(obj[key])) && key !== 'groupId') {
                uniqueNumArr.push(obj[key])
            };
        };
    });
    return uniqueNumArr
};

console.log(decoded(encoded, translations))
console.log(unique(encoded, translations))
