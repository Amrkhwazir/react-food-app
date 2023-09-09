import "./App.css"
import {useState, useEffect} from "react";

export function MenuBar(){
    const [menuArr, setMenuArr] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

  const dataFetching = async ()=>{
    try {
     
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`);
    const data = await res.json();
    // console.log(data.data.recipes);
    setMenuArr(data.data.recipes)

    } catch (error) {
        console.log(error)
    }
    };

    useEffect(()=>{
        dataFetching()
    }, [])
    
    const inputChangeHandle = (val) =>{
        // console.log(val)
        setSearchQuery(val.target.value)
    }
    

    const SearchDataHandler = ()=>{
        dataFetching()
    }

return (
    <div>
        <input
                type='text'
                placeholder='Enter your favourite dish'
                className='searchInput'
                value={searchQuery}
                onChange={inputChangeHandle}
            />
        <button onClick={SearchDataHandler} style={{backgroundColor: "#f1cf5f", border: "none", color: "white", padding: "6px", cursor: "pointer"}}>search</button>
        <div className='menuArea' style={{display: "flex",justifyContent:"center" , flexWrap: "wrap", padding: "10px"}}>
            <Menu menu={menuArr} />
        </div>
    </div>
)
}




function Menu({menu}){
    // console.log(menu)
    return(
        <>
    {
        menu.map((item, index)=> <Card key={index} image={item.image_url} title={item.title} publisher={item.publisher} />)    
    
    }    
        </>
    )
}
  

function Card(recipeItem){
    console.log(recipeItem)
return(
    <div className="subCard" style={{width: "200px", border: "1px solid black", margin: "10px", padding: "10px", display: "flex", justifyContent: "space-around", gap: "8px"}}>

     <div className="cardImage" style={{width: "110px"}}>
    <img style={{width: "80px", height: "90px", marginTop: "10px"}} src={recipeItem.image}/>   
    <button style={{marginTop: "10px", backgroundColor: "#edc742", border: "none", padding: "5px", color: "white", cursor: "pointer"}}>order now</button>
     </div> 

     <div className="cardInfo" style={{textAlign: "left"}}>
    <p className="title">{recipeItem.publisher}</p>
    <p className="desc">{recipeItem.title}</p>
    <p className="price">$12.00</p>
    </div> 

    </div>
)
    
}
  
  
  