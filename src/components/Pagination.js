import React from 'react';
import Pagination from 'react-bootstrap/Pagination'
const pagination = (props) =>{
    let active = props.page
    let items = [];
    for (let number = 1; number <= props.totalpages; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active} 
        onClick={ () => {
            props.clicked(number)} }>
        {number}
        </Pagination.Item>,
    );
   
    }

    const paginationBasic = (
    <div>
        <Pagination>{items}</Pagination>
        <br />
    </div>
);
  return(
    <React.Fragment>
   {paginationBasic}
   </React.Fragment>
  );
}

export default pagination;
