import { Heart } from "lucide-react";
import productImg from "../assets/productImg.png";
import { checklistItems } from "../constants";

const Products = () => {
  return (
    <div className="mt-16">
        <div className = "text-center">
            <span className = "bg-neutral-800 text-purple-400 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"> 
            Products
            </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Unleash Your 
            <span className="bg-gradient-to-r from-violet-400 to-violet-700 text-transparent bg-clip-text"> Keyboard’s </span>
        Personality.</h2>
        <div className="flex flex-wrap justify-center items-center">
            <div className="pt-5 lg:p-2 w-2/3 md:w-5/12 lg:w-4/12">
                <img src={productImg}></img>
            </div>
            <div className="flex-col pt-5 lg:pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12 items-start md:mx-24 lg:mx-0">
                        <div className="text-pink-400 mx-6 bg-neutral-900 w-10 p-2 justify-center items-center rounded-full">
                            <Heart />
                        </div>
                        
                        <div>
                            <a href="#" className="mt-1 mb-2 text-xl font-semibold underline hover:text-pink-300">{item.title}</a>
                            <p className="text-xs lg:text-base mr-7 text-neutral-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products