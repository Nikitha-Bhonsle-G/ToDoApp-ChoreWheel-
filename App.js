import React from 'react';
import './App.css';
import DisplayWork from './DisplayWork';

class App extends React.Component{

  constructor(props){
    super(props);
 
    this.state = {
      items:[],
      currentItem:'',
      currentVal:'Buisness',
      currenttim:'',
      currentdat:''
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handlechangeoption=this.handlechangeoption.bind(this);
    this.handlechangetime=this.handlechangetime.bind(this);
    this.handlechangedate=this.handlechangedate.bind(this);
  }

  addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  const newOp = this.state.currentVal;
  const newtim=this.state.currenttim;
  const newdat=this.state.currentdat;
  const ItemSet = {
    category : newOp,
    taskDescription : newItem,
    date : newdat,
    time : newtim
  }
  let ItemListToBeUpdated = this.state.items;
  ItemListToBeUpdated.push(ItemSet);
  this.setState({items : ItemListToBeUpdated});
  }

handleInput(e){
  this.setState({
    currentItem: e.target.value
  })
}

handlechangeoption(e){
  this.setState({
    currentVal: e.target.value
  })
}

handlechangetime(e){
  this.setState({
    currenttim: e.target.value
  })
}

handlechangedate(e){
  this.setState({
    currentdat:e.target.value
  })
}

  render(){
    return(
      <div className="row no-gutters" style={{minHeight:'100vh'}}>

        
        <div className="col no-gutters">
          <div className="leftside"> 
          <br/><p id="ch1">Chore List:</p>       

              <DisplayWork items={this.state.items}></DisplayWork> 
              {/* <div id="todo-formleft">
             <br/>
                                    <div className="list">
                                     <p id="main">
                                         <p id="header">{this.states.displayVal}</p>
                                         <p id="inputdata">
                                             <textarea row="4" type="text" value={this.states.displayItem} onChange={this.handleInput}/>
                                         </p>
                                         <p id="datetime">{this.states}[{s.time}]
                                                     <p id="but">
                                                       <button><img src={logo1} height="40px"width="40px"/></button>
                                                     <button><img src={logo2} height="50px"width="50px"/></button></p>
                                         </p>
                                         </p>
                </div>
          </div> */}
          
          </div>
        </div>


        <div className="col no-gutters">
          <div className="rightside">
          <p id="ch">CHORE WHEEL</p>
          <form id="todo-form" onSubmit={(e) => this.addItem(e)}>
           
           <select op={this.state.value}
                onChange={this.handlechangeoption}required>
               <option value = "buisness">Buisness</option>
               <option value = "home">Home</option>
               <option value = "personal">Personal</option>
            </select>
    
           <textarea id="a" placeholder="Add your Work..!" rows="3" currentItem={this.state.currentItem} onChange={this.handleInput}required/>
   
           <input type="date"dat={this.state.value}onChange={this.handlechangedate}required/>

           <input type="text"tim={this.state.tim} onChange={this.handlechangetime}placeholder="Add Completion Time!" required/>
        
           <button type="submit">Add Task</button>           
         </form>
          </div>
        </div>    
      </div>
    )
  }
}
export default App;