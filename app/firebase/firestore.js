// firebase/firestore.js
import { db, auth } from './config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export const salvarVerificacao = async (sintomas) => {
  const user = auth.currentUser

  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const docRef = await addDoc(collection(db, 'verificacoes'), {
    uid: user.uid,
    sintomas,
    criadoEm: serverTimestamp(),
  })

  return docRef.id
}
