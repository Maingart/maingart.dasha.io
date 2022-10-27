import React, {useState} from 'react';
import clsx from 'clsx';

import './App.css';

function App() {
    const [dots] = useState([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]);

    return (
        <div className="App">
            <header>
                <h2 className="EmojiGroup">
                    <span>
                        👃🏻
                    </span>
                    <span>
                        🐗️
                    </span>
                    <span>
                        ⭐
                    </span>
                </h2>
            </header>

            <footer>
                <div className="Line"></div>
                <div className="Dots">
                    {dots.map((dot) => (
                        <div className={clsx('Dot', dot === 3 && 'CurrentDot')} data-dot={dot}>
                            <div className="DotContent">
                                {dot === 10 ? '∞' : dot === 3 ? (
                                    <>
                                        <span>{dot}</span>
                                        <span>года</span>
                                    </>
                                ) : dot}
                            </div>
                        </div>
                    ))}
                </div>
            </footer>

            <div className="heart">
                <h1>
                    <span>
                        ❤️
                    </span>
                    <span>
                        🖤
                    </span>
                    <span>
                        💕
                    </span>
                </h1>
            </div>

            <main>
                <p>Приглашаю тебя на празднование <b>трехлетия</b> отношений!</p>
                <p>Я вызову тебе такси в неизвестном направлении - просто жди!</p>
                <p>Я тебя очень люблю и обожаю!</p>
            </main>
        </div>
    );
}

export default App;
