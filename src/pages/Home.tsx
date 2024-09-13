import Bottom from "@/components/Bottom";
import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import Nav from "@/components/Nav";


function Home() {
    return (
        <div className=" bg-amber-200">
            <Nav/>
            <Hero/>
            <Middle/>
            <Bottom/>
        </div>
    );
}

export default Home;