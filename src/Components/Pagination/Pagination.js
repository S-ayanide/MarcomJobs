import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {    

    const pageNumbers = [];
    let paginationNumber = Math.ceil(totalPosts / postPerPage)

    for(let i=1; i<= paginationNumber; i++){
        pageNumbers.push(i);
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col className="d-flex justify-content-center">
                    <nav>
                        <ul className="pagination">
                            {pageNumbers.map(number => (
                                <li key={number} className="page-item">
                                    <a onClick={() => paginate(number)} className="page-link">
                                        {number}
                                        {console.log(number)}
                                    </a>
                                </li>
                            ) )}
                        </ul>            
                    </nav>        
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Pagination;