import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { addDoc, collectionData, deleteDoc, Firestore, query, where } from '@angular/fire/firestore';
import { collection, doc, getDocs, setDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import Pedido from '../interfaces/pedido.interface';
import Usuario from '../interfaces/usuario.interface';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore:Firestore ,private auth: Auth) { }
//Añadidos un usuario a la BD de firestore
  agregarUsuarioBD(usuario:Usuario){
    const placeRef = collection(this.firestore, 'usuarios'); 
    return addDoc(placeRef,usuario);  
  }
//registramos el usuario creado a firebase Auth
  crearUsuario(email:any,password:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }
//funcion para hacer login
  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
  //Consulta #1
  //Funcion que busca un telefono en la BD 
  buscarTelefonoBD(telefono:any){
    const placeRef = collection(this.firestore, 'usuarios');
    const q = query(placeRef, where("telefono","==",telefono));
    return getDocs(q);
  }
  logout() {
    return signOut(this.auth);
  }
  //Consulta #2
  //Funcion que busca en BD el usuario que contenga su correo
  obtenerUsuario(email:any){
    const placeRef = collection(this.firestore, 'usuarios');
    const q = query(placeRef, where("email","==",email));
    return getDocs(q);
  }
  //Añadidos un pedido a la BD de firestore
  agregarPedidoBD(pedido:Pedido){
    const placeRef = collection(this.firestore, 'pedidos'); 
    return addDoc(placeRef,pedido);  
  }
  //Consulta #3
  //Obtiene todos los pedidos que coincidan con el correo
  obtenerPedidos(email:any){
    const placeRef = collection(this.firestore, 'pedidos');
    const q = query(placeRef, where("email","==",email));
    return getDocs(q);
  }
  //Consulta #4
  //Obtenemos todos los usuarios como un observable
  obtenerUsuarios(): Observable<Usuario[]>{
    const placeRef = collection(this.firestore, 'usuarios'); 
    //Collectiondata recupera los datos de una collecion, mandamos como parametro dicha coleccion y el indice. 
    return collectionData(placeRef,{ idField: 'id'}) as Observable<Usuario[]>;
  }
    //Consulta #5
  obtenerTodosPedidos(): Observable<Pedido[]>{
    const placeRef = collection(this.firestore, 'pedidos'); 
    return collectionData(placeRef,{ idField: 'id'}) as Observable<Pedido[]>;
  }
  //Actualizar usuario
  actualizaUsuario(nuevoUsuario:Usuario){
    const placeDocRef = doc(this.firestore, `usuarios/${nuevoUsuario.id}`);
    return setDoc(placeDocRef,nuevoUsuario);
  }
  //Elimina usuario
  eliminarUsuarios(usuario:Usuario){
    const placeDocRef = doc(this.firestore, `usuarios/${usuario.id}`); 
    return deleteDoc(placeDocRef);
  }
}

