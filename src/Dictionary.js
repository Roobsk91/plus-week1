import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }

    function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    }

    function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
    }

    function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const imageApiKey = "343956b42t678f23abfoa30906bf4370";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handlePhotoResponse);
  }

    function handleSubmit(event) {
    event.preventDefault();
    search();
}

function load() {
    setLoaded(true);
    search();
}

if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultWord}
            />
          </form>
          <div className="hint">suggested: Owl, Lagoon, Monster...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}