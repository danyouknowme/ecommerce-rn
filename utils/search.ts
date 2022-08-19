export const checkFilteredSearchEngine = (productCategory: string, searchInput: string) => {
  return productCategory.toLowerCase().includes(searchInput.toLowerCase());
};
