// SearchPage.js
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function SearchPage() {
    // Dummy data for search results
    const searchResults = [
        { id: 1, title: 'Product 1', description: 'Description for Product 1', image:'iphone.jpeg' },
        { id: 2, title: 'Product 2', description: 'Description for Product 2', image:'laptop.jpeg' },
        { id: 3, title: 'jeometry', description: 'Description for Product 2', image:'jeometry.jpg' },
        // Add more items as needed
    ];

    return (
        <Container>
            <div className="input-group mt-4" style={{width:'450px'}}>
                        <input className='form-control' placeholder='Search' aria-label='Search' aria-describedby='search-button' />
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button' id='search-button'>Search</button>
                        </div>
                   </div>
            <p className="mt-4 mb-4">**Search Results</p>
            <hr/>
            <Row>
                {searchResults.map((result) => (
                    <Col key={result.id} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                            <img src={result.image} alt={result.title} className="card-img-top" />
                                <Card.Title>{result.title}</Card.Title>
                                <Card.Text>{result.description}</Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SearchPage;
