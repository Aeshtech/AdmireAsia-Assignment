import React from 'react'

export const EditForm = ({data}) => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row gap-0">
                                    <div className="col-6">
                                        <label htmlFor="i3" className="form-label">Id:</label>
                                        <input type="text" className="form-control" id="i3" value={data?.id}/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="i1" className="form-label">Category:</label>
                                        <input type="text" className="form-control" id="i1" value={data?.category} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="i2" className="form-label">Brand:</label>
                                        <input type="text" className="form-control" id="i2" value={data?.brand} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="i4" className="form-label">Price:</label>
                                        <input type="text" className="form-control" id="i4" value={data?.price}/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="i5" className="form-label">Rating:</label>
                                        <input type="text" className="form-control" id="i5" value={data?.rating} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="i6" className="form-label">Stock:</label>
                                        <input type="text" className="form-control" id="i6" value={data?.stock}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
