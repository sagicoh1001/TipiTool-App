import { getDocs, collection, query, where } from "firebase/firestore";
import FireBaseDB from "./dbInit";
import { stringValidator } from "./inputValidator";

const getQuestionByCategory = async (category) => {
  try {
    if (stringValidator(category)) {
      const q = query(
        collection(FireBaseDB, "FAQ"),
        where("category", "==", category)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return {id: doc.id, answer: doc.data().answer, question: doc.data().question, category: doc.data().category}
      });
    } else {
      console.log(`Category was empty`);
    }
  } catch (e) {
    console.error("Error geting documents: ", e);
  }
};

export default getQuestionByCategory;
