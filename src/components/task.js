
import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const Task = ({ name }) => {
  return (
    <div>
      <ListGroup >
        <ListGroup.Item variant="info"> 
           {name}
        </ListGroup.Item>
      </ListGroup> 

      

      
      
    </div>
  );
};

export default Task;
