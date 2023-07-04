import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Show = () => {

    const[data,setData] =useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/showuser`).then((res)=>{
        //   console.log(res.data);
        setData(res.data)
        })
     },[])

  return (

    <div>
     <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Qualification</th>
            <th scope="col">Skill</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => {
            return ( <tr key={index}>
                <th scope="row">{ele.name}</th>
                <td >{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.gender}</td>
                <td>{ele.qualification}</td>
                <td>{ele.skill}</td>
                <td>{ele.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link to="/">Add New</Link>

    </div>
  )
}

export default Show