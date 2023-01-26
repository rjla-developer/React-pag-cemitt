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

const collectionName = "convocatorias";

export const saveConvocatoria = (newLink, collectionName) =>
  addDoc(collection(db, collectionName), newLink);

export const updateConvocatoria = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetConvocatorias = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getConvocatorias = (collectionName) => getDocs(collection(db, collectionName));

export const deleteConvocatoria = (id) => deleteDoc(doc(db, collectionName, id));

export const getWebsite = (id) => getDoc(doc(db, collectionName, id));
