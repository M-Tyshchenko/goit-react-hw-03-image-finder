import {
  FormContainer,
  FormInput,
  FormLabel,
  StyledIcon,
  SubmitBtn,
} from './SearchBar.styled';

export const SearchBar = ({ changeQuery }) => {
  return (
    <FormContainer>
      <form
        onSubmit={event => {
          event.preventDefault();
          changeQuery(event.target.elements.query.value);
          event.target.reset();
        }}
      >
        <FormLabel>
          <SubmitBtn type="submit">
            <StyledIcon />
          </SubmitBtn>

          <FormInput type="text" name="query" />
        </FormLabel>
      </form>
    </FormContainer>
  );
};
