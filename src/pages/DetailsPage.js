import logo from "../assets/icons/hewnomey.jpg"
function DetailsPage ()  {

    return (
        <div className="flex justify-center">
           <p className="font-mono text-center text-5xl font-bold uppercase">NEW SINGLE</p>
           <img
                 src={logo}
                 alt="avatar"
                 className="w-[50%] my-3 bg-white rounded-full p-6"
            />  
        </div>
    );
}
export default DetailsPage; 