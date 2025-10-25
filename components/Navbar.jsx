import Logo from "./Logo";

const Navbar = () => {
    return (
        <nav className="py-4 md:py-6 ml-2 mb-4 border-b border-gray-200 shadow-xl">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <Logo />
            </div>

        </nav>
    );
};

export default Navbar;
