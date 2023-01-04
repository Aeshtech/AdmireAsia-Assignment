import React, { useState } from 'react'
import { EditForm } from './EditForm';

const Records = ({ data }) => {
    const [record, setRecord] = useState({});
    return (
        <>
        <table className="table table-bordered mt-3 table-striped table-hover" style={{ border: "2px solid #eaeaea" }}>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Category</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" placeholder='Search Id' className='form-control' /></td>
                    <td><input type="text" placeholder='Search Thumbnail' className='form-control' /></td>
                    <td><input type="text" placeholder='Search Category' className='form-control' /></td>
                    <td><input type="text" placeholder='Search Brand' className='form-control' /></td>
                    <td><input type="text" placeholder='Search Price' className='form-control' /></td>
                    <td><input type="text" placeholder='Search Rating' className='form-control' /></td>
                    <td><input type="text" placeholder='Search Stock' className='form-control' /></td>
                    <td><button className='btn btn-primary'>Search</button></td>
                </tr>

                {
                    data?.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td><img src={item.thumbnail} alt="thumbnail" width="50" height="50" /></td>
                            <td>{item.category}</td>
                            <td>{item.brand}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                            <td>{item.stock}</td>
                            <td><button type="button" class="btn btn-link text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setRecord(item)}>Edit</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
        {/* ----------Edit Form--------- */}
        <EditForm data={record}/>
        </>
    )
}

export default Records;
