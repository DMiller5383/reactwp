import PostsIndex from './components/posts_index';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import PostsPagination from './components/posts_pagination';
import CategoriesList from './components/categories_list';
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import './App.css';
//
// class App extends Component {
//   render() {
//
//     return (
//       <div>
//         const App = () => (
//           <div>
//             Hello World
//           </div>
//         )
//       </div>
//     );
//   }
// }
//
const App = () => (
  <div>
    <Header />
    <CSSTransitionGroup
      transitionName="example"

  transitionAppear={true}
  transitionAppearTimeout={2000}
  transitionEnter={false}
  transitionLeave={false}>
    <Main />
    </CSSTransitionGroup>
    <Footer />
  </div>
)

export default App;
