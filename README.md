# Hair Extensions API

The Hair Extensions API is a RESTful API that allows users to manage and retrieve information about hair extensions. It is built using  AWS SAM on AWS, leveraging AWS Lambda, API Gateway, and DynamoDB.

## Features

- **List Hair Extensions**: Retrieve a list of all available hair extensions.
- **Get Hair Extension**: Get detailed information about a specific hair extension by ID.
- **Create Hair Extension**: Add a new hair extension to the database.

## Prerequisites

- Node.js (v14.x or later)
- AWS SAM CLI
- AWS CLI
- AWS Account with appropriate IAM permissions

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/hair-extensions-api.git
   ```

2. Install the dependencies:

   ```shell
   cd hair-extensions-api
   npm install
   ```

3. Set up your AWS credentials using the AWS CLI:

   ```shell
   aws configure
   ```
4. Build the application using AWS SAM::

   ```shell
   sam build
   ```

5. Deploy the API to your AWS account using AWS SAM:

   ```shell
   sam deploy -g
   ```

   This command will deploy the Lambda functions, API Gateway, and DynamoDB table required for the Hair Extensions API.

6. Once the deployment is successful, you will receive an API Gateway endpoint URL. You can use this URL to make requests to the Hair Extensions API.

## API Documentation

For detailed information on how to use the Hair Extensions API, refer to the [API documentation](docs/api.md).

## Project Structure

- `src/` - Contains the source code for the Lambda functions.
- `events/` - Contains sample event payloads for local testing.
- `template.yaml` - AWS SAM template defining the infrastructure resources.
- `README.md` - This file, providing an overview of the project.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to create a GitHub issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```
