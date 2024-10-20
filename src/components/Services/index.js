import React from 'react';
import Icon1 from '../../images/resource.gif';
import Icon2 from '../../images/php.gif';
import Icon3 from '../../images/analytics.gif';
import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP  } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Human resources consultancy </ServicesH2>
                    <ServicesP>We specialize in enhancing organizational effectiveness through human resources consulting.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> IT consultancy </ServicesH2>
                    <ServicesP>We deliver expert IT consultancy to optimize your technology and drive business success.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Financial consultancy</ServicesH2>
                    <ServicesP>We offer financial consultancy to empower you with insights for smart decision-making.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services