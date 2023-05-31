import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import img5 from '../../../img/img5.jpg';
import img6 from '../../../img/img6.jpg';
import img12 from '../../../img/img12.jpg';
import img7 from '../../../img/img7.webp';
import profile from '../../../img/profile.png';
import Contact from './Contact';

export default function My() {
  return (
    <div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100" >
        <MDBRow className="justify-content-center align-items-center h-100">
        {/* <h1>Profile</h1> */}
          <MDBCol lg="9" xl="7" style={{width:'100%'}}>
            <MDBCard>
              <div className="rounded-top text-dark d-flex flex-row" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={profile}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  {/* <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn> */}
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Zaki Fauzan Rabbani</MDBTypography>
                  <MDBCardText>Samarinda</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                {/* <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                    <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                  </div>
                </div> */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={img5}
                      alt="image 1" className="w-100 rounded-3" style={{maxHeight:'300px'}} />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={img6}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src={img7}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={img12}
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {/* <Contact/>     */}
      </MDBContainer>
    </div>
  );
}