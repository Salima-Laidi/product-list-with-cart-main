import cart from "../../assets/images/icon-add-to-cart.svg"
import increment from "../../assets/images/icon-increment-quantity.svg"
import decrement from "../../assets/images/icon-decrement-quantity.svg"
import{useState} from "react";

function AddToCart({selected, setSelected}){
    const [amount, setAmount] = useState(1)
    function handleDecrement(){
        if(amount >1){
            setAmount(amount - 1)
        }else{
            setSelected(false)
        }
    }
    return(
        <div className="absolute -bottom-5 left-24 md:left-1/3 hover:cursor-pointer">
            {selected?( 
            <div className="bg-Red px-4 py-2 rounded-full flex gap-8 items-center">
                <button className="border border-Rose-50 w-5 h-5 flex flex-col items-center justify-center rounded-full" onClick={handleDecrement}><img src={decrement} /></button>
                <span className="text-xs text-Rose-50 font-medium">{amount}</span>
                <button className="border border-Rose-50 w-5 h-5 flex flex-col items-center justify-center rounded-full" onClick={() => setAmount(amount + 1)}><img src={increment} /></button>
            </div>)
            :(
            <button className="bg-Rose-50 px-4 py-2 rounded-full flex gap-2 items-center border border-Rose-500 " onClick={()=> setSelected(true)}>
                <img src={cart} />
                <span className="text-xs text-Rose-900 font-medium">Add to Cart</span>
            </button>)
        }
        </div>
    )
}







function Card({item}){
    const [selected, setSelected] = useState(false)
    // item.selected = selected 
    return(
        <div>
            <picture className="relative" >
                {/* For mobile */}
                <source media="(max-width: 375px)" srcSet={item.image.mobile}/>
                {/* Default image for desktop */}
                <img src={item.image.desktop} className={`rounded-xl ${selected&& "border-2 border-Red"}`} /> 
            <AddToCart selected={selected} setSelected={setSelected}/>
            </picture>
            <div className="mt-8">
                <p className="text-Rose-400 font-medium">{item.category}</p>
                <p className="text-Rose-900 font-medium">{item.name}</p>
                <p className="text-Red font-medium">${item.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Card;