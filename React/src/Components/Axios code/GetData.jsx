import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function GetData() {

    const navi = useNavigate();
    const api = 'https://67459a1a512ddbd807f8d80b.mockapi.io/api'

    const [views,setViews] = useState([]);

    useEffect(()=>{
        axios.get(api)
        .then((res)=>{
            setViews(res.data)
        })
    },[]);

    function handleDelete(id){
        axios.delete(`${api}/${id}`)
        .then(()=>{
            window.location.reload()
        })
    }

  return (
    <div>
        <button 
            onClick={()=>{
                navi('/create')
            }}
        className="btn btn-success mx-auto d-block my-3">
            Add Data
        </button>

        <div className="d-flex gap-2">
            {
                views.map((item,index)=>{
                    return(
                        <div className="card w-25">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {item.name}
                                </h4>
                                <h6 className="card-subtitle">
                                   Email : {item.email}
                                </h6>

                                <p className="card-text">Gender : {item.gender}</p>
                            </div>
                            <div className="card-footer text-end">
                                <button className="btn btn-dark"
                                    onClick={()=>{
                                        navi('/edit/'+item.id)
                                    }}
                                >Edit</button>
                                <button className="btn btn-danger ms-2"
                                    onClick={()=>{
                                        handleDelete(item.id)
                                    }}
                                >Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
