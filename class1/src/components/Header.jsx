function Header() {
  function dosomething(e){
    alert(e.target)
  }
  function some(e){
    alert(e.target.innerText)

  }
  return (
     <>
      <h1>TO DO Application</h1> 
      <button onClick={dosomething}>Click Me</button>
      <button onClick={(e)=>{some(e)}}>Click Me+</button>
      </>
  );
}
export default Header;