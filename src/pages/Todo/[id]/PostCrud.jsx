// import { useState } from "react/cjs/react.development"
// import { useState } from "react/cjs/react.production.min"

import Form from '../../../components/form'

export default function NewDoc() {
    const formData = {
        title: "",
        content: "",
    }
    return (
        <div>
        <Form formData={formData} />
        </div>
    )
}
