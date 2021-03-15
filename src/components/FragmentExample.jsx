import React from 'react';

class Column extends React.Component {
    render() {
        // return (
        //         <td>Hello</td>, 
        //         <td>World</td>,
        //         <td>World2</td>

        // );
        return (
            <>
                <td>Hello</td>
                <td>World</td>
                <td>World2</td>
            </>
        );
    }
}

class Table extends React.Component {
    render () {
        return (
            <table>
                <tr>
                    <Column />
                </tr>
            </table>
        );
    }
}

function App() {
    return (
        <Table />
    );
}

export default App;
