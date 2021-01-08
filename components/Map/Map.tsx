import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ caterers }) => {
  const defaultProps = {
    center: { lat: 50.0, lng: 50.0 },
    zoom: 11,
  };

  let infoWindow;
  let geocoder;

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects

    geocoder = new maps.Geocoder();
    infoWindow = new maps.InfoWindow();

    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[maps.ControlPosition.TOP_CENTER].push(locationButton);

    locationButton.addEventListener("click", () => {
      getCurrentPosition();

      caterers.map((caterer) => {
        codeAddress(caterer);
      });
    });

    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    };

    getCurrentPosition();

    const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
    };

    const codeAddress = (caterer) => {
      let address = caterer.address;
      geocoder.geocode({ address: address }, function (results, status) {
        if (status == "OK") {
          map.setCenter(results[0].geometry.location);

          let contentString = "<h1>" + caterer.username + "<h1/>";

          let infowindow = new maps.InfoWindow({
            title: caterer.name,
            content: contentString,
          });

          let marker = new maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });

          marker.addListener("click", () => {
            console.log("CLICKED");
          });

          marker.addListener("mouseover", function () {
            infowindow.open(map, this);
          });

          marker.addListener("mouseout", function () {
            infowindow.close();
          });

          marker.setMap(map);
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    };
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDJq-Y_lw2givoAfmnl7s2DSxLpyu4m7rY",
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
