import "./app.css"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {

    return (
        <div className="font-titillium">
            <Header></Header>
            <main className="w-[100vw] h-[100vh]">
                <div className="bg-banner-bg bg-100% bg-no-repeat w-full h-full ">
                    <Home></Home>
                </div>
            </main>
        </div>
    )
}

export default App
