import Header from "./Header";
import Form from './Form';
import Footer from "./Footer";

export default function Login() {
    return (
        <>
            <div style={{ width: '90%', margin: 'auto' }}>
                <Header />
                <Form />
            </div>
            <Footer />
        </>
    );
}