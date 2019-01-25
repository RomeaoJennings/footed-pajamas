const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = require('./config');
const data = require('./data');

firebase.initializeApp(firebaseConfig.firebaseConfig);
const db = firebase.firestore();

for (const product of data.products) {
  addRecord('Products', product);
}

for (const detail of data.details) {
  addRecord('ProductDetail', buildDetailRecord(detail));
}

function addRecord(collection, record) {
  db.collection(collection)
    .doc()
    .set(record)
    .catch(err => console.log(err));
}

function buildDetailRecord(detail) {
  const result = detail;
  sizeChar = detail.category.charAt(0).toUpperCase();
  result.imageUrls = [];

  for (let i = 0; i < result.numImages; i++) {
    result.imageUrls.push(
      `${result.productId}%2F${result.productId}-${sizeChar}${i}.jpg`
    );
  }

  delete result.numImages;
  return result;
}
