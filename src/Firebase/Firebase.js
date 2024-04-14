// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { get, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXrOlskzwMAeLrwJlpQbQKez071qrR5LY",
  authDomain: "moviereviews-93320.firebaseapp.com",
  projectId: "moviereviews-93320",
  storageBucket: "moviereviews-93320.appspot.com",
  messagingSenderId: "713124257160",
  appId: "1:713124257160:web:8dadbc1028d8d42bc3ae3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getReviews = async () => {
    const snapshot = await get(ref(db, 'reviews'));
    const reviewsObj = snapshot.val();
    const reviewsArr = Object.keys(reviewsObj).flatMap(key => reviewsObj[key]);
    return reviewsArr;
}

export const getReviewsByMovie = async (imdbID) => {
  const snapshot = await get(ref(db, 'reviews/' + imdbID));
  const reviewsObj = snapshot.val();
  if (!reviewsObj) {
    return [];
  }
  const reviewsArr = Object.keys(reviewsObj).flatMap(key => reviewsObj[key]);
  return reviewsArr;
}

export const addReviewToMovie = async (imdbID, Name, Rating, Content) => {
  const review = {
    Name,
    Rating,
    Content
  }
  const reviewRef = ref(db, 'reviews/' + imdbID);
  const snapshot = await get(reviewRef);
  const reviewsObj = snapshot.val();
  if (!reviewsObj) {
    set(ref(db, 'reviews/' + imdbID), [review]);
  } else {
    set(ref(db, 'reviews/' + imdbID), [...reviewsObj, review]);
  }
}