

const BetterScrolls = ({ children, classes }) => (
    <div className={`overflow-y-auto [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-firstRow-scrollFront
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-firstRow-A5
                [&::-webkit-scrollbar-thumb]:rounded-full 
                ${classes ? classes : ''}`}>
        {children}
    </div>
);

export default BetterScrolls