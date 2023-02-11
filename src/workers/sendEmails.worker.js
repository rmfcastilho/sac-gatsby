import { sendEmailToSac } from "./sendEmailToSac";
import { sendEmailToCustomer } from "./sendEmailToCustomer";


export const sendEmails = () => {
  sendEmailToCustomer();
  sendEmailToSac();
};
