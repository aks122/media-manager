import React from 'react';
import { Layout, Space } from 'antd';
import HeaderWebpage from '../Components/HeaderWebpage';
import styled from 'styled-components';
import Homepage from '../Components/Homepage';
const { Header, Footer,  Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  lineHeight: '64px',
//   backgroundColor: 'rgba(93, 92, 92, 0.37)0%, rgba(255, 255, 255, 0.99) 10.94%, rgba(255, 255, 255, 0.87) 63.54%, rgba(255, 255, 255, 0.63) 100%)',
backgroundColor:"#fff"
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


const Webpage = () => (
    <LayoutWeb>
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}><HeaderWebpage/></Header>
      <Content style={contentStyle}><Homepage/></Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
    
  </Space>
  </LayoutWeb>
);
export default Webpage;
export const LayoutWeb = styled.div`

`