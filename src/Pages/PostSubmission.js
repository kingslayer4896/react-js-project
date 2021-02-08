import React from 'react';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';

function PostSubmission() {
    return (
        <div class="container-fluid bg-white">
            <div class="row justify-content-center align-items-center pt-4 mb-4">
                <div class="col-12 col-md-9">
                    <h3 class="text-center mb-4"><strong>UPSC</strong> PATHSHALA</h3>
                    <div class="card">
                        <div class="card-body p-0">
                            <div class="bg-primary p-4">
                                <h3 class="text-center d-none d-md-block"><strong>Thank you for taking the first step towards<br />UPSC Preparation!</strong></h3>
                                <h3 class="text-center d-block d-md-none"><strong>Thank you for taking the first step towards UPSC Preparation!</strong></h3>
                            </div>
                            <div class="d-md-flex p-4 align-items-md-center">
                                <img id="image2" src={image2} class="float-left mr-5" style={{ height:250 }} />
                                <div>
                                    <h4><strong>What's next?</strong></h4>
                                    <h5><i class="fa fa-phone fa-lg mr-2" aria-hidden="true"></i> You will get a call within 12 hours.</h5>
                                    <h5><i class="fa fa-video-camera fa-lg mr-2" aria-hidden="true"></i> Don't miss this call. Ask for the Free Demo.</h5>
                                    <h5><i class="fa fa-book fa-lg mr-2" aria-hidden="true"></i> Attend the Demo and experience our teaching methods.</h5>
                                    <h5><i class="fa fa-certificate fa-lg mr-2" aria-hidden="true"></i> Ask if you are eligible for any scholarshipor discounts.</h5>
                                </div>
                            </div>	
                        </div>				
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center my-4">
                <div class="col-12 col-md-7">
                    <h3 class="text-center mb-4"><strong>Our Star Students</strong></h3>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card bg-secondary text-white mx-md-5">
                                    <div class="card-body px-md-5 py-4">
                                        <div>
                                            <img src="https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?ssl=1" class="rounded-circle float-left mr-4" style={{ width:100 }} />
                                            <h4 class="pt-2 mb-0">Akshay Agarwal</h4>
                                            <h4><strong>AIR 43 in UPSC CSE 2019</strong></h4>
                                        </div>
                                        <h5 class="my-4">"UPSC Pathsala's coverage of current affairs was something that I found very helpful. It covered everything in General Studies syllabus."</h5>
                                    </div>				
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card bg-secondary text-white mx-md-5">
                                    <div class="card-body px-md-5 py-4">
                                        <div>
                                            <img src="https://i2.wp.com/airlinkflight.org/wp-content/uploads/2019/02/male-placeholder-image.jpeg?ssl=1" class="rounded-circle float-left mr-4" style={{ width:100 }} />
                                            <h4 class="pt-2 mb-0">Akshay Agarwal</h4>
                                            <h4><strong>AIR 43 in UPSC CSE 2019</strong></h4>
                                        </div>
                                        <h5 class="my-4">"UPSC Pathsala's coverage of current affairs was something that I found very helpful. It covered everything in General Studies syllabus."</h5>
                                    </div>				
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center my-4">
                <div class="col-md-6">
                    <h5 class="text-center mt-5 mb-4">Our students vouch for us. Hear them speak.</h5>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/N2JyaTpO4QQ?rel=0" allowfullscreen></iframe>
                        </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center my-5">
                <div class="col-md-12 bg-primary">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-9 d-md-flex justify-content-md-between align-items-center py-5">
                            <h3 class="d-block d-md-none text-center"><strong>Our Newest Feature</strong></h3>
                            <h5 class="d-block d-md-none text-center">Monthly Current Affairs Magazine - Edition Dec 2020</h5>
                            <img id="image3" src={image3} class="float-left my-4 my-md-0" style={{ height:350 }} />
                            <div class="text-center text-md-right">
                                <h3 class="d-none d-md-block"><strong>Our Newest Feature</strong></h3>
                                <h5 class="mb-4 d-none d-md-block">Monthly Current Affairs Magazine - Edition Dec 2020</h5>
                                <button class="btn btn-secondary" style={{ width:300 }}><i class="fa fa-download fa-lg mr-2" aria-hidden="true"></i> Download for FREE here</button>
                                <h5 class="mt-4">You will get this monthly magazine<br /> when you enroll with us</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center my-4">
                <div class="col-md-12">
                    <h3 class="text-center"><strong>What more you will get?</strong></h3>
                    <div class="d-flex justify-content-center my-4">
                        <div class="div-outline div-outline-upper text-right">Personal Mentorship</div>
                        <div class="div-outline div-outline-upper text-left">Daily Live Classes</div>
                    </div>
                    <div class="d-flex justify-content-center my-4">
                        <div class="div-outline div-outline-middle text-right">Mock Quizzes</div>
                        <div class="div-outline div-outline-middle text-left">Interview Preparation</div>
                    </div>
                    <div class="d-flex justify-content-center my-4">
                        <div class="div-outline div-outline-lower text-right">1000+ hours of Video content</div>
                        <div class="div-outline div-outline-lower text-left">Help in filling DAF</div>
                    </div>
                    <div class="d-flex justify-content-center my-4">
                        <button class="btn btn-orange" style={{ width:150 }}><i class="fa fa-globe fa-lg mr-2" aria-hidden="true"></i> Website</button>
                        <button class="btn btn-red" style={{ width:150 }}><i class="fa fa-youtube-play fa-lg mr-2" aria-hidden="true"></i> Youtube</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostSubmission
