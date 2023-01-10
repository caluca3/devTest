import React, { useEffect, useState } from 'react';

export const App = () => { 
  const [socket, setSocket] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket("wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD");
    newSocket.onopen = () => {
      console.log("WebSocket connection established");
    }
    newSocket.onmessage = (event) => {
      const {data} =JSON.parse(event.data);
      setInfo([...data]);
    };
    setSocket(newSocket);
  }, []);
  
  const closeSocket = () => {
    socket.close();
  }

  return (<>
  <div>
    <div>
    <div className='container d-grid gap-2 '>
    <h1>BitMex</h1>
    <button className='btn btn-danger ' onClick={closeSocket}> Close Socket </button>
    </div>
    <div style={{ width: '600px', height: '600px' }} className="table-responsive mt-3 ">
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
        {info.map((item) => (
          <tr key={item.id}  className="fila">
              <th>Type: {item.symbol}</th>
              <th>Action: {item.side}</th>
              <th>Price: {item.size}</th>
              <th>Date :{item.timestamp}</th>
            </tr>
          ))}
        </thead>
      </table>
     </div>
     </div>
  </div>

</>);
};