import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/favourite">
          <FavouritePage/>
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/album/:id">
          <AlbumPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
