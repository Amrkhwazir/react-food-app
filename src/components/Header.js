import "./App.css"

// HEADER
export function Headers(){
return (
    <h1 style={{color: "#e1c362",textTransform: "uppercase", letterSpacing: "2px", fontFamily: "monospace", fontSize: "34px", fontWeight: "500"}}>fast react pizza co.</h1>
)
}

// SUB-HEADER
export function SubHeaders(){
return (
    <>
    <div className="wall"></div>
    <h3 style={{ letterSpacing: "2px", fontSize: "28px", fontWeight: "500", marginTop: "50px"}}>our menu</h3>
    <div className="wall"></div>
    <br />
    <p>authentic italian cusiine, 6 creative dishes to choose from. all from our stone oven, all delicious.</p>

    </>
)
}

