export const getZipData = async (zipCode) => {
  const options = {
    method: 'GET',
    cache: 'default',
  };

  return await fetch(`${process.env.GATSBY_ZIP_CODE_API_BASE_URL}/${zipCode.replace('-', '')}/json/`, options)
    .then((response) => response.json());
};
