function App() {
  return (
    <div style={{backgroundColor: "skyblue", height: "100vh" }}>
      <div style= {{display: "flex", justifyContent: "center"}}>
      <div style={{margin: 30}}><PostComponent />
       </div>

       <div style={{margin: 30}}><PostComponent />
       </div><div style={{margin: 30}}><PostComponent />
       </div>
      </div>
      <div style={{margin: 10}}><PostComponent />
       </div>
    </div>
    
  );
}

const style = { 
  width: 200, 
  backgroundColor: "white",  // Fixed typo: backgroungColr -> backgroundColor
  borderRadius: 10, 
  borderColor: "gray",  // Fixed typo: bordercolor -> borderColor
  borderWidth: 1, 
  display: "flex" 
};

function PostComponent() {
  return (
    <div style={style}>  {/* Fixed typo: Style -> style */}
      <img 
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        style={{
          width: 60,    // Changed parentheses to curly braces
          height: 75,
          borderRadius: 25,
          margin: 5,
          display: "flex"
        }} 
      />
      <div style={{margin: 2}}>
        <b>LinkedinxTools</b>
        <div>
        follower - 34234
      </div>
      <div style={{ display: "flex"}}>
        Hello sir my name is priyant jharwaland i study in 01 class
      </div>
      
      </div>
      <div style={{fontsize:34, margin: 40}}>
        My name is profile and i am a new .
      </div>
    </div>
    
    
  );

}

export default App;
