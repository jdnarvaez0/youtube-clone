import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCofvmelHDHhaetXyyQ-ONBNeLfHr8P8rw",
	authDomain: "clone-ae52d.firebaseapp.com",
	projectId: "clone-ae52d",
	storageBucket: "clone-ae52d.appspot.com",
	messagingSenderId: "749142083305",
	appId: "1:749142083305:web:4efa130f39a4c2bf451278",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
