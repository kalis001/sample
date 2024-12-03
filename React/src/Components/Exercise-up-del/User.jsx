import React, { useEffect, useState } from 'react'

export default function User() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const url = 'https://6721d21398bbb4d93ca9ccb0.mockapi.io/user'
  const [res, setres] = useState([])


  function inp1(n) {
    setname(n.target.value)
  }
  function inp2(e) {
    setemail(e.target.value)
  }
  function submit() {
    const data = {
      name: name,
      email: email
    }
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(() => {
        alert('Data added')
      })



  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setres(data))
      .catch(err => console.log(err));
  })

  const [names, setnames] = useState('');
  const [emails, setemails] = useState(' ');


  async function getedit() {
    const id = localStorage.getItem('id')
   await fetch('https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/',id)
      .then((values) => values.json())
      .then((getval) => {

        setnames(getval.name)
        setemails(getval.email)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {

    getedit()
  },[])

  function inp1e(n) {
    setnames(n.target.value)
  }
  function inp2e(e) {
    setemails(e.target.value)
  }





  return (
    <div>



      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Save data here
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input className='form-control' type="text" name="" id="" onChange={inp1} />
              <input className='form-control' type="text" name="" id="" onChange={inp2} />
              <button className='btn btn-primary' onClick={submit}>Submit</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
      <table border={3}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            res.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#example" onClick={function setedit() {

                      // fetch('https://672de820fd89797156443a23.mockapi.io/data/' + item.id)
                      //   .then(() => {
                          localStorage.setItem('id', item.id)
                        // })
                        // .catch(err => {
                        //   console.log(err)
                        // })
                    }}>
                      Edit
                    </button>

                    <div class="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <input className='form-control' type="text" name="" id="" value={names} onChange={inp1e} />
                            <input className='form-control' type="text" name="" id="" value={emails} onChange={inp2e} />
                            <button className='btn btn-primary' data-bs-dismiss="modal" onClick={
                              function handleupdate() {
                                const data = {
                                  name: names,
                                  email: emails
                                }

                                fetch('https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/' + item.id, {
                                  method: 'PUT',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify(data)
                                })
                                  .then(() => {
                                    alert("updated")
                                    localStorage.removeItem('id')
                                    window.location.reload()

                                  })
                                  .catch(err => {
                                    console.log(err)
                                  })

                              }
                            }>Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>


                    <button className='btn btn-danger' onClick={
                      function erase() {
                        fetch(`https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/${item.id}`, {
                          method: 'Delete'
                        })
                          .then(() => {
                            alert('Data Deleted')
                          })
                          .catch(console.log('error'))
                      }}>delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>






    </div>
  )
}
