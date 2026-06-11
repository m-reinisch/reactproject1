import './App.css'
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Article from "./Article.tsx";
import type {BlogPostProps} from "./types.tsx";

function App() {
    const blog1: BlogPostProps= {
        titel: "Wo es Apfelwein in Frankfurt gibt",
        subtitel: "Locations",
        image: "src/assets/Apfelwein_Geripptes_Bembel.jpg",
        author: "Michael R",
        locations: [{href: "http://www.der-buchwald.de/", location: "Der Buchwald"}]
    };
    const blog2: BlogPostProps= {
        titel: "Bester Ebbelwoi in Frankfurt",
        subtitel: "Ebbelwoi-Locations",
        image: "src/assets/Apfelwein_Geripptes_Bembel.jpg",
        author: "Michael R",
        locations: [
            {href: "http://www.zumgemaltenhaus.de/", location: "Zum gemalten Haus"},
            {href: "http://www.fichtekraenzi.de/", location: "Fichtekr&auml;nzi"},
            {href: "http://www.der-buchwald.de/", location: "Der Buchwald"}]
    };
    const blog3: BlogPostProps= {
        titel: "Frankfurt the city of apple wine",
        subtitel: "The best locations",
        image: "src/assets/Apfelwein_Geripptes_Bembel.jpg",
        author: "Michael R",
        locations: [{href: "http://www.fichtekraenzi.de/", location: "Fichtekr&auml;nzi"}]
    };
    const blogs: BlogPostProps[]= [blog1, blog2, blog3];

    return (
    <>
        <Header />
        <main>
            {blogs.map(
                b => <Article articleEntry={b} key={b.titel} />)}
        </main>
        <Footer />
    </>
    )
}

export default App
