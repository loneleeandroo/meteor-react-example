const initialState = {
  open: true,
  modal: false,
  title: "Welcome",
  children: "This is a sample meteor redux example. Click anywhere outside this modal to get started.",
  actions: [],
};

const DIALOG_OPEN = "DIALOG_OPEN";
const DIALOG_CLOSE = "DIALOG_CLOSE";

const dialog = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_OPEN:
      return {
        ...state,
        ...action.options,
        open: true,
      };
    case DIALOG_CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  };
};

export const openDialog = (options) => ({
  type: DIALOG_OPEN,
  options,
});

export const closeDialog = () => ({
  type: DIALOG_CLOSE,
});

export default dialog;
