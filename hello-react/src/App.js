// How to create new project
// npx create-react-app project-name

import React, {Component} from 'react'
import './App.css'
import Article from './Article'
import Counter from './Counter'
import Featured from './Featured'
import Form from './Form'
import FriendsList from './Friends'
import Greet from './Greet'
import {Menu, Footer} from './Menu'
import Name from './Name'
import Switch from './Switch'
import TaskList from './TaskList'

class App extends Component {



  render() {
  const friends = [
    {name: "Logan"},
    {name: "Nan"},
    {name: "Metin"}
  ]

  const tasks = [
    {name: 'Mow the Lawn'},
    {name: 'Wash Car'}
  ]

  const articles = [
    {title: "Title 1", text: "fdas asdjf sdfsadfdsa asdfasd asdfsdfrryt hrh dgrg rg rhrthhrrhtd dgdg dgr d dr bdjoi", social: "12 Comments 15 Likes"},
    {title: "Title 2", text: "fdas asdjf sdfsadfdsa asdfasd asdfsdfrryt hrh dgrg rg rhrthhrrhtd dgdg dgr d dr bdjoi", social: "14 Comments 5 Likes"},
    {title: "Title 3", text: "fdas asdjf sdfsadfdsa asdfasd asdfsdfrryt hrh dgrg rg rhrthhrrhtd dgdg dgr d dr bdjoi", social: "1 Comments 465 Likes"},
  ]
  return (
    <div className="total">
      <Menu />
      <Counter />
    <Form />
<Featured />
<Article articles = {articles} />

<Switch />
    <Footer />
    </div>
  )
}
}

export default App