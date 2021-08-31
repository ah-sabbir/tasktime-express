import Content from "./Top/Content";



const Main = () => {

    return (
        <div className="container w-full mx-auto pt-20">

            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                <Content/>
                <hr className="border-b-2 border-gray-600 my-8 mx-4"></hr>
            </div>
        </div>    
    )
}
export default Main;