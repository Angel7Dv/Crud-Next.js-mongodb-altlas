import React from 'react'
import { useState } from "react"
import { useRouter } from "next/router"


export default function form({formData, edit = false}) {
    const router = useRouter()


    const [form, setForm] = useState(formData)

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!edit){
            postData(form)
        }else{
            setData(form)
        }
        setForm({ ...form, title: "", content: "", })
        e.target.reset()

    }

    const [message, setMessage] = useState([])

    const postData = async (i) => {
        setMessage([]);
        try {
            const res = await fetch('api/test1', {
                method: "POST", // asing what type of method of fetch
                headers: { // add the header for more segurity
                    "Content-type": "application/json"
                },
                body: JSON.stringify(i) // turn our data in format json

            })
            const data = await res.json()


            // catch errors
            if (!data.success) {
                for (const i in data.error.errors) {
                    let error = data.error.errors[i]
                    // console.log("ACCION", error.message)
                    setMessage((oldmenssage) => [
                        ...oldmenssage,
                        { message: error.message },
                    ]);
                }
            } else {
                setMessage([]);
                router.push("/")
            }

        } catch (error) {
            console.log("ERROR", error)
        }
    }
    const setData = async (i) => {
        setMessage([]);
        const { id } = router.query;
        try {
          const res = await fetch(`/api/test1/${id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(i),
          });
    
          const data = await res.json();
          console.log(data.error);
    
          if (!data.success) {
            for (const key in data.error.errors) {
              let error = data.error.errors[key];
              setMessage((oldmenssage) => [
                ...oldmenssage,
                { message: error.message },
              ]);
            }
          } else {
            setMessage([]);
            router.push("/");
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>

            <h1>add new doc</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    autoComplete="off"
                    value={form.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="content"
                    name="content"
                    autoComplete="off"
                    value={form.content}
                    onChange={handleChange}
                />
                <button type="submit">{edit? "editar": "add"} </button>

                {message.map(({ message }) => (
                    <p key={message}>{message}</p>
                ))}
            </form>
        </div>
    )
}
