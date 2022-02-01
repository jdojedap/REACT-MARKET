const urlCrud = 'http://localhost:3001';


const getListTeachers = async () => {
    const response = await fetch(`${urlCrud}/usuarios`);  
    const data = await response.json();     
    return  data;
}
const findByIdTeacher = async (teacherId) => {
    const response = await fetch(`${urlCrud}/usuarios/${teacherId}`);  
    const data = await response.json();     
    return  data;
}

const createTeacher = async (teacher) => {

    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'POST',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateTeacher = async (teacher) => {
  
    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'PUT',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListTeachers,
    createTeacher,
    updateTeacher,
    findByIdTeacher

}