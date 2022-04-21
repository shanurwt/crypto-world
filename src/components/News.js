import {useEffect, useState} from 'react';
import {options} from './api/newsapi';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const News = ()=> {

    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [page, setPage] = useState(0);

    const url = 'https://crypto-news-live3.p.rapidapi.com/news';
    const loadMore = () => {
        // setLoading(!loading);
    };

    useEffect(() => {

        const fetchData = async () => {
            
            fetch(url, options)
            .then(response => response.json())
            .then(function (result) {
                const arr=[];
                for (var i=0;i<result.length;i++){
                    arr.push(result[i]);
                }
                console.log(arr);
                setNews(arr);
            })
            .catch(err => console.error(err));
            }
            
            fetchData();
    },[]);
    return (
      <div>
          {errorMsg && <p>This is error function</p>}
        <Row style={{margin:'10px'}} xs={1} md={2} lg={3}>
          
        {news.map((ele,ind) => (
            // <li key={ind} >{ele.title}</li>
            // <ListGroup.Item key={ind}>{ele.title}</ListGroup.Item>
            <Col >
            <Card key={ind}>
                
                <Card.Body>
                <Card.Text>{ele.title}</Card.Text>
                <Card.Link href={ele.url}>Visit site</Card.Link>
                {/* <Card.Link href={ele.url}>News Source</Card.Link> */}
                <br />
                <cite title="Source Title"> source - {ele.source}</cite>
                </Card.Body>
                
            </Card>
            </Col>
            ))}
        </Row>
            
            <button onClick={loadMore(page)}>{loading ? 'Loading' : 'Load More'}</button>
      </div>
    )
  }

  export {News};


  