export const getZipData = async (zipCode) => {
  console.log(`calling getZipData with zipCode: ${zipCode}`);

  const options = {
    method: 'GET',
    cache: 'default',
  };

  return await fetch(`https://viacep.com.br/ws/${zipCode.replace('-', '')}/json/`, options)
    .then((response) => response.json());
};
