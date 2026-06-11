import './App.css'
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Article from "./Article.tsx";
import type {BlogPostProps} from "./BlogPostProps.tsx";

function App() {
    const blog: BlogPostProps= {
        titel: "Bester Ebbelwoi in Frankfurt",
        subtitel: "Ebbelwoi-Locations",
        image: "src/assets/Apfelwein_Geripptes_Bembel.jpg",
        author: "Michael R"
    }

    return (
    <>
        <Header />
        <main>
            <Article articleEntry={blog} />
        </main>
        <Footer />
    </>
    )
}

export default App
