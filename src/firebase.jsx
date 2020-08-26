import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAaOVn3LDIJE0qb-G_YdHjVw6cmxDK9nxo',
  authDomain: 'todolist-78f6b.firebaseapp.com',
  databaseURL: 'https://todolist-78f6b.firebaseio.com',
  projectId: 'todolist-78f6b',
  storageBucket: 'todolist-78f6b.appspot.com',
  messagingSenderId: '47300020920',
  appId: '1:47300020920:web:2e332fd057d673f8e1824d',
})

const db = firebaseApp.firestore()
export default db
