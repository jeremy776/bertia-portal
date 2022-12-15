import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { useEffect, useState } from 'react';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [showNotif, setNotif] = useState(false)

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data);

        // reset form
        setTitle('')
        setDescription('')
        setCategory('')

        // show notif
        setNotif(true);

        setTimeout(() => {
            setNotif(false);
        }, 3500)
    }

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get('/news');
        }
        return;
    }, [])

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Berita Saya" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            {showNotif && props.flash.message ? (
                                <div className="m-2 alert alert-success shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </div>
                            ) : ''}

                            <input value={title} onChange={(t) => setTitle(t.target.value)} type="text" placeholder="Title" className="input input-bordered w-full m-2" />
                            <input value={description} onChange={(d) => setDescription(d.target.value)} type="text" placeholder="Description" className="input input-bordered w-full m-2" />
                            <input value={category} onChange={(c) => setCategory(c.target.value)} type="text" placeholder="Category" className="input input-bordered w-full m-2" />
                            <div className='m-2 pt-2'>
                                <button className="btn btn-primary" onClick={() => handleSubmit()}>Buat Postingan</button>
                            </div>
                        </div>

                    </div>
                    <div className='pt-6 flex gap-4 flex-col'>
                        {props.myNews && props.myNews.length > 0 ? props.myNews.map((data, i) => {
                            return (
                                <div key={i} className="card w-full bg-base-100 shadow-sm border">
                                    <div className="card-body">
                                        <h2 className="card-title">{data.title}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>{data.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-inline">{data.category}</div>
                                            <div className="badge badge-outline">
                                                <Link href={route('edit.news')} method='get' data={{ id: data.id }} as='button'>
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-error text-white">
                                                <Link href={route('delete.news')} method='post' data={{id: data.id}} as='button'>
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h1 className='text-center font-bold text-2xl'>Anda belum memiliki berita</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
