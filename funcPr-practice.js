// 1. 쇼핑 카트의 총 금액 계산하기
const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

// 총 금액 for()
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log("Total Price:", totalPrice); 
// Total Price: 1359000

// 총 금액 forEach()
totalPrice = 0;
cart.forEach((product) => {
    totalPrice += product.price * product.quantity;
});
console.log("Total Price:", totalPrice);

// 총 금액 reduce()
totalPrice = cart.reduce((result, product) => result + product.price * product.quantity, 0);
console.log("Total Price:", totalPrice); 

// 제품별 금액 계산 map()
const itemTotals = cart.map((product) => ({
    item: product.item,
    total: product.price * product.quantity
}));
console.log("제품별 금액: ", itemTotals);
/*
제품별 금액: [
  { item: '노트북', total: 1200000 },
  { item: '마우스', total: 70000 },
  { item: '키보드', total: 89000 }
]
*/

// 2. 이름 목록 변환하기
const names = ['alice', 'bob', 'charlie'];

const uppercasedNames = names.map(
    (name) => name.toUpperCase()
);
console.log(uppercasedNames);
// [ 'ALICE', 'BOB', 'CHARLIE' ]

const capitalStartnames = names.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1)
 );
 console.log(capitalStartnames);
// [ 'Alice', 'Bob', 'Charlie' ]