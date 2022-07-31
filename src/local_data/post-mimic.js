let products = [];

let addData = (object) => {
  products.push(object);
  return products;
}

let getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  //the response have to be converted to json type file, so it can be used
  const data = await response.json();

  if (data.length > 0) {
    data.forEach(d => {
      products.push(d);
    });
  }
  return products;
}


export const productList = getProducts;
export const addProduct = addData;
