"use strict";

function fetchProducts(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        return response.json();
    }).then(data => {
        let obj = {
            success: true,
            body: data
        }

        return obj;
    }).catch(error => {
        let obj2 = {
            success: false, 
            body: `${error.message}`
        }

        return obj2;
    });
}

let fetchCategories = async (url) => {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        let text = await response.text();
        const parser = DOMParser();
        const data = parser.parseFromString(text, "application/xml");

        return {
            success: true,
            body: data
        };

    } catch (error) {
        return {
            success: false,
            body: error.message
        };
    }
}

export {fetchProducts, fetchCategories};