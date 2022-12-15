import React from "react"
import {
    Link,
    Head
} from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";

export default function HomePage(props) {
    return (
        <div className="bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center items-center lg:flex-row lg:flex-wrap lg:items-stretch flex-col gap-4 mt-3">
                <NewsList news={props.news.data} />
            </div>
            <div className="p-6 flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    )
}