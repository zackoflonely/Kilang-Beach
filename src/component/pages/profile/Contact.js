import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import emailjs from 'emailjs-com';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bs5oev8', // Ganti dengan Service ID Email.js Anda
        'template_4eyepm6', // Ganti dengan Template ID Email.js Anda
        e.target,
        'nAW9lQJI3hjvvuxUg' // Ganti dengan User ID Email.js Anda
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again later.');
        }
      );

    e.target.reset();
  };

  return (
    <section className='border text-center mb-4' style={{ marginTop: '2%', padding: '2%', backgroundColor: 'rgba(245, 245, 245, 0.7)' }}>
      <h3 className='mb-5'>Contact us</h3>
      <div className='row'>
        <div className='col-lg-5'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8206098307046!2d116.813799873825!3d-1.2813636356183675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1472f6cbb95bb%3A0x62c0dbbccde2df3d!2sPantai%20Kilang%20Mandiri!5e0!3m2!1sid!2sid!4v1684966135244!5m2!1sid!2sid' className='map-contact' style={{ border: '0' }} loading='lazy'></iframe>
        </div>
        <div className='col-lg-7 contact'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-md-12'>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput label='First name' name='firstName' id='form3FirstName' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Email Address' name='email' id='form3Email' />
                  </MDBCol>
                </MDBRow>
                <MDBInput type='text' label='Subject' name='subject' id='form3Subject' wrapperClass='mb-4' />
                <MDBTextArea label='Message' name='message' id='form3Textarea' wrapperClass='mb-4' style={{ minHeight: '100px' }} />
                <MDBBtn type='submit' color='primary' className='mb-4'>
                  Send
                </MDBBtn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}