import React, { useState } from 'react';
import TransactionTable from './Components/TransactionTable';
import TransactionForm from './Components/TransactionForm';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import "./App.css"

function App() {
  const [transactions, setTransactions] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (<>
    <Header/>
    <div className="App">
      
     
      <SearchBar onSearch={handleSearch} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
     
    </div>
    </>
  );
}

export default App;