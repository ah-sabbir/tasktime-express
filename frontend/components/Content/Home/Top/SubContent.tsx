interface props {
    name: string;
    amount: string;
    icon: any;
    logo: any;
}
const SubContent = (props:props) => {
    return (
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                    
        <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                    {props.logo}
                </div>
                <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-400">{props.name}</h5>
                    <h3 className="font-bold text-3xl text-gray-600">{props.amount}{props.icon}</h3>
                </div>
            </div>
        </div>
        
    </div>
    )
}
export default SubContent;