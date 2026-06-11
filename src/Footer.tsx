export default function Footer() {
    const today= new Date();

    return(
        <footer>
            <p id="imp">Michael Reinisch</p>
            <p id="dat">{today.toLocaleDateString()}</p>
        </footer>
    )
}