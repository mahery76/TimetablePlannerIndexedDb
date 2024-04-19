import React, { useState } from "react";
import Modal from "./Modal";
import { addTeacher } from "../_api/teacherApi";
function NewTeacher({teachers, setTeachers}) {
  const [isNewTeacher, setIsNewTeacher] = useState(false);

  const addNewTeacher = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));
    addTeacher(object, setIsNewTeacher, teachers, setTeachers);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <button
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring p-2 rounded-lg border-2  w-full sm:w-80 hover:scale-105"
        onClick={() => setIsNewTeacher(() => true)}
      >
        Ajouter enseignant
      </button>
      <Modal isOpen={isNewTeacher} onClose={() => setIsNewTeacher(() => false)}>
        <h2 className="font-bold text-center mb-8">Nouveau Enseignant</h2>

        <form onSubmit={addNewTeacher} className="w-72 ">
          <input
            className=" bg-lightGray w-full bg-gray-100 mb-6 py-1.5 rounded-lg  text-center"
            type="text"
            name="teacher_name"
            placeholder="Nom de l'Enseignant"
          />
          <input
            className=" bg-lightGray w-full bg-gray-100 mb-6 py-1.5 rounded-lg  text-center"
            type="text"
            name="teacher_title"
            placeholder="Titre de l'Enseignant"
          />
          <input
            type="submit"
            onClick={() => addNewTeacher}
            className=" bg-violet-primary w-full bg-violet-100 py-1.5 rounded-lg border-2 border-violet-secondary"
            value="Ajouter"
          />
        </form>
      </Modal>
    </div>
  );
}

export default NewTeacher;