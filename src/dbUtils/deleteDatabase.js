const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = require('./config');

firebase.initializeApp(firebaseConfig.firebaseConfig);
const db = firebase.firestore();

deleteCollection('Products');
deleteCollection('ProductDetail');

function deleteCollection(collection) {
  db.collection(collection)
    .get()
    .then(querySnap => {
      querySnap.forEach(docSnap => {
        docSnap.ref
          .delete()
          .then(val => console.log(val))
          .catch(err => console.log(err));
      });
    });
}
