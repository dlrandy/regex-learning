import React from 'react'
import './App.css';
// import intro from 'intro';
// import plainText from 'plainText'
// import repeat from 'repeat'
// import characterClass from 'character-class'
// import shortCharacterClass from 'short-character-class'
// import captureGroup from './capture-group'
// import lookAhead from './lookahead'
// import wordboundary from './wordboundary'
// import backreferences from './backreferences'
import lineanchor from './lineanchor'
function App() {


  React.useEffect(() => {
    lineanchor()
    // backreferences()
    // wordboundary()
    // lookAhead()
    // captureGroup()
    // shortCharacterClass()
    // characterClass();
    // repeat();
    // plainText();
    // intro();
  })

  return (
    <div className="App">
      <pre></pre>
    </div>
  );
}

export default App;
