// ************************* Object property shorthand *************************

const name = "Hrishabh";
const userAge = 20;

// const user = {
//   name: name,
//   age: userAge,
//   location: "India",
// };

const user = {
  name, // works totally fine
  // age, // will trhow error
  userAge, // works fine
  location: "India",
};

// console.log(user);

// ************************* Object destructuring *************************

// Basic idea of destructuring is
// to make properties of an object
// as a separate variable

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salesPrice: undefined,
};

// So destructuring can be done this way as well

// const label = product.label;
// const price = product.price;

// But the problem here is that we have
// to individually define it for each of
// the property making the length of our
// code big.

// const { label, stock, rating } = product;
// console.log(label);
// console.log(stock);
// console.log(rating);

// But if you don't wanna name the variable same as the property

const {
  label: productLabel,
  stock = 202,
  price: productPrice,
  rating = 5,
} = product;
// console.log(productLabel);
// console.log(stock); // 201
// console.log(productPrice);
// console.log(rating); // 5
// console.log(product.rating); // undefined

const transaction = (type, { label, stock }) => {
  // const { label } = product; ----> this can be done as well but
  // we are gonna do it while passing it in argument
  console.log(type, label, stock);
};

transaction("order", product);
