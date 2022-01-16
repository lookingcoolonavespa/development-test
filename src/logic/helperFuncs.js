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

export { getStuffViaFetch, getUniqueKey };
