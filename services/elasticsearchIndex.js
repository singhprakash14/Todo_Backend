const createIndex = async () => {
  const indexName = "your_index_name"; // Replace with your desired index name

  try {
    await client.indices.create({
      index: indexName,
      body: {
        mappings: {
          properties: {
            title: { type: "text" },
            // Add more properties and their types as needed
          },
        },
      },
    });

    console.log(`Index '${indexName}' created successfully.`);
  } catch (error) {
    console.error(`Error creating index '${indexName}':`, error);
  }
};

// Call the createIndex function to create the index
createIndex();
