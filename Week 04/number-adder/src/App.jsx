import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';



function App() {
  const [total, setTotal] = useState(0); //use useState to set up logic
  const [history, setHistory] = useState([]);

  const totalMessage = total > 0 
    ? "The total is positive." 
    : total < 0 
        ? "The total is negative." 
        : "The total is zero.";

  const [additionsCount, setAdditionsCount] = useState(0);
  const [subtractionsCount, setSubtractionsCount] = useState(0);
  const handleAddition = (value) => {
      setTotal(total + value);
      if (value > 0) {
          setAdditionsCount(additionsCount + 1);
      } else {
          setSubtractionsCount(subtractionsCount + 1);
      }
  };

      // 删除历史记录并更新 Total, additionsCount 和 subtractionsCount
  const removeHistoryItem = (index) => {
        const item = history[index];
        let value = parseInt(item);

        // 根据操作类型更新 total 和操作次数
        if (item.startsWith('+')) {
            setTotal(total - value);  // 反向操作
            setAdditionsCount(additionsCount - 1);
        } else if (item.startsWith('-')) {
            setTotal(total + Math.abs(value));  // 反向操作
            setSubtractionsCount(subtractionsCount - 1);
        }

        // 移除被点击的历史记录项
        const updatedHistory = history.filter((_, i) => i !== index);
        setHistory(updatedHistory);
    };



  function handleAddOne() {
    setTotal(total + 1);
    setAdditionsCount(additionsCount + 1);
    setHistory([...history, '+1']);
  } 

  function handleAddTwo() {
    setTotal(total + 2);
    setAdditionsCount(additionsCount + 1);
    setHistory([...history, '+2']);
  } 

  function handleRemoveOne() {
    setTotal(total -1);
    setSubtractionsCount(subtractionsCount + 1);
    setHistory([...history, '-1']);
  } 

  function handleRemoveTwo() {
    setTotal(total - 2);
    setSubtractionsCount(subtractionsCount + 1);
    setHistory([...history, '-2']);
  } 

  function handleReset() {
    setTotal(0);
    setHistory([...history, 'Reset']);
  } 

  function handleClearAll() {
    setTotal(0);
    setHistory([]);
    setAdditionsCount(0);
    setSubtractionsCount(0);
  }  




  return (
    <div className="App">
      <Header />

      <div id="main-content">
        <Sidebar 
          total={total}
          history={history}
          totalMessage={totalMessage}
          additionsCount={additionsCount} 
          subtractionsCount={subtractionsCount} 
          removeHistoryItem={removeHistoryItem}
        />
        <MainContent
          onAddOne={handleAddOne}
          onAddTwo={handleAddTwo}
          onRemoveOne={handleRemoveOne}
          onRemoveTwo={handleRemoveTwo}
          onReset={handleReset}
          onClearAll={handleClearAll}
         />
      </div>
    </div>
  );
}

export default App;
