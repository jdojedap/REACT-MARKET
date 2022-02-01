import React, { useState } from "react";
import { createTeacher } from '../service/MarketService'

function MarketCreate() {

  const [id, setid] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [status, setstatus] = useState('');



  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      id: id,
      username: username,
      password: "password",
      status: "status",
     
    }
    createTeacher(objeto)

  }

  const onChange = (event) =>{
    if(event.target.name==='id')
    {
    setid(event.target.value)
    }
    if(event.target.name==='username')
    setusername(event.target.value)

    if(event.target.name==='password')
    setpassword(event.target.value)

    if(event.target.name==='status')
    setstatus(event.target.value)

   
  }

  return (
    <div>
      <h2>AGREGAR CARNICOS</h2>
      <form onSubmit={onSubmit}>
        <label>
          id
          <input 
            name="id"
            value={id}
            onChange={onChange}
          />
        </label>
        <label>
          username
          <input 
            name="username"
            value={username}
            onChange={onChange}
          />
        </label>
        <label>
          password
          <input 
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>

        <label>
          status
          <input 
            name="status"
            value={status}
            onChange={onChange}
          />
        </label>

        

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default MarketCreate;