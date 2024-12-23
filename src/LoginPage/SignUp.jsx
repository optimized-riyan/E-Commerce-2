import Header from "./Header";
import Footer from "./Footer";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
    return (
        <>
            <div style={{ width: '90%', margin: 'auto' }}>
                <Header />
                <SignUpForm />
            </div>
            <Footer />
        </>
    );
}