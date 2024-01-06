const { BardAPI } = require('bard-api-node');

exports.handler = async function(event, context) {
  try {
    const { question } = JSON.parse(event.body);

    if (!question) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Question is required' }),
      };
    }

    const assistant = new BardAPI();
    // Set session information for authentication
    await assistant.setSession('__Secure-1PSID', 'ewh942BBNHbXmI-ztPg1s4BCmqKgCp0edfxDFdU9jeZMMyhTpTRfvQ9tvsoDR4n5qM1lAw.');
    // ...

    // Send the question to Bard
    const response = await assistant.getBardResponse(question);

    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.content }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
