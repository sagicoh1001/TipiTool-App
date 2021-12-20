import { doc, runTransaction } from "firebase/firestore";
import FireBaseDB from "./dbInit";


const editQuestion = async (id, editedParams) => {
    const sfDocRef = doc(FireBaseDB, "FAQ", id);
    try {
      await runTransaction(FireBaseDB, async transaction => {
        const sfDoc = await transaction.get(sfDocRef);
        if (!sfDoc.exists()) {
          throw "Document does not exist!";
        }
        transaction.update(sfDocRef, editedParams);
      });    
    } catch (e) {
      console.error(e);
    }
}

export default editQuestion