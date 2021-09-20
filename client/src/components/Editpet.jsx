import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import field from '../images/pexels-field.jpeg';

const Editpet = () => {
    const { id } = useParams();

    const history = useHistory();
    const [petInfo, setPetInfo] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })
    const [ValErrors, setValErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log(res)
                setPetInfo(res.data.results)})
            .catch(err=>console.log(err))       
    },id);

    const changeHandler = (e)=> {
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value,
        })
    };

    const editPet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${id}`, petInfo)
            .then(res=>{console.log(res)
                if(res.data.err){ 
                    setValErrors(res.data.err.errors)
                }else{ 
                    history.push("/"); 
                }})
            .catch(err=>console.log(err))
    };

    return (
        <div className="height no-r p-3" style={{backgroundImage: `url(${field})`}}>
            {
            <><Link to="/" className="row offset-10 btn btn-light navy">Back to Home</Link>
            <h4 className="navy text-light cursive">Edit {petInfo.name}</h4></>
            }
            <form className="container-sm" onSubmit={ editPet }>
            <div className="input-group mb-3">
                <span className="input-group-text">Name:</span>
                <input className="form-control" type="text" name="name" onChange={ (e) => changeHandler(e)  } value={petInfo.name}/>
                <p className="text-danger">{ValErrors.name? ValErrors.name.message: ""}</p>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Type:</span>
                <input className="form-control" type="text" name="type" onChange={ (e) => changeHandler(e)  } value={petInfo.type}/>
                <p className="text-danger">{ValErrors.type? ValErrors.type.message: ""}</p>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Description:</span>
                <input className="form-control" type="text" name="description" onChange={ (e) => changeHandler(e)  } value={petInfo.description}/>
                <p className="text-danger">{ValErrors.description? ValErrors.description.message: ""}</p>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Skill 1:</span>
                <input className="form-control" type="text" name="skill1" onChange={ (e) => changeHandler(e)  } value={petInfo.skill1}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Skill 2:</span>
                <input className="form-control" type="text" name="skill2" onChange={ (e) => changeHandler(e)  } value={petInfo.skill2}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Skill 3:</span>
                <input className="form-control" type="text" name="skill3" onChange={ (e) => changeHandler(e)  } value={petInfo.skill3}/>
            </div>
            
            <input className="btn btn-info" type="submit" value="Edit Pet" />
        </form>
        </div>
    );
};



export default Editpet;