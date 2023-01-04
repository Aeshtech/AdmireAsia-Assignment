import React from 'react'

export const EditForm = ({data}) => {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="row gap-0">
                                    <div className="col-6">
                                        <label for="i3" class="form-label">Id:</label>
                                        <input type="text" class="form-control" id="i3" value={data?.id}/>
                                    </div>
                                    <div className="col-6">
                                        <label for="i1" class="form-label">Category:</label>
                                        <input type="text" class="form-control" id="i1" value={data?.category} />
                                    </div>
                                    <div className="col-6">
                                        <label for="i2" class="form-label">Brand:</label>
                                        <input type="text" class="form-control" id="i2" value={data?.brand} />
                                    </div>
                                    <div className="col-6">
                                        <label for="i4" class="form-label">Price:</label>
                                        <input type="text" class="form-control" id="i4" value={data?.price}/>
                                    </div>
                                    <div className="col-6">
                                        <label for="i5" class="form-label">Rating:</label>
                                        <input type="text" class="form-control" id="i5" value={data?.rating} />
                                    </div>
                                    <div className="col-6">
                                        <label for="i6" class="form-label">Stock:</label>
                                        <input type="text" class="form-control" id="i6" value={data?.stock}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
