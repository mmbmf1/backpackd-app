import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return(
        <div className='LandingPage_wrapper'>
            <section className='section-one'>
                <div className='section-one-box'>
                    <h3>a better way to backpack</h3>
                    <p>backpackd helps you optimize your backpack by keeping track of all the items in your pack and their weight</p>
                    <Link to={'/mock_backpack'}>Explore</Link>
                </div>
            </section>
            <section className='section-two'>
                <div className='section-two-box'>
                    <h3>Know the weight of each item in your pack</h3>
                    <p>[<em>placeholder for screenshot of backpackitem summary</em>]</p>
                    <p>The key to backpacking further is to optimize the weight of your backpack. backpackd provides you with a quick and simple interface that helps you quickly calculate backpack weight</p>
                </div>
            </section>
            <section className='section-three'>
                <div className='section-three-box'>
                    <h3>Save your loadouts</h3>
                    <p>[<em>placeholder for screenshot of scrolling backpackd collection</em>]</p>
                    <p>Keep track of all your backpack loadouts to improve weight on future trips</p>
                </div>
            </section>
            <footer></footer>
        </div>
    )
}

export default LandingPage;