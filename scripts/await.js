"use strict"

async function getWithAwait(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('error', error.message)
    }
}