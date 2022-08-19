export const checkFilteredSearchEngine = (productTitle: string, searchInput: string) => {
    return productTitle.toLowerCase().includes(searchInput.toLowerCase());
  };
  