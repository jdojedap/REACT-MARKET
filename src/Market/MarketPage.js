import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherList from './MarketList';
import Teacher from './Market'
import { getListTeachers } from '../service/MarketService'

function MarketPage() {

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    
    getListTeachers().then(data => {
      setTeachers(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>LISTADO DE USUARIOS</h2>
      <Link to='/createteacher' >
        AGREGAR NUEVO USUARIO
      </Link>
      <TeacherList>
        {
          teachers.map(item =>
            <Teacher
              key={item.id}
              itemTeacher={item} />
          )
        }
      </TeacherList>
    </div>
  );
}

export default MarketPage;