import {useEffect, useState} from 'react';
import {options} from './api/newsapi';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import '../assets/css/News.css'


const Limit=12;

const News = ()=> {
    
    const [news, setNews] = useState([]);
    const [index, setIndex] = useState(24);
    const [shownews, setShownews] = useState([]);

    const url = 'https://crypto-news-live3.p.rapidapi.com/news';
    const loadMore = () => {
        // console.log(index);
        const newIndex = index+Limit;
        // console.log(newIndex);
        const newList = news.slice(news, index, newIndex);
        // console.log(news);
        // console.log(newList);
        setShownews(newList);
        setIndex(newIndex);
    };

    useEffect(() => {

        const fetchData = async () => {
            
            fetch(url, options)
            .then(response => response.json())
            .then(function (result) {
                // console.log(result);
                const arr=[];
                for (var i=0;i<result.length;i++){
                    arr.push(result[i]);
                }
                setNews(arr);
                setShownews(arr.slice(0,Limit));
            //  console.log(arr);
            //  console.log(arr.slice(0,Limit));
                // console.log('inside useeffect')
            })
            .catch(err => console.error(err));
            }
            
            fetchData();
    },[]);
    return (
      <div className='container'>
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

        {shownews.length>=news.length ? 
        <Stack gap={2} className="col-md-2 mx-auto">
            <Button variant='info' onClick={loadMore}>{'Enough for today'}</Button>
        </Stack>
        :
        <Stack gap={2} className="col-md-2 mx-auto">
            <Button variant='info' onClick={loadMore}>{'Load More'}</Button>
        </Stack>
        }
      </div>
    )
  }

export {News};