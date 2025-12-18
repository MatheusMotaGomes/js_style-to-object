/**
 * @param {string} styleString
 *
 * @returns {object}
 */
const convertToObject = (styleString) => {
  const result = {};

  if (!styleString) {
    return result;
  }

  // 1. Dividimos a string em um array de declarações
  const lines = styleString.split(';');

  for (const line of lines) {
    // 2. Removemos espaços extras para ver se a linha tem algo
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      continue;
    }

    // 3. Encontramos a posição do primeiro ":" para separar chave e valor
    const colonIndex = trimmedLine.indexOf(':');

    if (colonIndex !== -1) {
      const key = trimmedLine.slice(0, colonIndex).trim();
      const value = trimmedLine.slice(colonIndex + 1).trim();

      // 4. Adicionamos ao objeto final
      result[key] = value;
    }
  }

  return result;
};

module.exports = convertToObject;
