import React from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
  'http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg',
  'https://isastudentblog.files.wordpress.com/2017/02/dscf06711.jpg',
  'https://www.gradschools.com/sites/all/files/public/images/iStock-510482146.jpg',
  'http://www.mumseword.com/wp-content/uploads/2013/11/Lego-Friends-Diary_Shoot_06.jpg',
  'https://i.ytimg.com/vi/TVsh-mvNLTM/maxresdefault.jpg'
];

const Slideshow = () => {
    return (
      <div className='slideshow_intro'>
        <Slide
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
      </div>
    )
}

export default Slideshow

/* <li class="slide slide1"><img src='http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg'/></li>
      <li class="slide slide2"><img src='https://isastudentblog.files.wordpress.com/2017/02/dscf06711.jpg'/></li>
      <li class="slide slide3"><img src='https://www.gradschools.com/sites/all/files/public/images/iStock-510482146.jpg'/></li>
      <li class="slide slide4"><img src='http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg'/></li>
      <li class="slide slide5"><img src='http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg'/></li>
      <li class="slide slide1"><img src='http://itsaboutpeople.co.za/wp-content/uploads/2017/02/business-people-1.jpg'/></li> */