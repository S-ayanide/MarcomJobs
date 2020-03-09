import React from 'react';
import './Review.css'
import DisplayPopularCompaniesOne from '../../Components/DisplayPopularCompanies/DisplayPopularCompaniesOne'
import DisplayPopularCompaniesTwo from '../../Components/DisplayPopularCompanies/DisplayPopularCompaniesTwo'
import Testimonial from '../../Components/Testimonial/Testimonial'
import app from '../../Config/firebaseConfig';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                                        <DisplayPopularCompaniesOne companyList={this.state.popularList} />                  
                                        <DisplayPopularCompaniesTwo companyList={this.state.popularList} />      
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
                                    {this.state.testimonialList.length < 0 ?
                                        <div className="loadSpin">
                                            <Spinner animation="grow" variant="warning" />
                                        </div>
                                    :                                     
                                        <Testimonial testimonials={this.state.testimonialList} />                                    
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