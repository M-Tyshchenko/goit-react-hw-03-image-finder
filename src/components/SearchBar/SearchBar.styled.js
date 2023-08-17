import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';


export const FormContainer = styled.section`
background-color: #3f51b5;

padding-top: 16px;
padding-bottom: 16px;

display: flex;
justify-content: center;
`
export const FormLabel = styled.label`
position: relative;`

export const FormInput = styled.input`
width: 350px;
height: 35px;
padding-left: 30px;
border-radius: 4px;
border-color: transparent;

`
export const StyledIcon = styled(BsSearch)`
position: absolute;
top: 50%;
left: 5px;
transform: translate(0, -50%);
fill: #4a4f6a;
`;