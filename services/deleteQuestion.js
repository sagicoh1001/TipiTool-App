import { doc, deleteDoc } from "firebase/firestore";
import FireBaseDB from "./dbInit";

const deleteQuestion = async id => {
    try {
        await deleteDoc(doc(FireBaseDB, "FAQ", id));
    }
    catch (e) {
        console.log(e)
    }
}

export default deleteQuestion