
async function processRawData(inputFilePath: string, outputFilePath: string) {
  const rawData = await Deno.readTextFile(inputFilePath);

  const lines = rawData.split("\n");

  const dataArray = lines.map(line => line.trim().split(" ").map(Number));

  const jsonData = JSON.stringify(dataArray, null, 2);
  await Deno.writeTextFile(outputFilePath, jsonData);
}

processRawData("./raw-data.txt", "./data.json");
processRawData("./raw-data-test.txt", "./data-test.json");
