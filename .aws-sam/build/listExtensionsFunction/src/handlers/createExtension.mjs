

// Get the DynamoDB table name from environment variables
const TableName = process.env.DYNAMODB_TABLE;

/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
export const handler = async (event) => {
    console.log(JSON.stringify(event))
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hair Extension created again!'),
    };
    return response;
};
