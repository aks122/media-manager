import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const HeaderWebpage = () => {
    const navigate = useNavigate();

    return (
        <HeaderMedia>
            <section className='media'>
                <div className="container">
                    <div className='wrapper'>Media Manager</div>
                    <div className="right">
                    <div className='products'>
                        <select name="web" id="web">
                            <option value="solutions">Solutions</option>
                            <option value="Product">Product</option>
                            <option value="Pricing">Pricing</option>
                        </select>

                        <select name="web" id="web">
                            <option value="Product">Product</option>
                            <option value="solutions">Solutions</option>
                            <option value="Pricing">Pricing</option>
                        </select>

                        <select name="web" id="web">
                            <option value="Pricing">Pricing</option>
                            <option value="Product">Product</option>
                            <option value="solutions">Solutions</option>
                        </select> 
                         <div className="stroke">
                        <p className='line'>|</p>
                        </div>
                        <div className="sign">
                            <button className='login' onClick={()=>navigate("/Login")}>Login</button>
      <button className='signup' onClick={()=>navigate("/Signup")}>Sign Up</button>

                         </div>
                    </div>
                </div>
                </div>
            </section>
        </HeaderMedia>
    )
}

export default HeaderWebpage

export const HeaderMedia = styled.div`
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
}
.wrapper{
    color: #223C8C;
    font-family: Rammetto One;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
}
#web{
    border: none;
}
.products {
    display: flex;
    gap: 20px;
}
.line{

    /* opacity: 0.5;
    color : rgba(0, 87, 224, 0.19); */
    font-size: xx-large;
    font-weight: 500;
}
.sign {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}
.login{
    background-color: white;
    border: none;
    cursor: pointer;
}
.signup{
    width: 100px;
height: 39px;
border-radius: 10px;
background: #0057E0;
box-shadow: 0px 10px 17px 8px rgba(19, 98, 252, 0.15);
border: none;
color: white;
cursor: pointer;
}
`