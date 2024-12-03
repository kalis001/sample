import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function PostData() {

    const navi = useNavigate();

    const api = 'https://67459a1a512ddbd807f8d80b.mockapi.io/api'

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        gender:"Male"
    })

    function handleChange(e){
        const {name,value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        })
    }

    
    function handleSubmit(e){
        e.preventDefault();

        axios.post(api,formData)
        .then(()=>{
            navi('/')
        })
    }
    

    return (
        <div>
            <form className='card w-50 p-2 mx-auto mt-3' onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" name='name' value={formData.name} onChange={handleChange} class="form-control" id="inputName"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" name='email' value={formData.email} onChange={handleChange} class="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" name='password' value={formData.password} onChange={handleChange} id="inputPassword3" max={8}/>
                    </div>
                </div>
                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="Male" onChange={handleChange} checked={formData.gender==='Male'} />
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} />
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                        </div>
                    </div>
                </fieldset>
                
                <button type="submit" class="btn btn-primary w-25 mx-auto"> Create </button>
            </form>
        </div>
    )
}