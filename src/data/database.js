const users = [
  {
    id: 1,
    username: 'possas',
    dateJoined: '2022-04-07T19:43:14.158Z',
    loggedIn: true,
    follows: [2, 3]
  },
  {
    id: 2,
    username: 'thehelpseaxylophone',
    dateJoined: '2022-04-06T19:43:14.158Z',
    loggedIn: false,
    follows: [1, 3]
  },
  {
    id: 3,
    username: 'thegoldrushpeaslime',
    dateJoined: '2022-04-05T19:43:14.158Z',
    loggedIn: false,
    follows: []
  },
  {
    id: 4,
    username: 'thegoldrushwhatever',
    dateJoined: '2022-04-04T19:43:14.158Z',
    loggedIn: false,
    follows: [3]
  }
]

const posts = [
  {
    id: 1649381118880,
    type: 'post',
    author: 'possas',
    authorId: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae massa est. Curabitur euismod quam id sapien volutpat iaculis. Integer.'
  },
  {
    id: 1649381177650,
    type: 'repost',
    author: 'thehelpseaxylophone',
    authorId: 2,
    originalPostId: 1
  },
  {
    id: 1649381190537,
    type: 'quote',
    author: 'thegoldrushpeaslime',
    authorId: 3,
    originalPostId: 1,
    comment: 'Lorem ipsum dolor sit amet.'
  },
]

export const initDatabase = () => {
  if (localStorage.getItem('users') && localStorage.getItem('posts')) {
    return
  }

  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('posts', JSON.stringify(posts))
}