import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities").then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities"></Header>
       <List>
        
          {activities.map((activity : any) => (
            <ListItem key={activity.id}>
              {activity.city}
            </ListItem>
          ))}
        
        </List>
      
    </div>
  );
}

export default App;
