import React from 'react';
import './DisplayWork.css';
import logo1 from './pic/editbtn.png';
import logo2 from './pic/deletebtn.png';
import logo3 from './pic/editdone.png';


class DisplayWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : props.items,
      disabledBooleanArray : Array(props.items).fill(true),
      disableEdit:Array(props.items).fill(false),
      disableDone:Array(props.items).fill(true)
    };
  }
  componentDidUpdate(nextProps)
  {
    console.log('componentwillreceiveprops',nextProps);
    if(this.props!==nextProps)
    {
      this.setState({
        items:nextProps.items,
        disabledBooleanArray : Array(this.props.items).fill(true),
        disableEdit:Array(this.props.items).fill(false),
        disableDone:Array(this.props.items).fill(true)})
    }
  }

  
  //    const items=props.items;
     
  //     let disabledBooleanArray = Array(items.length).fill(true);
  
    
    handleEditClick = (indexToBe) => {
      let currentArray =  Array(this.props.items).fill(true);
      let currentArrayedit =  Array(this.props.items).fill(false);
      
      //enable textarea
      currentArray[indexToBe] = false;
      this.setState({disabledBooleanArray : currentArray});
      // disabledBooleanArray[indexToBeEnabled] = false;

      //disable edit 
        currentArrayedit[indexToBe]=true;
        this.setState({disableEdit:currentArrayedit});

      

    }
    handleEditInput=(e,indexToBeUpdated)=>{
      let currentItems = this.state.items;
      let currentArrayDone=Array(this.props.items).fill(true);
      currentItems[indexToBeUpdated].taskDescription = e.target.value
      
      //EnableDone
      currentArrayDone[indexToBeUpdated]=false;
      this.setState({items : currentItems,disableDone:currentArrayDone});
    }

    handleEditDone=(indexToBeDone)=>{
      //disable textArea
      let currentArrayDone=Array(this.props.items).fill(true);
      let currentArray =  Array(this.props.items).fill(true);
      let currentArrayedit =  Array(this.props.items).fill(false);

      this.setState({disabledBooleanArray : currentArray,disableDone:currentArrayDone,disableEdit:currentArrayedit});

    }

    //deletion part
    deleteTheWork=(e,indexToBeDeleted)=>
    {
      if(window.confirm("Are you sure want to delete?"))
      {
      let currentItems=this.state.items;
      currentItems.splice(indexToBeDeleted,1);
      this.setState({items : currentItems})
      }
  }
  
  //  console.log(disabledBooleanArray)
render() {
  const items = this.state.items;
  return(
    <div id="todo-formleft">
        <br/>
            {items.map((s,index)=>(<div className="list">
                                <p id="main">
                                    <p id="header">{s.category}</p>
                                    <label id="l1">Task Description:</label><p id="inputdata">
                                        <textarea row="4" disabled = {this.state.disabledBooleanArray[index]}
                                        onChange={(e)=>this.handleEditInput(e,index)} >{s.taskDescription}</textarea>
                                        <br/>
                                        {!(this.state.disableDone[index])  ? <button id="btn3" onClick={()=>this.handleEditDone(index)} >
                                                Done <img src={logo3}height="30px" width="30px" alt=""/>
                                          </button> : ''}
                                    </p>
                                    <div className="datetime">
                                          {s.date}:{s.time}
                                                  
                                          <button id="btn2" onClick = {()=>this.handleEditClick(index)} disabled={this.state.disableEdit[index]} >
                                                    <img src={logo1} height="30px"width="30px" alt="edit"/>
                                          </button>


                                         
                                          
                                          
                                          <button id="btn1" onClick={(e)=>this.deleteTheWork(e,index)}>
                                                <img src={logo2} height="40px"width="40px" alt="delete"/>
                                          </button>
                                               
                                                    

                                                    
                                    </div>
                                    </p>
                            </div>))}
                            {/* <button onClick={()=>this.setState({items : []})}>refresh</button> */}
      </div>
    )
  }
}
 export default DisplayWork;