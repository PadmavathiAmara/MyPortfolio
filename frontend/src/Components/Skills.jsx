import Header from "./Header";
import './Home.css';

export const Skills = () => {
    return(
        <div className=" w-screen h-screen flex flex-row bg-slate-200">
<Header />
<div className=" w-11/12 h-full  ">
            <div className="w-full h-full bg-orange-200">Skills</div>
        </div>
        </div>
       
    )
}

export default Skills;