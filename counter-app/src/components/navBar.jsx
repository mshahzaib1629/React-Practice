import React, { Component } from 'react';

//Stateless Functional Component (shortcut: sfc)

const NavBar = (props) => {

    //using Destructing here. By destructing we are selecting only totalCounters from the props; this will help us 
    //to write shorter code as: 'totalCounters' instead of 'props.totalCounters' every time
    const { totalCounters } = props;

    return ( <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
    Navbar Hey Nav<span className="badge badge-pill badge-secondar">{totalCounters}</span>
    </a>
    
</nav> );
}
 
export default NavBar;


//We can use class also, but the function is preffered mostly in such cases where we do not have any state and helper methods
// class NavBar extends Component {
//     state = {}
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                 Navbar <span className="badge badge-pill badge-secondar">{this.props.totalCounters}</span>
//                 </a>
                
//             </nav>
//         );
//     }
// }

// export default NavBar;