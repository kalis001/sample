import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Editdata() {

    // const [name, getname] = useState('')
    // const [email, getemail] = useState(' ')

    // const { id } = useParams();

    // async function renderdata() {
    //     await fetch(`https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/${id}`)
    //         .then((res) => res.json())
    //         .then((ans) => {
    //             return (getemail(ans.email),
    //                 getname(ans.name))
    //         })
    //         .catch(console.log('err'))
    // }

    // useEffect(() => {
    //     renderdata()

    // }, [id])



    // function Change(){
    //     const data = {
    //         name : name,
    //         email : email
    //     }
    //     fetch(`https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/${id}`,{
    //         method : 'PUT',
    //         headers : {'Content-Type':'application/json'},
    //         body : JSON.stringify(data)
    //     })
    //     .then(()=>{
    //         alert('Data Added')
    //     })
    //     .catch((err)=>{
    //         console.log(err);  
    //     })
    // }

    // function inp1(n){
    //     getname( n.target.value )
    //  }
    //  function inp2(e){
    //     getemail( e.target.value )
    //  }

    const [name, getname] = useState(' ')
    const [email, getemail] = useState(' ')

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/${id}`)
            .then((res) => res.json())
            .then((ans) => {
                return (
                    getname(ans.name),
                    getemail(ans.email)
                )
            })
            .catch((err) => {
                console.log(err);
            })
 }, [id] )

        function inp1(n) {
            getname(n.target.value)
        }
        function inp2(e) {
            getemail(e.target.value)
        }

        function Change() {
            const data = {
                name: name,
                email: email
            }
            fetch(`https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(() => {
                    alert('Data Edited')
                })
                .catch((err) => {
                    console.log(err);
                })
        }


        return (
            <div>
                <div className="container">
                    <input type="text" name="" value={name} onChange={inp1} id="" />
                    <input type="text" name="" value={email} onChange={inp2} id="" />
                    <button onClick={Change}>Change</button>
                </div>
            </div>
        )
    }
