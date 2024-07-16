import {  useState } from "react"
import BlogList from "./BlogList";
import useFetch from './useFetch';
const Home = () => {

    const [name, setName] = useState('Kumar');
    const [age, setAge] = useState(30);


    const handleClick = (e) => {
        setName("venu")
        setAge(28)

    }



    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id);
        // setBlogs(newBlogs);

    }

    // const handleclickagain = (name,e) =>{
    //     console.log("Hello "+name , e.target)
    //     console.log("Hello "+name , e.timeStamp)
    // }

    return (
        <div className="home">


            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="New Blogs" handleDelete={handleDelete} />}
            {error && <div>{error}</div>}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author=='AA')} title="AA's New Blogs"/> */}

            {/* <h2>{name} is {age} years old</h2>
            <button onClick={handleClick}>CLICK ME</button> */}
            {/* <button onClick={(e)=> handleclickagain('Kumar',e)}>CLICK ME</button> */}



        </div>

    );
}

export default Home;