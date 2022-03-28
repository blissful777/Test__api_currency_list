import React, {
  Component
} from 'react'

import '../main/Main.css'


export default class Main extends Component {
  state = {
valute: [],
valuteChange: Number
  }

  getData = () => {
    let baseUrl = "https://www.cbr-xml-daily.ru/daily_json.js";
    let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      })
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((json) => {
              this.setState({
valute: json.Valute,
              });
            });     
        }
      })
      .catch((error) => {
        alert(error);
      });
  }


  componentDidMount() {
    this.getData()
  }

  render() {
    const arr = Object.keys(this.state.valute).map((key) => [key, this.state.valute[key]]);
    return (
<div className='main'>
  <div className='up'>
  <a className='link__up' href='#'>UP</a>
  </div>
    {arr.map((item)  => (    
        <div className='code' key={item}>
       <ul>
      <li key={item[1].Name}><b>Код валюты:</b><a  style={{cursor:'pointer'}} title={item[1].Name} href={`https://www.cbr-xml-daily.ru/daily.xml/${item[1]}`}>&nbsp;{item[1].CharCode}</a></li>
      <li key={item[1].Value} style={{marginTop:'5px'}}><b>Цена валюты:</b>&nbsp;{item[1].Value}</li>
      <li key={item[1].Previous} style={{borderBottom: '1px solid black', marginTop:'5px'}}><b>Разница за 24ч:</b>&nbsp;<span style={{color: ((item[1].Previous - item[1].Value)/item[1].Value)*100 > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{Math.max(((item[1].Previous - item[1].Value)/item[1].Value)*100).toFixed(2)}&nbsp;%</span></li>
       </ul>    
        </div>
    ))}
</div>


    )
  
  }
}



