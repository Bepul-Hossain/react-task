import React, { useState,useEffect } from 'react';

const Problem2 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [data, setData] = useState([]);
    const handleModal = () => {
        setShow(!show);
        setShow2(false);

    }
    const handleModal2 = () => {
        setShow(false);
        setShow2(!show2);
    }
   

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/',)
           .then((response) => response.json())
           .then((res) => {
              console.log(res);
                setData(res);
           })
           .catch((err) => {
              console.log(err);
           });
     }, []);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleModal}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button"  onClick={handleModal2}>US Contacts</button>
                </div>

                {
                    show && (
                        <div style={{height:'80vh', width:'80vw', top:'30px', position:'fixed', background:'gray'}}>
                            <h3 >Modal A</h3>
                            <section style={{display:'flex', justifyContent:'center'}}>
                                {/* button A=> switch to modal B */}
                                <button style={{backgroundColor:'#46139f'}}>All Contacts</button>
                                {/* button B=> switch to modal A */}
                                <button style={{backgroundColor:'#ff7f50'}} onClick={handleModal2}>Contact US</button>
                                {/* button C */}
                                <button style={{backgroundColor:'white', borderColor:'#46139f'}} type="button" onClick={handleModal}>
                                    Close
                                </button>
                            </section>
                        </div>
                    )
                }
                 {
                    show2 && (
                        <div style={{height:'80vh', width:'80vw', top:'30px', position:'fixed', background:'gray'}}>
                            <h3 >Modal B</h3>
                            <section style={{display:'flex', justifyContent:'center'}}>
                                {/* button A=> switch to modal B */}
                                <button style={{backgroundColor:'#46139f'}} onClick={handleModal}>All Contacts</button>
                                {/* button B=> switch to modal A */}
                                <button style={{backgroundColor:'#ff7f50'}}>Contact US</button>
                                {/* button C */}
                                <button style={{backgroundColor:'white', borderColor:'#46139f'}} type="button" onClick={handleModal2}>
                                    Close
                                </button>
                            </section>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Problem2;