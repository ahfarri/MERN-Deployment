import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import brickimg from '../images/brick.jpeg';

const Viewpet = () => {
    const { id } = useParams();
    const [likes, setLikes] =useState(0);
    const history = useHistory();
    const [petInfo, setPetInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log(res)
                setPetInfo(res.data.results)})
            .catch(err=>console.log(err))       
    },id);

    const deleteOne = (e)=> {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(res=>{
                console.log(res)
                history.push("/")})
            .catch(err=>console.log(err))
    };
    const liked = (e)=> {
        setLikes(likes+1)
    };

    return (
        <div className="height" style={{backgroundImage: `url(${brickimg})`}}>
            {
            <>
            <div className="row">
                <h2 className="col text-end m-5 cursive">Details about:  {petInfo.name}</h2>
                <div className="col m-5">
                    <button onClick={deleteOne} className="btn btn-light m-2">Adopt {petInfo.name}</button>
                    <Link to="/" className="btn btn-light navy">Back to Home</Link>
                </div>
            </div>
            <div className="cursive row mb-5 width bg-view">
                <div className="col-6 text-light">
                    <h3>Pet Type:</h3>
                    <h3>Description:</h3>
                    <h3>Skills:</h3>
                </div>
                <div className="col-6 text-light">
                    <h3>{petInfo.type}</h3>
                    <h3>{petInfo.description}</h3>
                    <h3>{petInfo.skill1}</h3>
                    <h3>{petInfo.skill2}</h3>
                    <h3>{petInfo.skill3}</h3>
                </div>
            </div>
            <div>
                <button className="btn btn-success" disabled={likes} onClick={liked} >Like {petInfo.name}</button>
                <p>{likes} like(s)</p>
            </div>
            </>
            }
        </div>
    );
};



export default Viewpet;