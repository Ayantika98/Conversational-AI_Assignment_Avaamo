// Import necessary modules
const fileSystem = require('fs');

// Read the input JSON file
fileSystem.readFile('input_data.json', 'utf8', (error, jsonData) => {
  if (error) {
    console.error('Error while reading the input file:', error);
    return;
  }

  // Parse the JSON data
  const inputData = JSON.parse(jsonData);

  // Calculate the average age
  const totalAge = inputData.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / inputData.length;

  // Filter people who are 30 years old or older
  const filteredData = inputData.filter(person => person.age >= 30);

  // Sort the filtered array alphabetically by name
  filteredData.sort((a, b) => a.name.localeCompare(b.name));

  // Create the output data object
  const outputData = {
    averageAge: averageAge,
    people30AndOlder: filteredData,
  };

  // Write the output JSON file
  fileSystem.writeFile('output_data.json', JSON.stringify(outputData, null, 2), err => {
    if (err) {
      console.error('Error writing the output file:', err);
    } else {
      console.log('Data manipulation and writing to output_data.json successful!');

      // Log the content of the newly created file
      console.log('\nContent of output_data.json:');
      console.log(JSON.stringify(outputData, null, 2));
    }
  });
});
