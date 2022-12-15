import React, { useState } from "react"
import {
    Link,
    Head
} from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState(props.myNews.title);
    const [description, setDescription] = useState(props.myNews.description);
    const [category, setCategory] = useState(props.myNews.category);
    const [showNotif, setNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category,
            id: props.myNews.id
        }
        Inertia.post('/news/update', data);
        setTitle('')
        setDescription('')
        setCategory('')
    }

    return (
        <div className="bg-slate-100 min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

            <div className="mt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-center text-2xl font-semibold mb-4">Edit Postingan</h1>
                            <input value={title} onChange={(t) => setTitle(t.target.value)} type="text" placeholder="Title" className="input input-bordered w-full m-2" />
                            <input value={description} onChange={(d) => setDescription(d.target.value)} type="text" placeholder="Description" className="input input-bordered w-full m-2" />
                            <input value={category} onChange={(c) => setCategory(c.target.value)} type="text" placeholder="Category" className="input input-bordered w-full m-2" />
                            <div className='m-2 pt-2 flex gap-2'>
                                <button className="btn btn-primary" onClick={() => handleSubmit()}>Save changes</button>
                                <button className="btn btn-error text-white">Discard changes</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}