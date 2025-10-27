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
            body: data.content
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

export {fetchProducts};