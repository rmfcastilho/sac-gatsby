import { FORM_FIELD_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';
import { FORM_ACTIONS } from 'modules/Forms/constants/FormActions.constants';


export const handleFormFieldChange = (event, formName, dispatch) => {
  const formAction = FORM_ACTIONS[formName];

  dispatch(formAction({
    category: FORM_FIELD_CATEGORIES[event.target.name],
    field: event.target.name,
    value: event.target.value,
  }));
};
