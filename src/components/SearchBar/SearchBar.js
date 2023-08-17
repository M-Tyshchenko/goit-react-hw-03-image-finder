import { FormContainer, FormInput, FormLabel, StyledIcon } from "./SearchBar.styled";


export const SearchBar = () => {
  return (
    <FormContainer>
          <form>
              <FormLabel>
              <StyledIcon/> 
              <FormInput type="text" name="" />
             </FormLabel>
      </form>
    </FormContainer>
  );
};
