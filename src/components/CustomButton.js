import React from 'react';
import CustomButton from './CustomButton';

function Warning() {
    return (
        <CustomButton color='red' />
    );
}

function App() {
    return (
        <Warning />
    );
}

export default App;