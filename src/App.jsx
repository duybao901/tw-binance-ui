import "./app.css"
import EventRare from "./components/EventRare"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {

    return (
        <div className="font-titillium">
            <Header></Header>
            <main className="w-[100vw] mt-20">
                <div className="bg-bgi-banner-bg bg-100% bg-no-repeat w-full h-full">
                    <Home></Home>
                    <EventRare></EventRare>
                </div>
            </main>
        </div>
    )
}

export default App
