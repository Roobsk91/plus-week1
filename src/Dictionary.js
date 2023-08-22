import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
    setResults(response.data[0]);
    }

    function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }
    
    function handleKeywordChange(event) {
    setKeyword(event.target.value);
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
                <h1>What word would you like to look up?</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange}
                defaultValue={props.defaultWord} />
            </form>
            <div className="hint">
Recommended words: Lagoon, Owl, Monster, Forest...
            </div>
            </section>
            <Results results={results} />
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}