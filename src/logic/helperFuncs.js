async function getStuffViaFetch(url, handleError) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('something went wrong with api pull');

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
    handleError && handleError(err);
  }
}

let keyProp = 0;
function getUniqueKey() {
  return keyProp++;
}

function normalizePrice(num) {
  const numStr = num.toString();
  const hasDecimal = numStr.includes('.');
  if (!hasDecimal) return num.toString() + '.00';

  const afterDecimalLength = numStr.slice(numStr.indexOf('.') + 1).length;
  if (afterDecimalLength === 1) return numStr + '0';
  return num;
}

export { getStuffViaFetch, getUniqueKey, normalizePrice };
