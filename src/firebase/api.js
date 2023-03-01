import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./config";

const collectionName = "";

export const onGetConvocatorias = (callback, collectionName) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getWebsite = (id) => getDoc(doc(db, collectionName, id));



// Funciones para base de datos:

export const getDocumentosBD = (collectionName) => getDocs(collection(db, collectionName));


//Todavía no las he usado:

export const saveDocumentoBD = (newLink, collectionName) =>{
  addDoc(collection(db, collectionName), newLink);
}

export const updateDocumentoBD = (id, updatedFields, collectionName) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const deleteDocumentoBD = (id, collectionName) => {
  deleteDoc(doc(db, collectionName, id));
}