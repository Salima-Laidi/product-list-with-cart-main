import{useState, useEffect}from "react";
import Card from "./components/card";
import Cart from "./components/cart";

function App() {
  const [data, setData] = useState([])
      useEffect(( )=>{
          async function fetchData(){
              const response = await fetch("/data.json");
              const result = await response.json();
              setData(result.map((item) =>({...item, quantity: 0})));
          }
          fetchData()
      },[])

      console.log(data) 
  return (
    < div className="p-5 md:p-20 flex flex-col md:flex-row gap-10 md:items-start">
      <div className="md:flex-1">
        <h1 className="text-4xl font-extrabold text-Rose-900">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mt-6">
          {
            // we use map and not foreach because map returns a new array and we can use it to render the components but foreach does not return anything
            data.map((item, index) =>(
              <Card key={index} item={item} setData={setData}/>
              
            ))
          }
        </div>
      </div>
        <Cart/>
    </div>
  )
}

export default App
