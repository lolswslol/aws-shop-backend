const products = [
  {
    count: 1,
    description: 'Mock Product',
    id: 1,
    price: 123,
    title: 'Mock Product Title'
  }
]

exports.getProductList = async (event) => {
  return {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': "*"},
    body: JSON.stringify(
      products
    ),
  };
};

exports.getProductById = async (event) => {
  const { pathParameters } = event;

  return {
    statusCode: 200,
    body: JSON.stringify({
      product: pathParameters.productId || 0
    })
  }
}
