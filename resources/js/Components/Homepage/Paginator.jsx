import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {

    let prev = meta.links[0].url;
    let next = meta.links[meta.links.length-1].url;
    let curr = meta.current_page;

    return (
        <div className="btn-group">
            {prev && <Link href={prev} className="btn">«</Link>}
            <button className="btn">Page {curr}</button>
            {next && <Link href={next} className="btn">»</Link>}
        </div>
    )
}

export default Paginator;