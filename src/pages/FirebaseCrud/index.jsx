import React, { useState } from "react";
import { db } from "../../FirebaseInit";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const FirebaseCrud = () => {
  const [subject, setSubject] = useState({ name: "Abhilas" });
  const [data, setData] = useState([]);

  const postData = async () => {
    try {
      if (subject != "") {
        await addDoc(collection(db, "testCollection"), {
          subject,
          completed: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getData = () => {
    try {
      const dataArr = [];
      const query = collection(db, "testCollection");
      const unsub = onSnapshot(query, (snapshoot) => {
        snapshoot.forEach((doc) => {
          console.log(doc.data());
          // dataArr.push(doc.data())
          setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateData = async (docId) => {
    try {
      await updateDoc(doc(db, "testCollection", docId), { subject: subject });
      setData([]);
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteData = async (dataId) => {
    try {
      await deleteDoc(doc(db, "testCollection", dataId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Firebase Exp</h1>
      <button onClick={() => postData()}>Submit data</button>
      <button onClick={() => getData()}>Get data</button>
      <button onClick={() => updateData(data[0]?.id)}>update data</button>
      <button onClick={() => deleteData(data[0]?.id)}>delete data</button>
    </div>
  );
};

export default FirebaseCrud;
