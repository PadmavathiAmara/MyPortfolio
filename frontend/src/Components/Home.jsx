// import './Home.css';

import Header from './Header';

export const Home = () => {


    return (
        <div className=" w-screen h-screen flex flex-row bg-slate-200 ">
            <Header />
            <main className=" w-11/12 h-full flex justify-center items-center ">
                <div className=' w-1/2 h-72 flex flex-col justify-evenly '>
                <h4 className=' text-2xl ' >Hello, My name is</h4>
                <h1 className=' text-6xl ' >Padmavathi Amara</h1>
                <h3 className=' text-3xl ' >Junior Full Stack Developer</h3>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus <br/>
                 pariatur earum voluptate, est dolores tenetur et iure animi commodi ipsum qui, <br/>
                  nisi fuga consequuntur eum vel illum? Temporibus, odio.</p>
                </div>
            </main>
        </div>
    )
}

export default Home;