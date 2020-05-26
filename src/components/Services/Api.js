const getApiData = () => {
  return fetch('./api.json')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getApiData;
