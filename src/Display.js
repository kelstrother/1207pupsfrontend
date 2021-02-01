import React from "react";

const Display = (props) => {

  // DESTRUCTURING DOGS FROM PROPS
const {dogs} = (props)
//  LOADING FUNCTION FOR IF DOGS EXIST
  const loaded = () => {
    return (<div style ={{ textAlign: "center" }}>
      {dogs.map(dog => {
        return (<article key={ dog._id } 
        style= {{padding: "1rem"}}>
          <img src={dog.img} 
            style= {{ 
            height: "400px", 
            border: '2px solid black' }}/>
          <h1>{ dog.name }</h1>
          <h3>{ dog.age }</h3>
          <button 
            style={{ 
            marginRight: '.8rem'}} 
            onClick={() => {
            props.selectDog(dog)
            props.history.push('/edit')
          }}>Edit Pup</button>
          <button 
            style={{ 
            marginLeft: '.8rem'}} 
            onClick={() => {
            props.deleteDog(dog)
          }}>Delete Pup</button>
        </article>
        )
      })}
    </div>
    )
  }
  const loading = <h1>Loading...</h1>
  return dogs.length > 0 ? loaded() : loading
};

export default Display;
