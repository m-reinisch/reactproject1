import './App.css'
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Article from "./Article.tsx";

function App() {

  return (
    <>
        <Header />
        <main>
            <Article titel={"Bester Ebbelwoi in Frankfurt"}
                     subtitel={"Ebbelwoi-Locations"}/>
        </main>
        <Footer />
    </>
  )
}

export default App
