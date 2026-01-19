import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom';
import Banner from '../Images/banner.jpeg';
import '../styles/homeStyle.css';

const Home = () => {
  return (
    <Layout>
      <div className = "homepage"  style={{backgroundImage : `url(${Banner})`}}>
        <div className="headerContainer">
          <h2>Food Website</h2>
          <p>Welcome to our delicious food website</p>
          <Link to="/menu">
            <button>
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
