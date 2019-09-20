import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { ApplicationState } from '../../store'
import gallery from '../../mockData/gallery'



const Home: React.FC = (props) => {

    const imgs = getImg()
    return (
        <div className="home-container">
            <div className="home-content" >
                <div className="home-title">
                    Welcome to React demo site!
                </div>
                <div className="home-description">
                    This is the React demo site made for demonstration frontend mock-up of Instax shop.
                    There presented some e-commerce stuff like catalog and cart.
                    The app using static data and not connected to API. 
                    List of tech You can see the list of used technologies on the page about.
                </div>
                <div className="home-gallery">
                    <Masonry
                    >
                        {imgs}
                    </Masonry>
                </div>
            </div>
        </div> 
    );
}

const getImg = () => {
   const images = gallery.map((item: any) => (
       <div>
            <img style={{width: '300px'}} src={item.src} alt=""/>
       </div>
    ))
    return images
}


const mapStateToProps = (state: ApplicationState) => ({
    items: state.items,
})
  
export default connect(mapStateToProps, null)(Home);