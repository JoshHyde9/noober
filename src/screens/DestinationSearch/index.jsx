import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { styles } from "./styles";

import { GOOGLE_PLACES_API_KEY } from "@env";

export const DestinationSearch = () => {
  const [location, setLocation] = useState({
    fromLocation: "",
    destinationLocation: { data: {}, details: {} },
  });

  useEffect(() => {
    console.log("yeet");
  }, [location.fromLocation, location.destinationLocation]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          onPress={(data, details = true) => {
            setLocation({
              ...location,
              fromLocation: { data, details },
            });
          }}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: "en",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          onPress={(data, details = true) => {
            setLocation({
              ...location,
              destinationLocation: { data, details },
            });
          }}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};
