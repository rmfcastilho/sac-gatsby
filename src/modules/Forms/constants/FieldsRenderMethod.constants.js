export const FIELDS_RENDER_METHOD = {
  FULL_WIDTH: 'fullWidth',
  PARTIAL_WIDTH_WIDE: 'partialWidthWide',
  PARTIAL_WIDTH_COMPACT: 'partialWidthCompact',
  PARTIAL_WIDTH_SINGLE: 'partialWidthSingle',
  PARTIAL_EQUAL: 'partialEqual',
};

export const FIELDS_RENDER_METHODS_WIDTHS = {
  [FIELDS_RENDER_METHOD.FULL_WIDTH]: {
    desktop: '96%',
    mobile: '',
  },
  [FIELDS_RENDER_METHOD.PARTIAL_WIDTH_WIDE]: {
    desktop: '67%',
    mobile: '63.5%',
  },
  [FIELDS_RENDER_METHOD.PARTIAL_WIDTH_COMPACT]: {
    desktop: '25%',
    mobile: '',
  },
  [FIELDS_RENDER_METHOD.PARTIAL_WIDTH_SINGLE]: {
    desktop: '26%',
    mobile: '40%',
  },
  [FIELDS_RENDER_METHOD.PARTIAL_EQUAL]: {
    desktop: '46%',
    mobile: '95%',
  },
};
