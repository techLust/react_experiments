import React, { useEffect, useState } from 'react';

const demoData = {
    a: 1,
    b: 2, 
    c: 3
};

const StorageExp = () => {
    const [data, setData ] = useState()

    // Set data in cookie
    document.cookie = 'username=John'

    // Set data in session storage
    sessionStorage.setItem('testSession', JSON.stringify(demoData))

    // Set data in indexedDB
    const request = indexedDB.open('MyDatabase', 1);

    request.onupgradeneeded = (e) => {
        const db = request.result
        console.log(db)

        const objectStore = db.createObjectStore('keh', { keyPath: 'id' });
        objectStore.createIndex('name', 'Mahatab', {unique: false})
    }



  useEffect(() => {
    const sessionData = sessionStorage.getItem('testSession')
    console.log(sessionData)
    const cookieData = document.cookie
    console.log(cookieData.split('=')[1])
  }, []);

  return (
    <>
      <h2>Storage Experiment</h2>
    </>
  );
};

export default StorageExp;
