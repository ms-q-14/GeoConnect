import * as React from "react";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Place, Star } from "@material-ui/icons";
import "./app.css";
import { useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = React.useState(
    myStorage.getItem("user")
  );
  const mapRef = React.useRef();
  const [pins, setPins] = React.useState([]);
  const [currentPlaceId, setCurrentPlaceId] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [desc, setDesc] = React.useState(null);
  const [rating, setRating] = React.useState(0);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [newPlace, setNewPlace] = React.useState(null);
  const [showPopup, setShowPopup] = React.useState(true);
  const [initialViewState, setInitialViewState] = React.useState({
    longitude: -79.347015,
    latitude: 43.651,
    zoom: 8,
  });

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
    console.log(pins);
  }, []);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setShowPopup(true);
    console.log(currentPlaceId);
    mapRef.current.getMap().flyTo({
      center: [long, lat],
      zoom: 13,
    });
  };

  const handleAddClick = (e) => {
    console.log(e);
    setShowPopup(true);
    setNewPlace({
      lat: e.lngLat.lat,
      lng: e.lngLat.lng,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUser,
      title: title,
      desc: desc,
      rating: rating,
      lat: newPlace.lat,
      long: newPlace.lng,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    myStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <Map
      ref={mapRef}
      initialViewState={initialViewState}
      transitionDuration={1000}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      mapStyle="mapbox://styles/msq14/clbslfgc1000914lvln5kfvhl"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      onDblClick={handleAddClick}
      doubleClickZoom={false}
    >
      {pins.map((p) => {
        return (
          <>
            <Marker
              key={p._id}
              longitude={p.long}
              latitude={p.lat}
              anchor="center"
            >
              <Place
                className="placeMarker"
                style={{
                  color: p.username === currentUser ? "red" : "blueviolet",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>

            {currentPlaceId === p._id && (
              <Popup
                longitude={p.long}
                latitude={p.lat}
                anchor="left"
                closeOnClick={false}
                closeButton={true}
                onClose={() => setCurrentPlaceId(null)}
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label>Review</label>
                  <p className="desc">{p.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<Star className="star" />)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{p.username}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                </div>
              </Popup>
            )}
          </>
        );
      })}
      {newPlace && (
        <Popup
          longitude={newPlace.lng}
          latitude={newPlace.lat}
          anchor="right"
          closeOnClick={false}
          closeButton={true}
          onClose={() => setNewPlace(null)}
        >
          <div>
            <form onSubmit={handleSubmit}>
              <label>Title</label>
              <input
                placeholder="Enter a Location"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Review</label>
              <textarea
                placeholder="Write your review..."
                onChange={(e) => setDesc(e.target.value)}
              />
              <label>Rating</label>
              <select onChange={(e) => setRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button className="submitButton" type="submit">
                Add Experience
              </button>
            </form>
          </div>
        </Popup>
      )}
      {currentUser ? (
        <button className="button logout" onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <div className="buttons-log-reg">
          <button className="button login" onClick={() => setShowLogin(true)}>
            Log In
          </button>
          <button
            className="button register"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>
        </div>
      )}
      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          myStorage={myStorage}
          setCurrentUser={setCurrentUser}
        />
      )}

      <NavigationControl position="bottom-left" />
      <GeolocateControl
        position="bottom-right"
        showUserLocation={true}
        trackUserLocation={true}
      />
    </Map>
  );
}

export default App;
