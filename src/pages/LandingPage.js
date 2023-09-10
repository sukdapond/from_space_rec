import logo from "../assets/icons/artiz.png"
import { useNavigate } from "react-router-dom";
function LandingPage ()  {
    const navigate = useNavigate();
    const handleToDetail = () =>{
        navigate("/details");
    };
    return (
        <div className="text-center- font-mono ">
           <p className="font-mono text-center text-7xl text-white font-bold uppercase">artist_from_space</p>
           <div className="flex justify-center">
                <img
                 src={logo}
                 alt="avatar"
                 className="w-[15%] my-3 bg-white rounded-full p-6"
            />
           </div>
           <p className="text-md mt-2 font blod text-white mx-8 md:mx-36">
            I wear my hair up high Put on a necklace That I made I don’t fucking careIf it bothers you
            To see me so happy With my own self Cause’ all you do is justBitch about me With your friends
            Like I’m really crazy But never mind You’re not worth my time So I’ll just forget about you
            Time and time again You let me down And down And down I can’t forget those words You said behind my back You said I’m a psycho And a freak, But don’t you think You are no different?
            I wear my hair up high Put on a necklace That I made I don’t fucking care If it bothers you
            To see me so happy With my own self Cause’ all you do is just Bitch about me With your friends
            Like I’m really crazy But never mind You’re not worth my time So I’ll just forget about
            I wear my hair up high Put on a necklace That I made I don’t fucking care If it bothers you
            To see me so happy With my own self Cause’ all you do is just Bitch about me With your friends
            Like I’m fucking crazy But never mind Really doesn’t matter{"\n"}
            </p>{" "}
            <br />
            <button 
                className="font -mono text-xl text-[#f5f5dc] underline"
                onClick={()  => handleToDetail()}
            >
             NEXT
          </button>  
        </div>
    );
}
export default LandingPage;