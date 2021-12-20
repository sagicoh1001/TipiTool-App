import { addDoc, collection } from "firebase/firestore";
import FireBaseDB from "./dbInit";
import { stringValidator } from "./inputValidator";

const writeNewQuestion = async (
  category,
  question,
  answer
) => {
  try {
    if (
        stringValidator(category) &&
        stringValidator(question) &&
        stringValidator(answer)
    ) {
      const docRef = await addDoc(collection(FireBaseDB, "FAQ"), {
        category: category,
        question: question,
        answer: answer,
      });
      console.log("Document written with ID: ", docRef.id);
    }else {
      console.log(`Category or question or answer were empty`)
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default writeNewQuestion;
