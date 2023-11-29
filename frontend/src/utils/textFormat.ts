export function camelToTitleCase(input: string): string {
    return input.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
}


export function camelToSentenceCase(input: string): string {
    const words = input.replace(/([A-Z])/g, ' $1').split(' ');
    const firstWord = words.shift() || '';
    const restOfWords = words.join(' ').toLowerCase();
    
    return `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(1)}${restOfWords}`;
}


export function camelToLowercase(input: string): string {
    return input.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}


export function camelToAbbreviation(input: string): string {
    if (/^[a-z][A-Za-z]*$/.test(input)) {
        const words = input.split(/(?=[A-Z])/);
        return words.map(word => word.charAt(0).toUpperCase()).join('');
    } else {
        return input;
    }
}