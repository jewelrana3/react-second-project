import React, { useEffect, useState } from 'react';
import Button from '../Header/Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';



const Card = () => {
    const [data,setData] = useState([]);
    const [showAll,setShowAll] = useState(false);
    const [singleData,setSingleData] = useState({})
    const [unique,setUnique] = useState(null)
    console.log(unique)

    const handleShowAll=()=>{
        setShowAll(true)
    }
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${unique}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[unique])

    useEffect(()=>{
        const loadData= async()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            setData(data.data.tools)
            // console.log(data.data.tools)
        }
        loadData()
    },[])
    
    return (
        <>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12  my-6'>
           {/* {
                data.map((singleData)=>{
                   return <SingleData key={singleData.id} singleData = {singleData} />
                })
            } */}
            {
                data.slice(0,showAll ? 12:6).map((singleData)=>(
                    <SingleData singleData={singleData} key={singleData.id}
                    setUnique = {setUnique}/>
                ))
            }
           </div>
            {
                !showAll && 
                (<span onClick={handleShowAll}><Button>Show All</Button></span>
                )}
                <Modal />
        </>
    );
};

export default Card;