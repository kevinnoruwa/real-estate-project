import React from 'react';

class Footer extends React.Component {
    constructor(){
        super()

    }

    render(){
        return(
            <footer className=''>
                <div className='footer-info'>
                    <p className='info info-1'>Ready Homes Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please contact us.</p>
                    <p className='info info-2'>Ready Homes, Inc. has a real estate brokerage license in multiple states. </p>
                </div>
                <div className='play-stores'>
                    <div className='play-stores-grid'>
                        <div className='store-logo-1'>
                            <img src='https://i.postimg.cc/Wz0K4YGQ/app-store-img.png'/>
                        </div>
                        <div className='store-logo-2'>
                            <img src='https://i.postimg.cc/prQGvhxv/google-play-store-img.png'/>
                        </div>
                    </div>
                </div>
                <div className='extra-info group'>
                    <div>
                        Ready Homes 
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div>
                        <span>follow Us:</span>
                        <i className="fa fa-facebook-official l" aria-hidden="true"></i>
                        <i className="fa  fa-twitter-square l" aria-hidden="true"></i>
                    </div>
                    <div>
                        &copy; 2020 Ready Homes
                    </div>
                </div>
                <div className='group footer-image'>
                    <img src='https://i.postimg.cc/Qtbn7K9M/city-vector-image.png'/>
                    <img src='https://i.postimg.cc/Qtbn7K9M/city-vector-image.png'/>
                </div>
            </footer>
          
        )
    }
}



 export default Footer