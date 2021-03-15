//  import Header from './components/Header' //for function component
import './App.css'

function Contacts() {
  return (
    <div className='Contacts'>Imon</div>
  );
}

function Chat() {
  return (
    <div className='Chat'>Moinul</div>
  );
}

function SplitPane(props) {
  return (
    <div className='SplitPane'>
      <div className='SplitPane-left'>
        {props.left}
      </div>
      <div className='SplitPane-right'>
        {props.right}
      </div>
    </div>
  );
}
 
function App() {
  return (
      <SplitPane 
        left={ <Contacts /> } 
        right={ <Chat /> }
      />
  );
}

<div id='root'>
  
</div>
export default App;

