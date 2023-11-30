import { getDocs, collection, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"


class PetService {
    static listar = (firestoreDb, callback) => {
        getDocs(collection(firestoreDb, "Pets"))
            .then(
                (snapshot) => {
                    const pets = []
                    snapshot.forEach(
                        (document) => {
                            const id = document.id
                            const { uri, nome, especie, raca, sexo, idade, castrado, vacinado, vermifugado, cuidados, porte, descricao } = document.data()
                            pets.push({ id, uri, nome, especie, raca, sexo, idade, castrado, vacinado, vermifugado, cuidados, porte, descricao })
                        }
                    )
                    callback(pets)
                }
            )
            .catch(error => console.log(error))
    }

    static criar = (firestoreDb, callback, pet) => {
        addDoc(collection(firestoreDb, "Pets"), pet)
            .then((docRef) => {
                callback(docRef.id)
            })
            .catch(error => console.log(error))
    }

    static atualizar = (firestoreDb, id, pet, callback) => {
        let petId = id
        let petRef = doc(firestoreDb, "Pets", petId);
        updateDoc(petRef, pet)
            .then(() => {
                callback(true)
            })
            .catch((error) => {
                console.log(error); 
                callback(false)
            })
    }

    static deletar = (firestoreDb, id, callback) => {
        const petRef = doc(firestoreDb, "Pets", id);
        deleteDoc(petRef)
        .then(()=>{
            callback(true)
        })
        .catch((error)=>{
            console.log(error);
            callback(false)
        })
    }



}

export default PetService