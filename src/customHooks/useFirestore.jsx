import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase';

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribeFirestore = projectFirestore.collection(collection)
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((eachDoc) => {
          documents.push({ ...eachDoc.data(), id: eachDoc.id });
        });
        setDocs(documents);
      });

    return () => unsubscribeFirestore();
  }, [collection]);

  return { docs };
}

export default useFirestore;
