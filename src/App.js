

 import React, {useState, useEffect} from 'react';
//  import Contacts from './components/contacts';
 import Posts from './components/posts';
import axios from 'axios';
function App () {
  
    //  const [contacts, setcontacts] = useState([])
       
    //   useEffect(() => {
    //     const users = 
    //       {
    //       "id": 11,
    //       "name": "SAmuel ndirangu",
    //       "username": "sam",
    //       "email": "Sam@april.biz",
    //       "address": {
    //         "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //           "lat": "-37.3159",
    //           "lng": "81.1496"
    //         }
    //       },
    //       "phone": "1-770-736-8031 x56442",
    //       "website": "hildegard.org",
    //       "company": {
    //         "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    //       }
    //     }
        
      //   axios.post('http://jsonplaceholder.typicode.com/users',users)
      //   .then((response) => {
         
      //     setcontacts(response.data)
      //     console.log(response.data)
      //   }, (error) => {
      //     console.log(error);
      //   });
      // }, [])
      //   return (
      //     <Contacts contacts={contacts} />
      //   )
 




      
    const [posts, setposts] = useState([])
     

      useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          setposts(response.data)
          console.log(response.data)
      }, (error) => {
      console.log (error)
      });
      }, [])
        return (
          <Posts posts={posts} />
        )
    
 }

export default App;
