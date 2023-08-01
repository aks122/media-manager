import React from 'react'
import flat from '../Assests/flat-lay-desk-with-laptop-glasses 1.png'
import { styled } from 'styled-components'
import crown from '../Assests/crown.png'
import clock from '../Assests/Illustrative-clock.png'
import folder from '../Assests/Group 1000007765.png'
import note from '../Assests/Illustrative-Note.png'
import people from '../Assests/Illustrative-people.png'
import Consultant from './Consultant'

const Homepage = () => {
    return (
        <StyledHome>
            <div className='wrap'>
                <img src={flat} alt="" className='flat' />


                <div className="power">
                    <div className='powerful'>A powerful solution for </div>
                    <div className='management'>Media management</div>
                    <div className='lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</div>
                    <button className='btn'>Request a Demo</button>
                    <div className="wrape">
                        <div className='flex'>
                            <img src={crown} alt="" className='crown' />
                            <div className='feature'>Features</div>
                        </div>
                    </div>
                    <div className="left">
                        <div className='what'>What can <span>Media manager</span> do for you?</div>
                        <div className='lorem-ipsum'>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing</div>
                        <div className='cards'>
                            <div style={{ display: "flex", background: "white", justifyContent: "space-between", borderRadius: "10px", padding: "0 30px", gap: "30px", height: "141px", width: "530px", border: "1px solid #E1E1E1" }}>
                                <div className="left1">
                                    <img src={clock} alt="" className='clock' />
                                </div>
                                <div className="right1">
                                    <div className='time'>Time Check</div>
                                    <div className='share'>Share your photos, things about yourself, and your ideal partner.</div>
                                </div>
                            </div>

                            <div className='card2'>
                                <div className='card2-1'>
                                    <div className="left1">
                                        <img src={folder} alt="" className='clock' />
                                    </div>
                                    <div className="right1">
                                        <div className='time'>Create New Folders</div>
                                        <div className='share'>Share your photos, things about yourself, and your ideal partner.</div>
                                    </div>
                                </div>
                            </div>


                            <div className='cards'>
                                <div style={{ display: "flex", borderRadius: "10px", justifyContent: "space-between", padding: "0 30px", gap: "30px", height: "141px", width: "530px", border: "1px solid #E1E1E1" }}>
                                    <div className="left1">
                                        <img src={note} alt="" className='clock' />
                                    </div>
                                    <div className="right1">
                                        <div className='time'>Files Customization</div>
                                        <div className='share'>Share your photos, things about yourself, and your ideal partner.</div>
                                    </div>
                                </div>
                            </div>


                            <div className='card2'>
                                <div className='card2-1'>
                                    <div className="left1">
                                        <img src={people} alt="" className='clock' />
                                    </div>
                                    <div className="right1">
                                        <div className='time'>Collaboration with Friends</div>
                                        <div className='share'>Share your photos, things about yourself, and your ideal partner.</div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Consultant />
        </StyledHome>
    )
}

export default Homepage
export const StyledHome = styled.div`

.wrap{
    background-image: url(flat);
}
    .flat{
        width: 100%;
    }
    .power {
    position: absolute;
    z-index: 1;
    top: 58%;
    left: 28%;
}
.powerful{
    color: #292929;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
}
.management{
    font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: 64px; 
text-transform: uppercase;
width: 638px;
color: #223E8D;
}
.lorem{
    color: #1D1006;
font-family: Rubik;
font-size: 16px;
font-style: normal;
text-align: initial;
font-weight: 400;
line-height: 28px;
text-align: initial;
width: 588px;
margin-left: 40px;
}
.lorem-ipsum{
    color: #1D1006;
font-family: Rubik;
font-size: 16px;
font-style: normal;
text-align: initial;
font-weight: 400;
line-height: 28px;
text-align: initial;
width: 588px;
margin-left: 75px;
}
.btn{
    width: 251px;
height: 54px;
border: none;
    border-radius: 150px;
    color: #fff;
background: linear-gradient(122deg, #0C91CF 0%, #223E8D 100%);

}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
height: 39px;
position: absolute;
right: 120%;
}
.feature{
    color: #0C91CF;
    font-family: Rubik;
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;
}
.left {
    position: absolute;
    right: 33%;
    top: 115%;
    display: grid;
    grid-template-columns: 74% 26%;
    justify-content: space-between;
    width: 100%;
    height: 22px;
    gap: 20px;
}
.what{
    color: #292929;
font-family: Gilroy-Bold;
font-size: 27px;
font-style: normal;
font-weight: 600;
line-height: 40px; 
text-align:initial;
text-transform: uppercase;
}
.what>span{
    color: #223E8D;
    /* width: 266px; */
height: 22px;
}
.cards{
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 35px;
    width: 530px;
}
.clock{
    width: 65px;
    margin: 20px 0;
height: 73px;
}
.time{
    color: #292929;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: initial;
}
.share{
    color: #292929;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px;
text-align: initial;
opacity: 0.699999988079071;
width: 372px;
}
.right1{
    margin: 20px 0;
}
.card2{
    background: #fff;
    margin: 0 100%;

}
.card2-1 {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    border: 1px solid #E1E1E1;
    height: 141px;
    width: 560px;
    background: white;
    padding: 0 30px;
    border-radius: 10px;
}
/* **************************************DARK 2 PAGE*************************************************************** */


`
