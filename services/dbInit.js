import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { apiKey, appId, authDomain, messagingSenderId, projectId, storageBucket } from "../consts.js";

const firebaseConfig = {
apiKey: apiKey,
authDomain: authDomain,
projectId: projectId,
storageBucket: storageBucket,
messagingSenderId: messagingSenderId,
appId: appId
};

// Initialize Firebase
initializeApp(firebaseConfig);
const FireBaseDB = getFirestore();

export default FireBaseDB