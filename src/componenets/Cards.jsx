const Card=({data})=>{
    return( 
    <div>    
    {data.map((currentItem,index)=>{

    if(!currentItem.urlToImage){
        return null;
    }
    else{
        return (
            <div className="card1" key={index}>
            <div className="card "  style={{width: "50rem",marginLeft:"350px", marginTop:"20px"}}>
                <img className="card-img-top" src={currentItem.urlToImage} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title"  >{currentItem.title}</h5>
                <p className="card-text">{currentItem.description}</p>
                <button href="#" className="btn btn-primary"  onClick={()=>window.open(currentItem.url)}>Read More</button>
            </div>
            </div>
            </div>
            );
    }
   
    })}
    </div>

    
    )
    
}
export default Card;



//style={{width: "18rem"}}



// const Card = ({ data }) => {
//     return (
//       <div>
//         {data.map((currentItem, index) => {
//           if (!currentItem.urlToImage) {
//             return null;
//           } else {
//             return (
//               <div className="card" style={{ width: '18rem' }} key={index}>
//                 <img className="card-img-top" src={currentItem.urlToImage} alt="Card image cap" />
//                 <div className="card-body">
//                   <h5 className="card-title">{currentItem.title}</h5>
//                   <p className="card-text">{currentItem.description}</p>
//                   <a href={currentItem.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
//     );
//   };
  
//   export default Card;
  