import React, {useEffect } from 'react';
import '../styles/ui.css';

function App() {
  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type } = event.data.pluginMessage;
      if (type === 'success') {
        // Handle bulk-processing messages here if needed
      }
    };
  }, []);

  function say(typeProp){
    parent.postMessage(
            {
              pluginMessage: {
                type: typeProp
              },
            },
            '*'
          );
  }

  return (
    <div>
     <p>Welcome to your template!</p>
     <button onClick={()=>say("hello")}>Hello</button>
     <button onClick={()=>say("bye")}>Bye</button>
    </div>
  );
}

export default App;