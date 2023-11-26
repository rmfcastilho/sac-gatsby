export const submitNewRequest = async (type, data) => {
  try {
    const response = await fetch('http://localhost:3000/yourEndpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'type': 'type',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Response:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};
