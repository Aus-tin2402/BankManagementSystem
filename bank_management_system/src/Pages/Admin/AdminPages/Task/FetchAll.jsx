import React, { useEffect, useState } from 'react'
import './FetchAll.css'
import axios from 'axios';
const FetchAll = () => {
    const [Object,setObject]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/GetAll`).then(sucess=>{
            setObject(sucess.data);
        }).catch(error=>{
            console.log(error);
            
        })
    },[])
  return (
    <>
        <section className="fetchAll" id="fetchAll">
            <div className="fetchAll-contianer">
                <table>
                    <thead>
                        <tr>
                            <th>Account-No</th>
                            <th>Account-Name</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.map((data,i)=>{
                                <tr>
                                    <th>{data.account_no}</th>
                                    <th>{data.name}</th>
                                    <th>{data.bal}</th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    </>
  )
}

export default FetchAll