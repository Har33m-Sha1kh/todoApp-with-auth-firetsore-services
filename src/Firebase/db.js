import { app } from "./conf"
import { getFirestore, doc, setDoc, arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid'


const db = getFirestore(app);

export const addTodo = async (todo, id) => {
    await setDoc(doc(db, "users", id), {
        todos: arrayUnion({ id: uuidv4(), todo, iscompleted: false })
    }, { merge: true });
}


export const getTodo = async (id, setTodos) => {
    try {
        const docRef = doc(db, "users", String(id));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setTodos(docSnap.data().todos);
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        alert("login first");
    }
};

export const removeTodo = async (removeid,docId) => {
    const docRef = doc(db, "users", String(docId));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const array = docSnap.data().todos || [];
        const new_todos = array.filter(todo => todo.id !== removeid);

        updateDoc(docRef,{
            todos:new_todos
        })
    }

}
