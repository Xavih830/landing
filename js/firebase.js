import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4kfWnDt5dv-R_H93AXkf8H1AwEasi7EM",
  authDomain: "landing-44f15.firebaseapp.com",
  projectId: "landing-44f15",
  storageBucket: "landing-44f15.firebasestorage.app",
  messagingSenderId: "104681124609",
  appId: "1:104681124609:web:a4f13e299a638761436100"
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

async function saveVote(productId){
    const votos = collection(db, 'votes');
}