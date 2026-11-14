import emptyCart from "../../assets/images/illustration-empty-cart.svg"


function Cart(){

    return(
        <div className="bg-Rose-50 rounded-xl p-6  md:w-[30%]">
            <h2 className="text-Red font-bold text-xl">Your Cart (0)</h2>
            <div className="flex flex-col items-center gap-6 mt-10">
                <img src={emptyCart} />
                <p className="text-Rose-500 font-semibold text-xs mb-4">Your added items will appear here</p>
            </div>
        </div>
    )
}

export default Cart;