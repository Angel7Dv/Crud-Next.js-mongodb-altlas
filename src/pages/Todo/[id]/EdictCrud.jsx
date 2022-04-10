import Form from '../../components/form'
import useSWR from 'swr'
import { useRouter } from 'next/router'

//  url= /:id/EdictCrud  
// por ser una ruta anidada de [id]


// necesario
// const fetcher = (url) => (
//     fetch(url)
//     .then((res)=> res.json())
//     .then((json)=> json.data())
// )

const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    const { data } = await res.json();

    return data;
};


export default function NewDoc() {
    // extraer la id de la url
    const router = useRouter()
    const { id } = router.query

    // extraer datos
    const { data, error } = useSWR(id ? `/api/test1/${id}` : null, fetcher)
    // respuesta en el html de error o carga
    if (!data) {
        return (
            <p>LOADING...</p>
        )
    }
    if (error) {
        return (
            <p>LOADING...</p>
        )
    }


    //extrae los dato del objeto  //si exite la id extrae de la api, extreido por la url


    const formData = {
        title: data.title,
        content: data.content,
    }
    return (
        <div>
            <Form formData={formData} edit={true} />
        </div>
    )
}
