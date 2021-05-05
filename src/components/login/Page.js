export default function Page({ children }) {
    return (
        <div className="bg-login-background bg-cover bg-center w-screen h-screen relative flex flex-col justify-between">
            {children}
        </div>
    );
}
