import {useEffect, useState} from 'react';
import {options} from './api/newsapi';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const Limit=12;

const News = ()=> {
    
    const [news, setNews] = useState([]);
    const [index, setIndex] = useState(Limit);
    const [shownews, setShownews] = useState([]);

    const url = 'https://crypto-news-live3.p.rapidapi.com/news';
    const loadMore = () => {
        const newIndex = index+Limit;
        const newList = [].concat(shownews, news.slice(news, index, newIndex));
        setShownews(newList);
        setIndex(newIndex);
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
                setShownews(arr.slice(0,Limit))
            })
            .catch(err => console.error(err));
            }
            
            fetchData();
    },[]);
    return (
      <div>
        <Row style={{margin:'10px'}} xs={1} md={2} lg={3} >
          
        {shownews.map((ele,ind) => (
            // <li key={ind} >{ele.title}</li>
            // <ListGroup.Item key={ind}>{ele.title}</ListGroup.Item>
            <Col key={ind}>
                <Card>

                    <Card.Body>
                    <Card.Text>{ele.title}</Card.Text>
                    <Card.Link href={ele.url}>Visit site</Card.Link>
                    <br />
                    <cite title="Source Title"> source - {ele.source}</cite>
                    </Card.Body>
                    
                </Card>
            </Col>
            ))}
        </Row>
        <Stack gap={2} className="col-md-2 mx-auto">
            <Button variant='info' onClick={loadMore}>{'Load More'}</Button>
            </Stack>
      </div>
    )
  }

export {News};