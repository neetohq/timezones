import { DUMMY_TIMEZONES } from '../constants';

export const filterTimezones = (inputValue) => {
  if (inputValue === '') {
    return DUMMY_TIMEZONES;
  }

  return DUMMY_TIMEZONES.filter(
    (timezone) => timezone.toLowerCase().includes(inputValue),
  );
};

export const createContainerForUpdatedOptions = () => {
  const updatedOptionsContainer = document.createElement('div');
  updatedOptionsContainer.className = 'flex flex-col';
  return updatedOptionsContainer;
};
