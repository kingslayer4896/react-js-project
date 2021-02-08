import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"; 
import image1 from '../image1.jpg'

function ContactForm() {
    const [values, setValues] = useState({
        mobile: '',
        name: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    let history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                history.push("/postsubmission");
            }
        },
        [errors]
    );

    const validateInfo = (values) => {
        const errors = {};

        if ((!values.mobile) || (!/[0-9]|\./.test(values.mobile)) || (values.mobile.length < 10)) {
            errors.mobile = 'Please enter a valid mobile number';
        }
        
        if ((!values.name) || (!/^[A-Za-z]+/.test(values.name)) || (values.name.length < 4)) {
            errors.name = 'Please enter a valid name';
        }

        if ((!values.email) || (!/\S+@\S+\.\S+/.test(values.email))) {
            errors.email = 'Please enter a valid e-mail id';
        }

        return errors;
    };

    return (
        <div class="container">
            <div class="row vh-100 justify-content-center align-items-center">
                <div class="col-md-6 px-4">
                    <h3 class="text-center text-md-left"><strong>UPSC</strong> PATHSHALA</h3>
                    <h2 class="mb-4 text-center text-md-left d-none d-md-block">Best Online Coaching<br />for UPSC Preparation</h2>
                    <h2 class="mb-4 text-center d-md-none d-block">Best Online Coaching for UPSC</h2>
                    <img src={image1} class="w-100 d-none d-md-block" />
                </div>
                <div class="col-md-6 px-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center my-0"><strong>Book a Free Demo Class</strong></h3>
                            <h5 class="text-center text-red my-0">Limited Seats Only !</h5>
                            <form onSubmit={handleSubmit}>
                                <fieldset class="input-group border px-4 pb-2 my-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text border-0 bg-white pl-0">+91 - </span>
                                    </div>
                                    <legend class="w-auto mb-0">Mobile Number:</legend>
                                    <input id="mobile" type="text" name="mobile" class="form-control shadow-none px-0 border-0" onChange={handleChange} />
                                </fieldset>
                                {errors.mobile && <h6 class="text-red">{errors.mobile}</h6>}
                                <fieldset class="form-group border px-4 pb-2 my-4">
                                    <legend class="w-auto mb-0">Full Name:</legend>
                                    <input id="name" type="text" name="name" class="form-control shadow-none px-0 border-0" onChange={handleChange} placeholder="Enter Full Name" />
                                </fieldset>
                                {errors.name && <h6 class="text-red">{errors.name}</h6>}
                                <fieldset class="form-group border px-4 pb-2 my-4">
                                    <legend class="w-auto mb-0">E-mail ID:</legend>
                                    <input id="email" type="text" name="email" class="form-control shadow-none px-0 border-0" onChange={handleChange} placeholder="Enter E-mail ID" />
                                </fieldset>
                                {errors.email && <h6 class="text-red">{errors.email}</h6>}
                                <div class="form-group my-4">
                                    <label for="select">What describes you best?</label>
                                    <select class="selectpicker form-control border shadow-none" title="Select options">
                                        <option>College Student</option>
                                        <option>Working Professional</option>
                                        <option>Full time aspirant</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-block btn-primary shadow-none mt-4 mb-2">Submit</button>
                                <h6 class="text-center text-muted px-md-5">By clicking 'submit' button you explicitly solicit a call & email from uFaber</h6>
                            </form>
                        </div>				
                    </div>
                    <img src={image1} class="w-100 my-4 d-block d-md-none" />
                </div>
            </div>
        </div>
    )
}

export default ContactForm



