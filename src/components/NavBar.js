import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Dev Hub</a>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    {/*connect various providers for updates*/}
                    <a className="nav-item nav-link" href="#">Home</a>
                    {/* add, edit, sort */}
                    <a className="nav-item nav-link" href="#">Links</a>
                    {/* fow now, one task enter, log the time and calculate the end time, attach timer */}
                    <a className="nav-item nav-link" href="#">Tasker | Pomodoro Timer</a>
                    {/*track, compare*/}
                    <a className="nav-item nav-link" href="#">Cryptocurrency Tracker</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar