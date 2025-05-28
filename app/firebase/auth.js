// firebase/auth.js
import { auth } from './config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const registrarUsuario = async (email, senha) => {
  return await createUserWithEmailAndPassword(auth, email, senha)
}

export const loginUsuario = async (email, senha) => {
  return await signInWithEmailAndPassword(auth, email, senha)
}

export const logoutUsuario = async () => {
  return await signOut(auth)
}
