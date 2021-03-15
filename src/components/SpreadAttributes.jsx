import React from 'react'

const Button = props => {
    const { kind, ...others } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={className}{...others} />
    );
};

const App = () => {
    return (
        <div>
            <Button kind="primary" onClick={ () => alert('Clicked!')}>
                Hello World!
            </Button>
        </div>
    );
};

// function App() {
//     return (
//         <HelloWorld />
//     );
// }

export default App;