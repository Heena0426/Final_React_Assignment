import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate=useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6615fad2b8b8e32ffc7c0ce9.mockapi.io/crud',{
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/Read');
        })
    }
  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
        <div className='mb-2 mt-2'>
            <Link to='/'>
            <button className='btn btn-primary'>Read Data</button>
            </Link>
            </div>
            <div className='bg-primary p-4 text-center'>
                <h1>Read Data</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label> Enter Name:</label>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label> Enter Age:</label>
                    <input type='number' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label> Enter Email:</label>
                    <input type='text' placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <br/>
              <div className='d-grid'>
              <input type='submit' value='Submit' className='btn btn-primary'></input>
              </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Create