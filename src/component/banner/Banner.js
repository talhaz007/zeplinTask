import React from 'react'
import './Banner.css'
import bookimg from '../assets/images/AstroBook.png'
import audio from '../assets/icons/audio-headphones.svg';
import paper from '../assets/icons/folded-newspaper.svg';
import library from '../assets/icons/library.svg';
import cart from '../assets/icons/cart.svg';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='content-wrapper'>
                <div>
                    <img src={bookimg} alt='book' className='imgStyle' />
                </div>
                <div style={{ marginTop: "68px" }}>
                    <div>
                        <text className='heading'>Astrophysics for People in a Hurry’s Summary</text>
                    </div>
                    <div className='text-wrapper'>
                        <text className='topic'>Key Insights & Analysis</text>
                    </div>
                    <div className='text-wrapper'>
                        <text className='author'>Kelly Brogan, MD with Kristin Loberg</text>
                    </div>
                    <div className='icons-wrapper'>
                            <img src={paper} alt='headphones' />
                            <text className='icons-text'>18 min read</text>
                     
                            <img src={audio} alt='headphones' />
                            <text className='icons-text'>14 min listen</text>
                        
                            <img src={library} alt='headphones' />
                            <text className='icons-text'>Add to Library</text>
                        
                            <img src={cart} alt='headphones' />
                            <text className='icons-text'>Buy Book</text>
                    </div>
                    <div className='buttons-wrapper'>
                        <button className='button-style'>Business & Finance</button>
                        <button className='button-style'>Business & Finance</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Banner