import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; 

function Home() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/quotes');
            const quotes = response.data.quotes;
            const randomIndex = Math.floor(Math.random() * quotes.length); // Fixed length issue
            const randomQuote = quotes[randomIndex];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
            console.log(quotes);
            console.log(author);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-gradient">
            <h1 className="text-center text-light mb-5 animate-title">Random Quotes Generator</h1>

            <div className="card quote-card shadow-lg">
                <div className="card-body text-center">
                    <blockquote className="blockquote mb-4">
                        <p className="quote-text">"{quote || 'Loading...'}"</p>
                        <footer className="blockquote-footer mt-3">
                            <cite className="author-text">{author || 'Unknown'}</cite>
                        </footer>
                    </blockquote>
                    <button 
                        className="btn btn-custom animate-button" 
                        onClick={fetchData}
                    >
                        Generate Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;