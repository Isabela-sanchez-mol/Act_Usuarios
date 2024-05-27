import './App.css';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc as firestoreDoc, getDocs, query, where } from 'firebase/firestore';
import app from "./fb"
import { useState } from 'react';

function App() {
  const db = getFirestore(app);
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [docId, setDocId] = useState('');

  const addDocument = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Usuarios"), {
        nombre: nombre,
        cedula: cedula,
        contraseña: contraseña,
      });
      alert("Documento agregado correctamente");
    } catch (error) {
      console.error("Error agregando documento: ", error);
      alert("Error al agregar el documento");
    }
  }

  const updateDocument = async () => {
    try {
      const querySnapshot = await getDocs(query(collection(db, "Usuarios"), where("cedula", "==", cedula)));
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          updateDoc(doc.ref, {
            nombre: nombre,
            cedula: cedula,
            contraseña: contraseña
          });
        });
        alert("Documento actualizado correctamente");
      } else {
        alert("No se encontró un documento con la cédula proporcionada");
      }
    } catch (error) {
      console.error("Error actualizando documento: ", error);
      alert("Error al actualizar el documento");
    }
  };
  
  

  const deleteDocument = async (e) => {
    e.preventDefault();
    try {
      const querySnapshot = await getDocs(query(collection(db, "Usuarios"), where("cedula", "==", cedula)));
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      alert("Documentos eliminados correctamente");
    } catch (error) {
      console.error("Error eliminando documentos: ", error);
      alert("Error al eliminar los documentos");
    }
  };
  
  return (
    <div className="App">
      <form className="form">
        <p id="heading">Ingreso</p>
        <div className="field">
          <input 
            autoComplete="off" 
            placeholder="Nombre completo" 
            className="nombre" 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="field">
          <input 
            autoComplete="off" 
            placeholder="Cédula" 
            className="cedula" 
            type="text" 
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </div>
        <div className="field">
          <input 
            placeholder="Contraseña" 
            className="contraseña" 
            type="password" 
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="btn">
          <button type="button" className="btnCrear" onClick={addDocument}>Crear</button>
          <button type="button" className="btnEditar" onClick={() => updateDocument(docId)}>Editar</button>
          <button type="button" className="btnEliminar" onClick={deleteDocument}>Eliminar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
