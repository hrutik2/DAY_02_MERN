const fs = require('fs').promises;


async function readFileAsync(file) {
  try {
    const data = await fs.readFile(file, 'utf8');
    return data;
  } catch (err) {
    throw err;
  }
}


async function aggregateDataAsync(files) {
  const aggregatedData = [];

  try {
    for (const file of files) {
      const data = await readFileAsync(file);
      aggregatedData.push(data);
    }
    return aggregatedData;
  } catch (err) {
    throw err;
  }
}

