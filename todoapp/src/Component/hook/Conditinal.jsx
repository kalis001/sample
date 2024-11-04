import React from 'react'

export default function Conditinal() {

    const a =19;
  return (
    <div>

        <div>
            {
                a>=10?(<div className='bg-success'>welcome !!</div>):(<div className='bg-danger'>hello world if failed</div>)
            }
        </div>
    </div>
  )
}
