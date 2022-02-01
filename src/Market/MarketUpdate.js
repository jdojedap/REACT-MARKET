import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdTeacher,updateTeacher } from '../service/MarketService'
import './Market.css'

function MarketPage() {
  
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState({id:'',username:'',password:'',status:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateTeacher(teacher);

    alert ('CAMBIOS REALIZADOS')

  }
  const onChange = (event) =>{
    if(event.target.name==='id')
      setTeacher({...teacher,id:event.target.value})    
    if(event.target.name==='username')    
      setTeacher({...teacher,username:event.target.value})
    if(event.target.name==='password')
      setTeacher({...teacher,password:event.target.value})
    if(event.target.name==='status')    
      setTeacher({...teacher,status:event.target.value})
   
  }

  useEffect(() => {    
    findByIdTeacher(teacherId).then(data => {
      setTeacher(data);  
    }
    );
  }, [teacherId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>cambiar datos</h2>
  
          <input 
          className="formUpdateInput"
            name="id"
            placeholder="id" 
            value={teacher.id}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="username" 
            name="username"
            value={teacher.username}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="password"
            name="password"
            value={teacher.password}
            onChange={onChange}
          />
           
        
        <input 
         className="formUpdateInput"
         placeholder="status"
          name="status"
          value={teacher.status}
          onChange={onChange}
        />
       
        

        <button type="submit" className="formUpdateBtn">GUARDAR INFORMACION</button>
        

      </form>
      
    </div>
  );
}

export default MarketPage;