import React from 'react'
import dbConnect from '../../lib/dbConect'
import Test1 from '../../models/Test1'
import Link from 'next/link'
export default function index({ result, error, success }) {
    return (
        <div>

            <h1>parametro id</h1>
            {result ? 
            <div>
                title: {result.title} 
                content: <p>{result.content}</p>
            </div>
             :
            
            error}

            <br />


            <hr />

            <Link href="/">
                <button > ⬅ Volver </button>
            </Link>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    try {
        await dbConnect()
        const result = await Test1.findById(params.id).lean() //toma el parametro de la url

        if (!result) {
            return { props: { success: false, error: "id valido pero no de esta data" } } //siempre debe devolver un props
        }

        result._id = result._id.toString()
        console.log(result)

        return { props: { success: true, result } } //siempre debe devolver un props

    } catch (error) {
        console.log(error)
        if (error.kind == "ObjectId") {

            return { props: { success: false, error: "id no valido" } } //siempre debe devolver un props
        } else {
            return { props: { success: false, error: "otro error" } } //siempre debe devolver un props
        }
    }
}