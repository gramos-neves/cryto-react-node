import styled from 'styled-components';

export const Container = styled.div`
     height: 100vh;
     display:flex;
     justify-content:center;
     align-items:center;
`

export const ContainerLogin = styled.div`
     display: flex;
     flex-direction: column;
    
     height:400px;
     width: 500px;
     padding: 20px;


     strong{
         margin-top:20px;
         line-height:normal;
         color:darkcyan;
     }

     input {
          margin-top: 10px;
          height: 45px;
          border-radius: 8px;
          border: 0;
          padding:15px;
          color:darkcyan;
     }

 

`

export const Button = styled.button`
          display:flex;
          justify-content:center;
          align-items:center;
          margin-top:30px;
          height: 45px;
          border-radius: 8px;
          border: 0;
          color:darkcyan;
          background:#5FE122;
     

     svg{
         margin-right:10px;
         margin-bottom: 3px;
     }


`