module.exports = function(str1, str2) {
    let i = 0
    const obj = {}
    const obj2 = {}
    if (str1.length !== str2.length) {
        return false
    }

    for (let char of str1) {
        char in obj ? obj[char] += 1 : obj[char] = 1
    }

    for (let char of str2) {
        char in obj2 ? obj2[char] += 1 : obj2[char] = 1
    }

    for (let key in obj) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj[key] !== obj2[key]) {
            return false;
        }
    }

    return true
}
