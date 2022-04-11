import React, { useState } from 'react'



export default function List({listWords}) {
    // const [listWords, setListWords] = useState([])

    // const getWords = async () => {
    //     const res = await fetch("/api/words", {
    //         method: "GET",
    //         headers: { // add the header for more segurity
    //             "Content-type": "application/json"
    //         },
    //     })
    //     const { data } = await res.json()
    //     setListWords([...listWords, data])
    // }

    console.log(listWords)

    return (
        <div className="w-1/3 text-center">
            <h1>

                List panel
            </h1>

            <div className='text-left mx-2'>

            {listWords.map((i) => 
                <div key={i._id}>
                    {i.word}
                    asdsa
                </div>
            )}
            </div>


        </div>
    )
}



