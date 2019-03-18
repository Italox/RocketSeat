import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Kelly C. Rodrigues',
        avatar: 'https://avatars0.githubusercontent.com/u/24532?s=180&v=4',
        hora: 'há 1 min',
        content: 'Duis et pulvinar lacus. Nulla eget congue sem, ac porttitor justo. Sed imperdiet justo ipsum, ut accumsan orci posuere ut. Cras convallis magna sit amet eros bibendum, ac scelerisque lacus cursus. ',
      },
      {
        id: 2,
        name: 'Italo Rodrigues',
        avatar: 'https://avatars0.githubusercontent.com/u/245352?s=180&v=4',
        hora: 'há 12 min',
        content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus aliquet feugiat. Suspendisse condimentum vel augue at dapibus. Quisque nec velit feugiat, placerat libero et, vestibulum leo. Pellentesque pulvinar tortor turpis, non maximus leo aliquet a. Maecenas efficitur arcu viverra arcu auctor dictum. Donec volutpat ex in ipsum euismod dictum. Aenean molestie augue quis mi rhoncus porta. Vestibulum rhoncus volutpat ultricies. Aliquam et orci non lacus molestie bibendum vitae quis sapien. Nam vel leo mauris. Curabitur molestie metus non diam condimentum, ac lobortis risus malesuada. :D',
      },
    ],
  }

  render() {
    const { posts } = this.state;
    const postItems = posts.map(post => <Post key={post.id} data={post} />);
    return (
      <Fragment>
        <Header />
        <div className="container">
          {postItems}
        </div>
      </Fragment>
    );
  }
}
