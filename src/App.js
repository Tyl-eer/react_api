

 import React, {useState, useEffect} from 'react';
 import Contacts from './components/contacts';
 //import Posts from './components/posts';

function App () {
   //render () {

    const [setdata, setcontacts] = useState('')
      // return (
      useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => setdata(data))
          .then((contacts) => setcontacts(contacts))
        .catch(console.log (err))
      }, [])
        
      // )
      // }
      // render() {
        return (
          <Contacts contacts={this.state.contacts} />
        )
      // }

      // state = {
      //   posts: []
      // }
      // componentDidMount() {
      //   fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(res => res.json())
      //   .then((data) => {
      //     this.setState({ posts: data })
      //   })
      //   .catch(console.log)
      // }

      // render() {
      //   return (
      //     <Posts posts={this.state.posts} />
      //   )
      // }
    
 }

export default App;
