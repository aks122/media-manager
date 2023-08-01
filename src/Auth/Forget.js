import React from 'react'
import styled from 'styled-components'

const Forget = () => {
    return (
        <StyledForget>
            <div className='wrapper-Forget'>
                <div className='cont'>
                    <div className='forget-password'>Forget password</div>
                    <p className='name'>Email</p>
                    <div style={{ margin: "10px 0" }}>
                        <input type="text" placeholder='john@gmail.com' className='inputyour' />
                    </div>
                    <div>
                        <button className='reset'>Reset my password</button>
                    </div>
                </div>
            </div>
        </StyledForget>
    )
}

export default Forget
export const StyledForget = styled.div`
.cont{
    text-align: center;
}
    .forget-password{
text-align: center;
color: #0057E0;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Gilroy-Medium;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: 70px; 
text-transform: uppercase;
letter-spacing: -1.34px;
    }
   .name{
    margin-right: 19%;
    font-family: Gilroy-Medium;
    font-size: 20px;
   }
    .inputyour{
        border-radius: 15px;
    height: 40px;
    width: 23%;
    padding-left: 20px;
    }
    .reset{
        background: blue;
        color: white;
        text-transform: capitalize;
        border-radius: 15px;
    height: 40px;
    width: 190px;
    border: none;
    }

`