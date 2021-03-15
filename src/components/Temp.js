const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
  function toCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius*9/5)+32;
  }
  
  function tryConvert(temp, convert) {
    const input = parseFloat(temp);
    if(Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
  }
  
  function Boiled(props) {
    if (props.celsius >= 100) {
      return <p>Boiled Water</p>
    }
    return <p>Not Boiled Water</p>
  }
  
  class TempInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temp: ''};
    }
  
    handleChange(e) {
      this.props.onTempChange(e.target.value);
    }
  
    render() {
      const temp = this.props.temp;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temp} onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
  class Calc extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsius = this.handleCelsius.bind(this);
      this.handleFahrenheit = this.handleFahrenheit.bind(this);
      this.state = {temp: '', scale: 'c'};
    }
    
    handleCelsius(temp) {
      this.setState({scale: 'c', temp});
    }
    handleFahrenheit(temp) {
      this.setState({scale: 'f', temp});
    }
    
    render() {
      const scale = this.state.scale;
      const temp = this.state.temp;
      const celsius = scale === 'f' ? tryConvert(temp,toCelsius): temp;
      const fahrenheit = scale === 'c' ? tryConvert(temp,toFahrenheit): temp;
      
      return (
        <div>
          <TempInput scale="c" temp={celsius} onTempChange={this.handleCelsius} />
          <TempInput scale="f" temp={fahrenheit} onTempChange={this.handleFahrenheit} />
          <Boiled celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Calc />,
    document.getElementById('root')
  );
  