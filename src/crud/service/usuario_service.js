import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

class UsuarioService {
    static signUp = (auth, email, password, callback)=>{
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then((userCredential)=>{
            callback(userCredential)
        })
        .then((response)=>{return response.json()})
        .catch(error=>console.log(error))
    }
    static sigIn = (auth, email, password, callback)=>{
        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then((userCredential)=>{
            callback(userCredential)
        })
        .catch(error=>console.log(error))
    }

    
}

export default UsuarioService