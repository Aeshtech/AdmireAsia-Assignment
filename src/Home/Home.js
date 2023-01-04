import React, { useEffect, useState } from 'react'
import { Pagination } from './Pagination';
import Records from './Records';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page   
    const [recordsPerPage] = useState(5);

    // Now, we need the indices of the first and last record on the current page.
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Records to be displayed on the current page
    const currentRecords = data.slice(indexOfFirstRecord,
        indexOfLastRecord);
    // Calculate the number of pages.
    const nPages = Math.ceil(data.length / recordsPerPage)


    //fetching data
    useEffect(() => {
        const fetchData = async () => {
            fetch("https://dummyjson.com/products")
                .then(response => {
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = response.status;
                        return Promise.reject(error);
                    } else {
                        return response.json();
                    }
                }).then(
                    data => setData(data?.products)
                ).catch(
                    error => console.log(error)
                ).finally(
                    onfinally => setLoading(false)
                )
        }

        setLoading(true);
        fetchData();
    }, [])

    return (
        <section>
            <div className='container px-md-5'>
                <div className='mt-5 d-flex justify-content-between flex-column flex-md-row'>
                    <h4 className='d-inline'>
                        Country List
                    </h4>
                    <div className='d-flex'>
                        <button className="btn btn-success text-light me-2">Add Country</button>
                        <button className="btn btn-success text-light me-2">Import</button>
                        <button className="btn btn-success text-light me-2">Export to Excel</button>
                    </div>
                </div>

                <Records data={currentRecords} loading={loading} />
                {loading ? null : <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />}

            </div>
        </section>
    )
}
