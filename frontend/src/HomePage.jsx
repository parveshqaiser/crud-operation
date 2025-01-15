
import React, { useEffect, useState } from 'react'
import "./home.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { initialValues } from './constants';

import del from "../Images/del.png";
import edit from "../Images/edit.png";

const HomePage = () => {

    let BASE_URL = "http://localhost:6060";

    const [show , setShow] = useState(false);

    const handleShow = ()=> setShow(true);
    const handleClose = ()=> {
        setShow(false);
        setFormValues(initialValues);
        setIsEdit(false);
        setIsDisabled(false);
    };

   const [formValues , setFormValues] = useState({
        name : {
            value : "",
            error : ""
        },
        age : {
            value : "",
            error : ""
        },
        profession : {
            value : "",
            error : ""
        },
        state : {
            value : "",
            error : ""
        },
        city : {
            value : "",
            error : ""
        }
   });

   const [tableData, setTableData] = useState([]);
   const [isLoading , setIsLoading] = useState(true);
   const [isEdit, setIsEdit] = useState(false);
   const [isDisabled, setIsDisabled] = useState(false); 

   useEffect(()=>{
        getData();
   },[]);

   async function getData()
   {
       try {
           let res = await axios.get(BASE_URL + "/getUsers", {withCredentials: true});
           if(res?.data?.success){
               setTableData(res.data.data || []);
               setIsLoading(false)
           }
       } catch (error) {
           console.log("error in getting all details ", error);
           setIsLoading(false)
       }
   }

    function handleChange(e)
    {
        let {name, value} = e.target;

        let newValues = {...formValues};
        if(name == "name" || name == "profession" || name == "state" || name == "city")
        {
            newValues[name] = {
                value : value.charAt(0).toUpperCase() + value.slice(1),
                error : !value ? "Required*" : ''
            };
        }
      
        if(name == "age"){
            newValues[name] = {
                value : value,
                error : !value ? "Required*" : (value > 0 && value <=19) ? "Age must be above 19" : ""
            };
        }

        setFormValues(newValues);
    }

    async function handleDelete(delId)
    {
        try {
            let res = await axios.delete(BASE_URL + `/delete/${delId}`, {withCredentials:true});
            if(res.data.success){
                toast.success(res.data.message, {duration:2000});
                getData();
            }

        } catch (error) {
            toast.error(error?.response?.data?.message, {duration:2000});
            console.log("error in deleting ", error);   
        }
    }

    function handleEdit(val)
    {
        setFormValues({
            id: val._id,
            name : {value : val.name},
            age : {value : val.age.toString()},
            profession : {value : val.profession},
            state : {value : val.state},
            city : {value : val.city},
        });
        setShow(true);
        setIsEdit(true);
    }

    async function handleSubmit()
    {
        console.log("****** ", Object.values(formValues));
        let inputField = Object.values(formValues).every(user => user?.value?.trim() !="");
        if(inputField == false){
            toast.error("All Input Fields Required", {duration:2000})
            return;
        }

        let data = {
            name : formValues.name.value,
            age : parseInt(formValues.age.value) || "",
            profession : formValues.profession.value,
            state : formValues.state.value,
            city : formValues.city.value,        
        }

        let updateValues = {
            id : formValues.id,
            name : formValues.name.value,
            age : parseInt(formValues.age.value) || "",
            profession : formValues.profession.value,
            state : formValues.state.value,
            city : formValues.city.value,    
        }

        console.log(data);

        if(isEdit)
        {
            // update
            try {
                let res = await axios.patch(BASE_URL + "/updateUser",updateValues , {withCredentials: true});
                if(res.data.success){
                    setIsDisabled(true)
                    toast.success(res.data.message, {duration:2000});
                    setTimeout(()=>{
                        setShow(false);
                        getData();
                        setFormValues(initialValues);
                        setIsDisabled(false);
                        setIsEdit(false);
                    },2000)
                };
            } catch (error) {
                console.log("err in updating ", error)
            }

        } else {
            // add
            try {
                let res = await axios.post(BASE_URL + "/createUser",data , {withCredentials: true});
                if(res.data.success){
                    setIsDisabled(true)
                    toast.success(res.data.message, {duration:2000});
                    setTimeout(()=>{
                        setShow(false);
                        getData();
                        setFormValues(initialValues);
                        setIsDisabled(false)
                    },2000)
                };
            } catch (error) {
                console.log("err in submiting ", error);
                toast.error(error?.response?.data?.message , {duration:2000})
            }
        }
    }

    return(
        <div className='main-box'>
            <Toaster />
            <main className='header-block'>
                <div>Manage <span style={{fontSize:"large",fontWeight:"bold"}}>Profile</span> </div>
                <div>
                    <button className='open-modal' onClick={handleShow}>Add New Profile</button>
                </div>
            </main>

            <div className='table-container'>
                <table className='table-box'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Profession</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        isLoading ? (<tr>
                                <td className='text-center' colSpan={6}>Loading...</td>
                            </tr>)  : tableData.length ? tableData.map(val => (
                            <tr key={val._id}>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.profession}</td>
                                <td>{val.state}</td>
                                <td>{val.city}</td>
                                <td className='td-block'>
                                    <div className='img-block'>
                                        <img onClick={()=>handleEdit(val)} title='Edit' src={edit} className='img img-1' />
                                    </div>
                                    <div className='img-block'>
                                        <img onClick={()=>handleDelete(val._id)} title='Delete' src={del} className='img img-2' />
                                    </div>
                                </td>
                            </tr>
                        )) : <tr >
                            <td colSpan={6} className='text-center'>No User Data Available</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>


            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? "Update Form " : "Registration Form"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-1" >
                            <Form.Label>Enter Full Name</Form.Label>
                            <Form.Control onChange={handleChange} autoComplete='off'  value={formValues.name.value} name='name' type="text"  />
                        </Form.Group>

                        <Form.Group className="mb-1" >
                            <Form.Label>Age</Form.Label>
                            <Form.Control onChange={handleChange} autoComplete='off' value={formValues.age.value} name='age' type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-1" >
                            <Form.Label>Profession</Form.Label>
                            <Form.Control onChange={handleChange} autoComplete='off' value={formValues.profession.value} name='profession' type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-1" >
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={handleChange} autoComplete='off' value={formValues.state.value} name='state' type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-1" >
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={handleChange} autoComplete='off' value={formValues.city.value} name='city' type="text"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={isDisabled} variant="success" onClick={handleSubmit}>
                        {isEdit ? "Update" :  "Submit"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HomePage;
