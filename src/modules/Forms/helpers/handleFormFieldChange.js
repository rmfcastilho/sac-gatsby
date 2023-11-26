import { FORM_FIELD_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

export const handleFormFieldChange = (event, action, dispatch) => dispatch(
  action(
    {
      category: FORM_FIELD_CATEGORIES[event.target.name],
      field: event.target.name,
      value: event.target.value,
    }
  )
);

