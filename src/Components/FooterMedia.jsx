import React from 'react'
import { styled } from 'styled-components'
import linked from '../Assests/Group 9222.png'
import facebook from '../Assests/Group 9250.png'
import instagram from '../Assests/Group 9251.png'
import twitter from '../Assests/Group 9252.png'
import youtube from '../Assests/YouTube - Original.png'

const FooterMedia = () => {
  return (
    <StyledMedia>
    <div className="dark">
    <div>
    <div style={{display:"flex"}}>
    <div className='media'>
        <h2>Media Manager</h2>
        <p className='ready'>Ready to transform your Business digitally</p>
        <p className='ready'>Follow us on</p>
        <div className='images'>
            <img src={linked} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" className='youtube'/>
        </div>
    </div>

    <div className='about'>
        <h3>About Us</h3>
        <div className='ipsum'>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </div>
    </div>

    <div className='about1'>
        <h3>Our Services</h3>
        <div className='ipsum1'>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </div>
    </div>

    <div className='about2'>
        <h3>Sign-up for Newsletter</h3>
        <div className='ipsum2'>
       <input type="text" placeholder='Designer@gmail.com'  className='designer'/>
        </div>
    </div>
    <div className='submit'>
       <button>Submit</button>
        </div>
    </div>
    <div>
    </div>
    </div>
</div>
</StyledMedia>
  )
}

export default FooterMedia
export const StyledMedia = styled.div`
.dark{
    background: linear-gradient(135deg, #000F26 0%, #000F26 0%, #002C42 0.01%, #001214 0.02%, #021136 100%);
}
.media{
    text-align: initial;
padding-left: 10%;
padding-top: 2%;

}
.media>h2{
    color: #FFF;
font-family: Rammetto One;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
}
.ready{
    color: #FFF;
font-family: Rubik;
font-size: 20px;
width: 55%;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.youtube{
    background: red;
    width: 36px;
height: 36px;
border-radius: 5px;
}
.images {
    display: flex;
    gap: 10px;
}
.images>img{
    margin-bottom: 40px;
}
.about{
    margin-top: 2%;
}
.about>h3{
    height: 15px;
    color: #FFF;
font-family: Rubik;
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right: 15px;
}
.ipsum{
    margin-top: 40px;
}
.ipsum>p{
    height: 15px;
    color: #FFF;
font-family: Rubik;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.about1{
    margin-top: 2%;
}
.about1>h3{
    height: 15px;
    color: #FFF;
font-family: Rubik;
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 70px;
}
.ipsum1{
    margin-top: 40px;
    margin-left: 60px;
}
.ipsum1>p{
    height: 15px;
    color: #FFF;
font-family: Rubik;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.about2{
    margin-top: 2%;
}
.about2>h3{
    height: 15px;
    color: #FFF;
font-family: Rubik;
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 70px;
}
.designer{
    width: 275px;
height: 56px;
border-radius: 60px;
border: 0.5px solid #FFF;
background: rgba(255, 255, 255, 0.20);
color:#fff;
padding-left: 20px;
&::placeholder {
  color: white;
  
  opacity: 1; /* Firefox */
}
}
.ipsum2 {
    margin-left: 25%;
    margin-top: -15px;
}
.submit {
    margin-top: 4.5%;
    margin-left: 6%;
}
.submit>button{
    display: inline-flex;
    height: 56px;
    padding: 10px 60px;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    background: #FFF;
    gap: 60px;
}
`