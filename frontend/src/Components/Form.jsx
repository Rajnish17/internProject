import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Form = () => {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        gender: "",
        qualification: "",
        skill: "",
        desc: ""

    };

    const [data, setData] = useState(initialState);


    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }


    const handleSubmit = async() => {

        console.log(data)
       await axios.post(`http://localhost:8080/user/register`, data).then((res) => {
            // console.log(res.status)
            if (res.status == 201) {
                alert("sucess")
            }
            setData(initialState);
        }).catch((err) => {
            console.log(err)
        });
    }


    return (
        <div className='Container'>
            <div>
                Name<input placeholder='Name' type="text" name={"name"} value={data.name} onChange={handleChange} />
            </div>

            <div>
                Email <input placeholder='Email' type="email" name={"email"} value={data.email} onChange={handleChange} />
            </div>

            <div>
                Number  <input placeholder="Phone Number" type="number" name={"phone"} value={data.phone} onChange={handleChange} />
            </div>

            <div>
                Male <input type="radio" name={"gender"} value={"male"} onChange={handleChange} />
                Female <input type="radio" name={"gender"} value={"female"} onChange={handleChange} />
            </div>

            <div>
                <label>Qualification : </label>
                <select name={"qualification"} onChange={handleChange}>
                    <option value={"10th"} >10th</option>
                    <option value={"12th"} >12th</option>
                    <option value={"graduate"} >graduate</option>
                </select>
            </div>


            <div className="skill">
                Html: <input type="checkbox" name={"skill"} value={"html"} onChange={handleChange} />

                Css :<input type="checkbox" name={"skill"} value={"css"} onChange={handleChange} />

                Javascript:<input type="checkbox" name={"skill"} value={"javascript"} onChange={handleChange} />
            </div>

            <div className="dec">
                Description <textarea name={"desc"} value={data.desc} placeholder='Enter The Details Here' onChange={handleChange} />
            </div>

            <div>
                <button className='btn btn-primary' onClick={handleSubmit}>submit</button>
            </div>


            <div>
                <Link to="/show">Show Data</Link>
            </div>


        </div>
    )
}

export default Form