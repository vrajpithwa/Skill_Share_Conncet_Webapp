import firebase from '../firebase.js';
import Auth from '../Models/Model.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

// create user function:
export const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'Users'), data);
    res.status(200).send('user created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// get all products 
  export const getUserCredentials = async (req, res, next) => {
    try {
      const auth = await getDocs(collection(db, 'Users'));
      const credentialsArray = [];
      if (auth.empty) {
        res.status(400).send('No Products found');
      } else {
        auth.forEach((doc) => {
          const credentials = new Auth(
            doc.id,
            doc.data().name,
            doc.data().email,
            doc.data().password,
          );
          credentialsArray.push(credentials);
        });
  
        res.status(200).send(credentialsArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const getPosts = async (req, res, next) => {
    try {
      const products = await getDocs(collection(db, 'User Posts'));
      const productArray = [];
      if (products.empty) {
        res.status(400).send('No Products found');
      } else {
        products.forEach((doc) => {
          const product = new Product(
            doc.id,
            doc.data().UserEmail,
            doc.data().Message ,
          );
          productArray.push(product);
        });
  
        res.status(200).send(productArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

// get products by id
  export const getProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      const product = doc(db, 'products', id);
      const data = await getDoc(product);
      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('product not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };


// update product function
  export const updateProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const product = doc(db, 'products', id);
      await updateDoc(product, data);
      res.status(200).send('product updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

// Delete product function
    export const deleteProduct = async (req, res, next) => {
        try {
        const id = req.params.id;
        const product = doc(db, 'products', id);
        await deleteDoc(product);
        res.status(200).send('product deleted successfully');
        } catch (error) {
        res.status(400).send(error.message);
        }
    };