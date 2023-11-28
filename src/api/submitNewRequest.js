export const submitNewRequest = async (type, data) => {
  console.log('Submitting request');
  console.log('Type:', type);
  console.log('Data:', data);

  try {
    const response = await fetch(`http://localhost:3000/submit-new-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'type': type,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};
