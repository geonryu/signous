import { useEffect } from "react";
import { Section, Wrap } from "../global/layout";

export default function StoreLists() {
    useEffect(() => {
        getLocation();
    }, []);

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
          console.log("Geolocation is not supported by this browser.");
        }
    }
      
    function showPosition(position: any) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // 이 위치를 사용하여 DB에서 입점사 찾기

        console.log(latitude, longitude);
    }
      
      function showError(error: any) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
        }
      }
      
    return(
        <Section>
            <Wrap>asdasd</Wrap>
        </Section>
    )
}