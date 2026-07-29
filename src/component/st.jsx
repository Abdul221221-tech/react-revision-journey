import styled from "styled-components";

const NewButton = styled.button`
  background-color: ${(props) =>
    props.age > 18 ? "green" : "blue"}; 

  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

// Yahan "green" aur "blue" sirf CSS color values hain, CSS classes nahi.
// Styled Components me className ya CSS classes use nahi karte.
// Hum template literal ke andar `${}` ki help se JavaScript likhkar
// CSS property ki value ko dynamically change karte hain.  color: white;



// let age =19
// const NewButton = styled.button`
//   background-color: ${
//     age > 18 ? "green" : "blue"};
//   color: white;
//   padding: 10px 20px;
//   border: noneN
//   border-radius: 5px;
// `;
export function Practice() {
  const age = 19;

  return (
    <NewButton age={age}>
      Hello {age}
    </NewButton>
  );
}
//   template literal method for style componenet
// in this  evrything inside `` is like real css that we actaully do   
// it also allow you to coonditional  styling

 
const Button = styled.button((props) => ({
  backgroundColor: props.primary ? "green" : "red",
  color: "white",
  padding: "10px 20px",
}));

 export function Afu() {
  return (
    <>
      <Button primary>Save</Button>
      <Button>Delete</Button>
    </>
  );
}
