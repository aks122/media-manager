import React from 'react'
import { styled } from 'styled-components'
import circle from '../Assests/circle-01.png'
import ellipse from '../Assests/Ellipse 41755.png'
import ellipse1 from '../Assests/Ellipse 41756.png'
import ellipse2 from '../Assests/Ellipse 41757.png'
import FooterMedia from './FooterMedia'
import leftcircle from '../Assests/circle-03.png'

const Consultant = () => {
    return (
        <StyledCards>
            <div className='wrp'>
                <div className='conati'>
                    <div className='containe'>

                        <p className='here'>Here’s what our <span>clients</span> say</p>
                    </div>
                    <div className='view'>
                        <button>View All</button>
                        <div className='circle'>
                        <img src={circle} alt="" className='cir' />
                    </div>
                    </div>

                </div>
                
                <div className="crds-all">
                <div className='leftcircle'>
                    <img src={leftcircle} alt="" />
                </div>
                    <div className='crds'>
                    <div className='crds-wrp'>   
                        <div style={{display:"grid", gridTemplateColumns:"30% 50%", marginLeft:"35px", marginTop:"10px"}}>
                            <div className='ellipse'>
                            <div className='ellip'>
                                <img src={ellipse} alt="" />
                            </div>
                            </div>
                            <div className='erika'>
                              <h2>Erika Migliacco</h2>
                              United states
                            </div>
                            <div className='united'></div>
                        </div>
                        <div className='dummy'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
                        </div>
                    </div>
</div>

<div className='crds1'>
                    <div className='crds-wrp'>   
                        <div style={{display:"grid", gridTemplateColumns:"30% 50%", marginLeft:"35px", marginTop:"10px"}}>
                            <div className='ellipse'>
                            <div className='ellip'>
                                <img src={ellipse1} alt="" />
                            </div>
                            </div>
                            <div className='erika'>
                              <h2>Erika Migliacco</h2>
                              United states
                            </div>
                            <div className='united'></div>
                        </div>
                        <div className='dummy'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
                        </div>
                    </div>
</div>

<div className='crds1'>
                    <div className='crds-wrp'>   
                        <div style={{display:"grid", gridTemplateColumns:"30% 50%", marginLeft:"35px", marginTop:"10px"}}>
                            <div className='ellipse'>
                            <div className='ellip'>
                                <img src={ellipse2} alt="" />
                            </div>
                            </div>
                            <div className='erika'>
                              <h2>Erika Migliacco</h2>
                              United states
                            </div>
                            <div className='united'></div>
                        </div>
                        <div className='dummy'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
                        </div>
                    </div>
</div>
</div>
            </div>
            <FooterMedia/>

        </StyledCards>
    )
}

export default Consultant

export const StyledCards = styled.div`
color: #131313;
.wrp{
    background: rgba(196, 196, 196, 0.10);
    width: 1518px;
    height: 510px;
    margin: 290px 0px 0 0;
}
    .here{
        color: #131313;
font-family: Rubik;
font-size: 40px;
font-style: normal;
line-height: 51px;
text-transform: uppercase;
width: 1095px;
padding-left: 20%;
text-align: initial;
    }
    .here>span{
        color: #131313;
font-family: Rubik;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 51px;
text-transform: uppercase;  
    }
.conati{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.view{
    display: contents;
}
.view>button{
    border-radius: 60px;
background: linear-gradient(122deg, #0C91CF 0%, #223E8D 100%);
width: 188px;
height: 59px;
border: none;
color: white;
}
.circle {
    margin-top: 20px;
    padding-right: 20px;
}
.crds{
    border: 0.5px solid #C2C2C2;
    width: 380px;
height: 304px;
margin-left: 11%;
}
.crds1{
    border: 0.5px solid #C2C2C2;
    width: 380px;
height: 304px;
}
.dummy{
    color: #1D1006;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; 
opacity: 0.699999988079071;
margin-top: 15px;
width: 340px;
text-align: initial;
padding-left: 25px;
}
.erika{
    color: #131313;
font-family: Rubik;
font-size: 15px;
font-style: normal;
font-weight: 500;
text-align: initial;
line-height: 10px; 
width: 187px;
text-transform: uppercase;
}
.united{
    color: #131313;
font-family: Rubik;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 38px; 
width: 340px;
}
.ellip{
    width: 83px;
    height: 83px;
}
.crds-all{
    display: flex;
    gap: 14px;
}
.leftcircle {
    margin-top: 20px;
}
`