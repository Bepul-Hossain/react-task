import React, { useState } from 'react';
const List = [];

const Problem1 = () => {

    const [name, setName] = useState('');
    const [status, setStatus] = useState("");

    const [show, setShow] = useState('all');

    const handleClick = (val) => {
        setShow(val);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        List.push({ name: name, status: status });
        setName("");
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="col-auto">
                            {/* <input type="text" className="form-control" placeholder="Status"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                            /> */}

                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="">select</option>
                                <option value="active">active</option>
                                <option value="completed">completed</option>
                                <option value="pending">pending</option>
                                <option value="archive">archive</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary"
                                onClick={(e) => handleSubmit(e)}
                            >Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                List.length > 0 && 
                                List.filter((item)=>{
                                    if(item.status===show){
                                        return item;
                                    }else if(show==='all'){
                                        return item;
                                    }
                                })
                                .map(({ name, status }, index) =>
                                    <tr key={index}>
                                        <td>{name}</td>
                                        <td>{status}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;