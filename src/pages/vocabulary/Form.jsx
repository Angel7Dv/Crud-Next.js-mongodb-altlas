import React from 'react'
import { useState } from 'react'



export default function Form() {
  const [formData, setFormData] = useState({
    word: ""
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }

  const handleSubmit = e => {
    e.preventDefault()
    e.target.reset()
    postData(formData)
  }

  const postData = async (i) => {
    try {
      console.log("accion")
      const res = await fetch("/api/words", {
        method: "POST",
        headers: { // add the header for more segurity
          "Content-type": "application/json"
        },
        body: JSON.stringify(i) // turn our data in format json
      })
      const data = await res.json()

    } catch (error) {

    }
  }

  return (
    <div className='flex flex-col justify-center text-center space-y-2 mt-12 rounded-xl py-8 px-4 bg-slate-700'>

      <div>

        add new word
      </div>

      <div>
        <form onSubmit={handleSubmit} action="" method='POST' className='flex justify-center flex-row'>
          <input
            value={formData.word}
            name="word"
            onChange={handleChange}
            autoComplete="off"
            type="text" className='text-gray-900 px-4 py-2' />

          <button type="submit" className='border border-gray-900 px-4 rounded-md mx-2 '>
            add
          </button>

        </form>
      </div>


    </div>
  )
}
