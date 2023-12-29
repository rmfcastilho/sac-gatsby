export const submitNewRequest = async (type, data) => {
  try {
    const response = await fetch(`${process.env.GATSBY_API_BASE_URL}/submit-new-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'type': type,
      },
      body: JSON.stringify(data),
    });

    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error Response:', errorResponse);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Response Data:', responseData);

    return responseData;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};
