export const submitNewRequest = async (type, data, isCustomer) => {
  try {
    const response = await fetch(`${process.env.GATSBY_API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'type': type,
      },
      body: JSON.stringify({
        ...data,
        isCustomer,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};
