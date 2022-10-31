import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

// const App=()=>{
class App extends React.Component {
  state = { images: [] };
  //   async onSearchSubmit(term) {
  onSearchSubmit = async (term) => {
    const resp = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(resp.data.results)
    this.setState({ images: resp.data.results }); //it will cause images to re render
  };

  // console.log(term)
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
        {/* Found:{this.state.images.length} images */}
      </div>
    );
  }
}
export default App;
