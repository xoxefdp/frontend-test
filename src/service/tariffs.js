const getTariffResults = () => {
  return fetch('http://localhost:7071/tariffs')
  .then((response) => response.json())
  .then((tariffs) => tariffs)
  .catch((error) => {
    console.error(error);
  })
}

export default getTariffResults
