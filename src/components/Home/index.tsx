import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { ApplicationState } from '../../store'
import gallery from '../../mockData/gallery'
import { ReactComponent as MountsSvg } from '../../assets/img/mounts.svg';

const Home: React.FC = (props) => {

    const imgs = getImg()
    return (
        <div className="home-container">
            <div className="welcome-head">
                <MountsSvg />
            </div>
            <div className="home-content" >
                {/* <div className="home-title">
                </div> */}
                <div className="home-description">
                    This site is made to demonstrate frontend mock-up of Instax shop.
                    The site presents some e-commerce stuff like catalog and cart.
                    The app uses static data and isn't connected to backend yet. 
                    You can see the list of used technologies on the about page.
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