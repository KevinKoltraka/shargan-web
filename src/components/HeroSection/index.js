import React, {useState} from 'react';

import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover ]= useState(false );
    const onHover = ()=> {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Shargan Consulting Agency 
                </HeroH1>
                <HeroP>
                Empowering your success through expert training, strategic consulting, and tailored recruitment solutions.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ="signin" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                     Explore More { hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection