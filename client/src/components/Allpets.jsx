import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import petimg1 from '../images/pexels-photo-3628100.jpeg';
import brickimg from '../images/brick.jpeg'
import paw from '../images/paw1.png';
import bird from '../images/bird.png';
import cat from '../images/cat.png';


const Allpets = () => {
    const [listOfPets, setListofPets] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                setListofPets(res.data.results)
                console.log(res.data.results)})
            .catch(err=>console.log(err))       
    }, []);

    return (
        <div style={{backgroundImage: `url(${brickimg})`}} class="p-3">
            {
            <>
            <Link to="/pets/new" className="row offset-10 navy btn btn-light">Add a Pet to the Shelter</Link>
            <div>
                <img className="img4" src={cat} alt="cat print"></img>
                <img className="img3" src={bird} alt="bird outline"></img>
                <img className="img2" src={paw} alt="paw print"></img>
                <img className="img-thumbnail mb-5" src={petimg1} alt="Loving pets"></img>
                <img className="img2" src={paw} alt="paw print"></img>
                <img className="img3" src={bird} alt="bird outline"></img>
                <img className="img4" src={cat} alt="cat print"></img>
            </div>
            <div className="container-sm">
            <table className="table caption-top">
                <caption className="fonts navy text-center cursive">Pets looking for a good home:</caption>
                <thead className="table-light">
                    <tr>
                        <th className="info" scope="col">Name</th>
                        <th className="info" scope="col">Type</th>
                        <th className="info" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfPets.map((Pet,i) =>{
                        return <tr className="table-primary" key={i}>
                                    <td className="navy">{Pet.name}</td>
                                    <td className="navy">{Pet.type}</td>
                                    <td>
                                        <Link to={`/pets/${Pet._id}`} className="navy">Details |</Link>
                                        <Link to={`/pets/${Pet._id}/edit`} className="navy"> Edit</Link>
                                    </td>
                                </tr>
                            })}
                </tbody>
            </table>
            </div>
            </>
            }
        </div>
    );
};

export default Allpets;