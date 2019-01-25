const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = require('./config');
const chinelle = require('./chenille.data');
const fleece = require('./fleece.data');

firebase.initializeApp(firebaseConfig.firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

processProducts(chinelle.products);
processProducts(fleece.products);

function processProducts(products) {
  for (const product of products) {
    const details = product.details;
    delete product.details;
    addRecord('Products', product, product.id);

    for (const detail of details) {
      detail.productId = product.id;
      const docId = `${detail.productId}-${detail.category
        .charAt(0)
        .toUpperCase()}`;
      addRecord('ProductDetail', buildDetailRecord(detail), docId);
    }
  }
}

function addRecord(collection, record, docId) {
  db.collection(collection)
    .doc(docId)
    .set(record)
    .catch(err => console.log(err));
}

function buildDetailRecord(detail) {
  const result = detail;
  sizeChar = detail.category.charAt(0).toUpperCase();
  result.imageUrls = [];

  for (let i = 0; i < result.numImages; i++) {
    result.imageUrls.push(
      `Products%2F${result.productId}%2F${result.productId}-${sizeChar}${i}.jpg`
    );
  }

  delete result.numImages;
  return result;
}
