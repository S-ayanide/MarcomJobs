import React from 'react';
import './Review.css'
import DisplayPopularCompanies from '../../Components/DisplayPopularCompanies/DisplayPopularCompanies'
import Rater from '../../Components/Rater/Rater'
import Testimonial from '../../Components/Testimonial/Testimonial'
import app from '../../Config/firebaseConfig';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { MdBusinessCenter, MdRateReview } from 'react-icons/md'
import Spinner from 'react-bootstrap/Spinner'

class Review extends React.Component{

    constructor(){
        super()        
        this.database = app.database().ref('Popular/');
        this.testimonialDatabase = app.database().ref('Testimonials/')
        this.state = {
            companyName: "",
            companyURL: "",
            popularList: [],
            username: "",
            userCompany: "",
            userTestimonial: "",
            userCompanyImage: "",
            testimonialList: []
        }
    }

    getData = (data) => {
        
        let values = data.val();           
        const res = values
        const post = res.filter(item => item)

        post.forEach(item => {
            console.log(item)

            const newPopularList = { 
                companyName: item.name, 
                companyURL: item.urlToImage               
            }

            this.setState({
                popularList: [...this.state.popularList, newPopularList]
            });
        });                
    }

    getTestimonialData = (data) => {
        
        let values = data.val();           
        const res = values
        const post = res.filter(item => item)

        post.forEach(item => {            

            const newTestimonialList = { 
                username: item.name,
                userCompany: item.companyName, 
                userTestimonial: item.testimonial,
                userCompanyImage: item.urlToImage              
            }

            this.setState({
                testimonialList: [...this.state.testimonialList, newTestimonialList]
            });
        });                
    }

    errData = (err) => {
        console.log("Error");
        console.log(err);
    }    

    componentDidMount(){
        this.database.on('value', this.getData, this.errData);  
        this.testimonialDatabase.on('value', this.getTestimonialData, this.errData);
    }

    render() {
        return (
            <div className="review">
                <div className="popular"> 
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={10}>
                                <Col className="popularHeader">
                                    <Row>
                                        <Col sm={2}><MdBusinessCenter size={40}/> </Col>
                                        <Col sm={8}><p className="popularHeaderTitle">Popular Companies</p></Col>
                                    </Row>
                                </Col>                                
                                {this.state.popularList.length > 0 ?
                                    <div>
                                        <DisplayPopularCompanies companyList={this.state.popularList} startingNumber={0} endingNumber={3}/>                  
                                        <DisplayPopularCompanies companyList={this.state.popularList} startingNumber={3} endingNumber={6}/>                                             
                                    </div> 
                                :   
                                    <div className="loadSpin">
                                        <Spinner animation="grow" variant="warning" />
                                    </div>
                                }
                            </Col>
                            <Col></Col>
                        </Row>                     
                    </Container>
                </div>
                <div className="yourReview">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={10}>
                                <Card border="light" className="reviewCard">
                                    <Card.Body>   
                                    <Row>
                                        <Col className="reviewContent title" sm={6}>Your Review</Col>                                  
                                        <Col className="reviewContent" sm={4}>
                                            <Card.Subtitle className="mb-2">
                                                <Rater size={30} />
                                            </Card.Subtitle> 
                                        </Col>   
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col xs={10}>
                                <div className="testimonialDiv">
                                    <Col className="testimonialHeader">
                                        <Row>
                                            <Col sm={2}><MdRateReview size={40}/> </Col>
                                            <Col sm={8}><p className="popularHeaderTitle">Testimonials</p></Col>
                                        </Row>
                                    </Col>
                                    {this.state.testimonialList.length > 0 ?
                                        <Testimonial testimonials={this.state.testimonialList} />                                    
                                    :                                     
                                        <div className="loadSpin">
                                            <Spinner animation="grow" variant="warning" />
                                        </div>
                                    }
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Review;