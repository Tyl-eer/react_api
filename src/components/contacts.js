
    import React from 'react'

    const Contacts = ({ contacts }) => {
      console.log(contacts)

      return (
        <div>
          <center><h1>Contact List</h1></center>
        
          { 
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contacts.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contacts.email}</h6>
                <p class="card-text">{contacts.phone}</p>
                <h9 class="card-text">{contacts.website}</h9>
              </div>
            </div>
          }
        </div>
      )
    };

    export default Contacts;