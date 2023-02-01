import { HEADERS } from "constants/headers";
import { ROUTES } from "constants/routes";
import { BUTTON_STYLES } from "constants/button";

export const LANDING_PAGE_BUTTONS = [
  {
    label: HEADERS.EXISTING_CUSTOMER,
    target: ROUTES.CUSTOMER_LANDING,
    buttonStyle: BUTTON_STYLES.PRIMARY,
    isCustomer: true,
  },
  {
    label: HEADERS.NON_CUSTOMER,
    target: ROUTES.NON_CUSTOMER_LANDING,
    buttonStyle: BUTTON_STYLES.SECONDARY,
    isCustomer: false,
  }
];
