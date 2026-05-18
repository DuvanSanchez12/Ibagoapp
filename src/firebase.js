import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmlj3lEJjshTIK63cp4NmBf5VageqCzak",
  authDomain: "ibago-7db2c.firebaseapp.com",
  projectId: "ibago-7db2c",
  storageBucket: "ibago-7db2c.firebasestorage.app",
  messagingSenderId: "1000389244151",
  appId: "1:1000389244151:android:fb6579656255ce9908cff2"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getPlaces = async () => {
  try {
    const placesCollection = collection(db, 'lugares')
    const placesSnapshot = await getDocs(placesCollection)
    const placesList = placesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return placesList
  } catch (error) {
    console.error("Error al obtener lugares:", error)
    return []
  }
}

export const saveEmail = async (email) => {
  try {
    const subscribersRef = collection(db, 'suscriptores')
    await addDoc(subscribersRef, {
      email: email,
      fecha: serverTimestamp(),
      activo: true
    })
    console.log("Email guardado exitosamente")
    return true
  } catch (error) {
    console.error("Error al guardar email:", error)
    return false
  }
}

export const getSubscribers = async () => {
  try {
    const subscribersRef = collection(db, 'suscriptores')
    const q = query(subscribersRef, orderBy('fecha', 'desc'))
    const snapshot = await getDocs(q)
    const subscribersList = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return subscribersList
  } catch (error) {
    console.error("Error al obtener suscriptores:", error)
    return []
  }
}

export { db }