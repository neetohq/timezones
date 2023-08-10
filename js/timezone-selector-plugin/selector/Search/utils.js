import { groupedOptions } from "../utils";

export const filterTimezones = (inputValue) => {
  if (inputValue === "") {
    return groupedOptions;
  }

  const filteredOptions = groupedOptions.map((group) => {
    const key = Object.keys(group)[0];
    const element = group[key]
      .filter(
        (timezone) => timezone.label.toLowerCase().includes(inputValue.toLowerCase())
          || timezone.keywords.toLowerCase().includes(inputValue.toLowerCase()),
      );

    return element.length > 0 ? { [key]: element } : null;
  });

  return filteredOptions.filter((group) => group !== null);
};

export const createContainerForUpdatedOptions = () => {
  const updatedOptionsContainer = document.createElement("div");
  updatedOptionsContainer.className = "flex flex-col";
  return updatedOptionsContainer;
};
