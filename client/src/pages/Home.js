import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <div>
            <button><Link to="/send"> Send</Link><br/></button>
	          <button> <Link to="/receive"> Receive</Link></button> 
        </div>
    </div>
  )
}
