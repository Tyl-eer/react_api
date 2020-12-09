

 import React, {useState, useEffect} from 'react';
 //import Contacts from './components/contacts';
 import Posts from './components/posts';

function App () {
  
/*
    const [contacts, setcontacts] = useState([])

      useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => setcontacts(data))
      
        .catch(console.log (Error))
      }, [])
        console.log(contacts)
      
      
        return (
          <Contacts contacts={contacts} />
        )
      /** */
 
    const [posts, setposts] = useState([])

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => setposts(data))
        
        .catch(console.log (Error))
      }, [])

        return (
          <Posts posts={posts} />
        )
    
 }

export default App;
