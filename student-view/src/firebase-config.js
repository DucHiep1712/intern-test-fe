import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC7cWtA00DUKv1qqUIE--wLBlJr7geNfSI',
  authDomain: 'mimetic-encoder-356909.firebaseapp.com',
  projectId: 'mimetic-encoder-356909',
  storageBucket: 'mimetic-encoder-356909.appspot.com',
  messagingSenderId: '633778018035',
  appId: '1:633778018035:web:10815b4ac945835b014986',
  measurementId: 'G-REJ4HSRR8P'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)