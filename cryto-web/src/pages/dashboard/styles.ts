import styled from 'styled-components';

export const Container = styled.div`
     height: 100vh;
     display:flex;
     justify-content:center;
     align-items:center;
`


export const ContainerBody = styled.div`
     display: flex;
     flex-direction: column;
     align-items:center;
     background:darkcyan;
     height:400px;
     width: 600px;
     padding: 20px;



     button{
         height:40px;
         border-radius: 8px;
         width:350px;
         border:0;
         margin-bottom:50px;
     }



     .btc{
         display:flex;
         flex-direction:column;
         align-items:center;
         justify-content:center; 
         div{
             display:flex;
             height:45px;
             width:60px;
             background:#5FE122;
             align-items:center;
             justify-content:center;

         }
     }

`


export const ContainerValue = styled.div`
        margin-top:20px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;

        .USDBR{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin-right:10px;
            
            div{
                background:#5FE122;
                height:35px;
                padding:8px;
            }
        }
       
`