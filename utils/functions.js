export function isStringContainsAnyValueOfAnArray(value, array) {
    for (let index = 0; index < array.length; index++) {
        if(value.includes(array[index]))
            return true;
    }
    return false;
}