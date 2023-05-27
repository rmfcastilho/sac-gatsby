const toAddress = 'rodrigo.m.castilho@outlook.com';


export const sendEmailToCustomer = (
  fromAddress,
  subject,
) => {
  const emailParameters = {
    Destination: {
      ToAddresses: [toAddress]
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: message
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: fromAddress
  };


};
