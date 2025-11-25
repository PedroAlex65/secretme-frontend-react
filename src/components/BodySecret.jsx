import NavBox from "./NavBox.jsx";
import { Container } from "./bodySecret.js";

const BodySecret = ({children}) => {
    return (
        <>
            <Container>
                <section>
                    <NavBox />
                    {children}  {}
                </section>
            </Container>

        </>
    );
}

export default BodySecret;