import React from 'react';
import Tree  from 'react-animating-tree'

var config = open => ({
  from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
  to: {
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0px,0,0)' : 'translate3d(20px,0,0)',
  },
})

var styles = {
  tree: {
    color: 'blue',
    background: 'red',
  },
  icon: {
    fill: 'black',
    background: 'white'
  }
}
function App() {

  function nodeClicked(e){
    console.log(e)
    
  }

  return (
    <div>
      <Tree content="Apple" type="Fruit" open canHide visible style={{...styles}}
        onClick={console.log} springConfig={config} toggleImmediate={true} >
        <Tree content="Contents" onNodeClick={() => nodeClicked("somethingx")} toggleImmediate={true}>
          <Tree onNodeClick={() => nodeClicked("something")} id={1343} content="Seeds" />
          <Tree content="Seeds" />
          <Tree content="Seeds"  />
          <Tree content="Seeds" />
          <Tree content="Seeds" />
          <Tree content="Seeds" />
        </Tree>
      </Tree>
    </div>
  );
}

export default App;
