import React, {useState} from 'react'
import Search from "./components/Search.jsx";

const App = () => {
    const [search, setSearch] = useState('');
    return (
        <main>
            <div className='pattern'>
                <div className='wrapper'>
                    <header>
                        <img src='./hero.png' alt='hero' />
                        <h1>Find<span className='text-gradient'>Movies</span> You'll Enjoy
                        Without the Hassle</h1>
                    </header>
                </div>
                <Search setSearch={setSearch} search={search} />
            </div>
        </main>
    )
}
export default App
