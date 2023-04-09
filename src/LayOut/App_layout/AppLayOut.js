import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'


const AppLayOut = ({children}) => {
  return (
    <>

    <Header/>
    <div className="container-fluid">
    <main style={{minHeight : "80vh"}}>
        {children}
    </main>
    </div>
    <Footer/>
    </>
  )
}

export default AppLayOut
// import { Layout, Space } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;
// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 50,
//   lineHeight: '64px',
//   backgroundColor: '#7dbcea',
// };
// const contentStyle = {
//   textAlign: 'center',
//   minHeight: 600,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9',
// };
// const siderStyle = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// };
// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#7dbcea',
// };
// const AppLayOut = ({children}) => (
//   <Space
//     direction="vertical"
//     style={{
//       width: '100%',
//     }}
//     size={[0, 48]}
//   >
   

//       <Layout>
//         <Header style={headerStyle}>Header</Header>
//         <Layout>
//           <Sider style={siderStyle}>Sider</Sider>
//           <Content style={contentStyle}>{children}</Content>
//         </Layout>
//         <Footer style={footerStyle}>Footer</Footer>
//       </Layout>
//     </Space>
//     );
//     export default AppLayOut;