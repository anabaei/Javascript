import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react';
import { w3cwebsocket as WebSocket } from "websocket";

export default function Home() {
  const [hitWs, setHitWs] = useState(true);
  var wss = new WebSocket("ws://localhost:8091", ["protocol1", "protocol2"]);
  wss.onmessage = message => console.log("Send from Other Client ", message.data);  

  useEffect(()=>{
    fetch(`https://api.github.com/users/mojombo`)
    .then(res => res.json())
    //.then(setData) // this one call function with new value
    .catch(console.error);
  }, [hitWs]);

  function checkWs(){
    
    setHitWs(!hitWs);
    try {
      console.log("sent");
      wss.send("heartbeat");
    } catch (error) {
      console.log(error, 'websocket connection err');
    }
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <div className={styles.grid}>
          <a  className={styles.card} onClick={() => checkWs()}>
            <h3>Check WS</h3>
            <p> API</p>
          </a>
         



          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

 
        </div>
      </main>

    </div>
  )
}
