const { BardAPI } = require('bard-api-node');

async function askQuestion(question) {
  try {
    if (!question) {
      throw new Error('Question parameter is required.');
    }

    const assistant = new BardAPI();

    // Set session information for authentication if needed
    await assistant.setSession('__Secure-1PSID', 'ewh942BBNHbXmI-ztPg1s4BCmqKgCp0edfxDFdU9jeZMMyhTpTRfvQ9tvsoDR4n5qM1lAw.');

    // Send a query to Bard
    const response = await assistant.getBardResponse(question);

    return response.content;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

// Example usage
const question = 'What is the capital of France?';
askQuestion(question)
  .then(answer => {
    console.log('Answer:', answer);
  })
  .catch(error => {
    console.error('Error:', error);
  });
