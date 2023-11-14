/* eslint-disable react/prop-types */
 import styled from "styled-components";

 const StyledButton = styled.button`
   padding: 3px;
   background-color: #008bc7;
   color: white;
   width: 480px;
   margin: 0 240px;
   border-radius: 30px;
   cursor: pointer;
   border: none;
 `;

 export default function StyleButton({ onClick }) {
   return (
     <div>
       <StyledButton onClick={onClick}>Detalhamento</StyledButton>
     </div>
   );
 }

