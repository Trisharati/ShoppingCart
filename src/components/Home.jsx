import React,{useContext} from 'react'
import data from '../Data/Data'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const redirect=useNavigate()
  const {addData} = useContext(Context)
    const add=(index)=>{
        addData(data[index])
        redirect('/cart')
    }

    
    return (
    <div className='d-flex flex-wrap justify-content-between'>
        {data.map((values,index)=>{
            console.log(values);
            const {id,name,price,pic} = values
            return (
      <div className="card" style={{width: "18rem"}} key={id}>
      <img src={pic} className="card-img-top" alt="..." style={{height : "300px"}}/>
      <div className="card-body">
        <p className="card-text">Product Name : {name} </p>
        <p className="mr-3 border border-secondary">Product Price : {price}</p>
        <button className='btn btn-secondary' onClick={()=>add(index)}>Add to Cart</button>
        <br />
      </div>
      
    </div>
       ) })}
    
    </div>
  )
}

export default Home