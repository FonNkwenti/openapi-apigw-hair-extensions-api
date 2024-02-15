const TableName = process.env.DYNAMODB_TABLE;

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
export const handler = async (event) => {
  console.log(JSON.stringify(event))
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify(`Getting Hair extension for Extension ${event.pathParameters.extensionId}
        {
          "id": 10,
          "curl": "straight",
          "length": 60,
          "price": 200000,
          "colour": "Blonde",
          "origin": "Brazilian",
          "instructions": "wash with mild shampoo",
          "type": "virgin",
          "availability": "available",
          "application": "clip-in"
        }
      
      `),
  };
  return response;

}
