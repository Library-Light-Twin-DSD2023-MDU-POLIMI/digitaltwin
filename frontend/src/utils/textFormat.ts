export function camelToTitleCase(input: string): string {
  return input
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
}

export function camelToSentenceCase(input: string): string {
  const words = input.replace(/([A-Z])/g, ' $1').split(' ')
  const firstWord = words.shift() || ''
  const restOfWords = words.join(' ').toLowerCase()

  return `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(
    1
  )}${restOfWords}`
}

export function camelToLowercase(input: string): string {
  return input.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
}

export function camelToAbbreviation(input: string): string {
  if (/^[a-z][A-Za-z]*$/.test(input)) {
    const words = input.split(/(?=[A-Z])/)
    return words.map(word => word.charAt(0).toUpperCase()).join('')
  } else {
    return input
  }
}

export function customFormatter(input: string): string {
  if (/^[a-z]+[A-Z][a-z]*$/.test(input)) {
    return camelToTitleCase(input)
  } else {
    return camelToAbbreviation(input)
  }
}

export function formatSubscripts(input: string) {
  return input.replace(/_(\w|\d)/g, (match, p1) => {
    const lowercaseChar = p1.toLowerCase();

    const subscriptMap = {
      '0': '₀',
      '1': '₁',
      '2': '₂',
      '3': '₃',
      '4': '₄',
      '5': '₅',
      '6': '₆',
      '7': '₇',
      '8': '₈',
      '9': '₉',
      a: 'ₐ',
      e: 'ₑ',
      h: 'ₕ',
      i: 'ᵢ',
      k: 'ₖ',
      l: 'ₗ',
      m: 'ₘ',
      n: 'ₙ',
      o: 'ₒ',
      p: 'ₚ',
      r: 'ᵣ',
      s: 'ₛ',
      t: 'ₜ',
      x: 'ₓ',
    };

    return subscriptMap[lowercaseChar] || match;
  });
}
