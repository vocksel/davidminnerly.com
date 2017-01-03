import React from 'react';

import Content from 'components/content/Content.jsx';
import ContentTitle from 'components/content/ContentTitle.jsx';
import PhotoWrapper from 'components/photo/PhotoWrapper.jsx';
import PhotoLink from 'components/photo/PhotoLink.jsx';
import PhotoImage from 'components/photo/PhotoImage.jsx';
import PhotoCaption from 'components/photo/PhotoCaption.jsx';

const url = 'http://fireflies.davidminnerly.com';

function Fireflies(props) {
  return (
    <Content id={"echo-ridge"}>
      <ContentTitle>Fireflies</ContentTitle>

      <p><a href={url}>Fireflies</a> is a small application that displays a quote and background image at random every time the page is loaded.</p>

      <PhotoWrapper>
        <PhotoLink href={url} title={"Check out Fireflies in person"}>
          <PhotoImage image={require('img/projects/fireflies/perks.png')} />
        </PhotoLink>

        <PhotoCaption>A screenshot of Fireflies in action.</PhotoCaption>
      </PhotoWrapper>

      <p>It started as an <a href="https://angularjs.org">AngularJS</a> app. It fit my needs very well at the start, but a major drawback to my setup was that new images and quotes were cumbersome to implement.</p>

      <p>I later fixed this by porting Fireflies to <a href="https://djangoproject.org">Django</a>. This works considerably better, as now when I want to add a new image or quote, I can do it directly from the admin interface.</p>

      <PhotoWrapper>
        <PhotoLink href={url} title={"Check out Fireflies in person"}>
          <PhotoImage image={require('img/projects/fireflies/stars.png')} />
        </PhotoLink>

        <PhotoCaption>Another screenshot of Fireflies, with a different quote and background.</PhotoCaption>
      </PhotoWrapper>

      <p>All of the backgrounds and quotes mean a lot to me, I picked ones that I personally liked, and because of that I hold Fireflies very near to my heart.</p>
    </Content>
  )
}

export default Fireflies;
