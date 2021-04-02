import { mainSliceType } from "../../../type";

export const mainInitialState: mainSliceType = {
  items: [],
  isLoading: false,
  error: "",
  nameInput: '',
  genderInput: '',
  statusInput: '',
  pagesCount: 0,
  currentPage: 1,
};
