import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }) => {
    return (
        <div className="h-full ">
            <Navbar />
            <main className="h-full pt-15">{children}</main>
        </div>
    );
};

export default MarketingLayout;
