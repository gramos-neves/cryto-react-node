import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isErrored: boolean;
}


export const Container = styled.div`
        height: 100vh;
        display:flex;
        justify-content:center;
        align-items:center;
`

export const ContainerBody = styled.div`
     display: flex;
     flex-direction: column;
     background:darkcyan;
     height:400px;
     width: 500px;
     padding: 20px; 
     
     `

export const Back = styled.div`
          height:30px;
          width: 100px;
          background:#5FE122;
          border-radius:8px;  
          display: flex;
          flex-direction:row;
          justify-content:space-evenly;
          align-items:center;

          button{
              flex:1;
              background:transparent;
              border:0;
              color:darkcyan;
            }

            svg{
                margin-right:5px;
                margin-top:5px;     
            }

     `


export const Body = styled.div<ContainerProps>`
         display:flex;
         flex-direction:column;
         align-content:center;
         justify-content:center;
         width:320px;
         margin-left:60px;
         margin-top: 40px;
        

           
         span{
             margin-bottom: 15px;
             font-weight:bold;
         }

         strong{
             margin-bottom:10px;
         }

         select{
             margin-bottom:10px;
             height:45px;
             padding:5px;
             color:darkcyan;
             border-radius:8px;
         }
    
        input{
          margin-bottom: 10px;
          height: 45px;
          border-radius: 8px;
          border: 2px solid darkcyan;  
          padding:15px;
          color:darkcyan;

          ${(props) =>
    props.isErrored && css`
          border-color: #c53030; 
          border:1;
          `}
         
        }
        
        

        input::placeholder{
          color: ${shade(0.1, '#5FE122')}
        }

        button{
          margin-top:20px;
          height: 45px;
          border-radius: 8px;
          border: 0;
          color:darkcyan;
          background:#5FE122;
        }

    `


