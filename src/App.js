import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
import CSVSalesTable from './CSVSalesTable'
import {useState} from 'react'

function App() {
  const [csvSalesData, setCsvSalesData] = useState([]);
  const [title, setTitle] = useState('Select a file');
  let getCsvData = (data, fileInfo) => {
    setCsvSalesData(data);
    setTitle(fileInfo.name.replace('.csv', ''))
    console.log(fileInfo);
  }
  console.log(csvSalesData);
  return (
    <div className="App">
      <div className="App-container">
        <h1>
          {title} <CSVReader onFileLoaded={(data, fileInfo) => getCsvData(data, fileInfo)} className='inputfile'/>
        </h1>
        {
          csvSalesData.length > 1 ? 
          <CSVSalesTable
            csvData={csvSalesData}
          /> : null
        }
      </div>
    </div>
  );
}

export default App;
