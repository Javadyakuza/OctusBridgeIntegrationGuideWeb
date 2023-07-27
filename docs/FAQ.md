# FAQ

## How to set `expected_evers`?

`expected_evers` plays a crucial role when transferring a token from an EVM network to Everscale. The user can configure this parameter to determine the behavior of the transaction.

If the user sets `expected_evers` to match the event's initial balance and attaches sufficient EVM gas tokens to the transaction, the event will be automatically deployed by the credit backend. In such cases, the user simply needs to wait for the deployment process to complete.

On the other hand, if the user sets `expected_evers` to a value lower than the event's initial balance or zero, or fails to attach enough EVM gas tokens to the transaction, the event will not be deployed automatically. Instead, it will require manual deployment.

Credit backends possess wallets across all networks and ensure balance equality. Consequently, if payment is made with the appropriate amount of attached EVM gas tokens (matching the `eventInitialBalance`), the credit backend will proceed with deploying the event contract.

## Contract's ABIs don't work, why ?

Due to the Markdown code formatter used in the code blocks, the ABIs may appear to be in an incorrect format. However, you can use the following method to reformat the ABI to its original JSON format, enabling you to fetch the contract:

```typescript
let abiCorrectFormat = JSON.parse(JSON.stringify(abiWrongFormat));
```

By utilizing the JSON.stringify() and JSON.parse() functions, you can ensure that the ABI is correctly formatted as a JSON object, allowing you to proceed with fetching the contract.
