// async/await

const regions = [`Africa`, `Americas`, `Asia`, `Europe`, `Oceania`];
const API_Countries = `https://restcountries.com/v3.1`;

// const getCapitalsByRegion = (region) => {
//   return fetch(API_Countries + `/region/${region}`)
//     .then((response) => response.json())
//     .then((countries) => {
//       let capitals = countries
//         .slice(0, 3)
//         .map((country) => country.capital[0]);

//       return Promise.all(
//         capitals.map((capital) =>
//           fetch(API_Countries + `/capital/${capital}`)
//             .then((response) => response.json())
//             .then((capital) => capital[0])
//         )
//       );
//     })
//     .then((capitalsInfo) =>
//       capitalsInfo.map(
//         (item) =>
//           `${item.capital[0]} is a capital of ${item.flag} ${item.name.common}.`
//       )
//     );
// };

// const getCapitalsByRegion = async (region) => {
//   let countries = await fetch(API_Countries + `/region/${region}`).then(data => data.json());

//   let capitals = countries.slice(0, 3).map((country) => country.capital[0]);

//   let capitalsInfo = await Promise.all(
//     capitals.map((capital) =>
//       fetch(API_Countries + `/capital/${capital}`)
//         .then((response) => response.json())
//         .then((capital) => capital[0])
//     )
//   );

//   return capitalsInfo.map(
//     (item) =>
//       `${item.capital[0]} is a capital of ${item.flag} ${item.name.common}.`
//   );
// };

// getCapitalsByRegion(`Africa`)
//     .then(data => console.log(data));

// (async () => {
//     let regionData = await Promise.all(regions.map(region => getCapitalsByRegion(region)));
//     console.log(regionData);
// })()

// fetch(`https://restcountries.com/v3.1/region/europe`)
//     .then(data => data.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log(`in finally`))

// (async () => {
//     try{
//         let countriesRequest = await fetch(`https://restcountries.com/v3.1/region/europe`);
//         let countriesResponse;

//         if(countriesRequest.status !== 200){
//             throw countriesRequest.status;
//         } else{
//             countriesResponse = countriesRequest.json();
//         }

//         console.log(countriesResponse);

//     } catch(err){
//         console.log(err);
//     } finally{
//         console.log(`in finally`)
//     }
// })()

// try/catch/finally

// CRUD-system

// METHOD
// 	GET – получение данных
// 	POST * – отправка данных на сервер в теле запроса (body)
// 	PUT * – отправка данных на сервер в теле запроса (обновление ресурса)
// 	PATCH * – отправка данных на сервер в теле запроса
// 	DELETE

// HEADERS – служебная информация (кодировка, сжатие, сервер, кеширование)

// REST

// https://jsonplaceholder.typicode.com/

// REST – архитектура клиент-серверного взаимодействия
// свод правил (рекомендаций), по которым клиент (web app, mobile app) и сервер должны между собой взаимодействовать

// REST говорит, что нужно думать о данных, которые хранятся на сервере как о ресурсе.
// У каждого ресурса на сервере есть свой URL.

// LIST – GET /posts // – запрос на ресурс posts
// ITEM – GET /posts/:id // – запрос на ресурс posts с :id

// ADD – POST /posts     body:{name: Alex, age: 21} // – запрос на ресурс posts c телом запроса, id всегда назначает только сервер
// <== {id: 101, name: Alex, age: 21}

// FULL UPDATE – PUT /posts/:id  body:{name: Ivan} // в body отправляются все поля объекта
// <== {id: 101, name: Ivan}

// PARTIAL UPDATE – PATCH /posts/:id body:{name: ''} // в body отправляется только то, что изменилось
// <== {id: 101, name: '', age: 21}

// DELETE – /posts/:id
// <== {}

// RESTfull Api – сферический конь в вакууме 😌

const API = `https://jsonplaceholder.typicode.com`;

(async () => {
    let posts = await fetch(API+`/posts`).then(data => data.json());
    console.log(posts);

    let lastPostId = posts[posts.length-1].id;

    let lastPost = await fetch(API+`/posts/${lastPostId}`).then(data => data.json());
    console.log(lastPost);

    let lastPostComments = await fetch(API+`/posts/${lastPostId}/comments`).then(data => data.json());
    console.log(lastPostComments);

    let commentsOfLastPost = await fetch(API+`/comments?postId=${lastPostId}`).then(data => data.json());
    console.log(commentsOfLastPost);

    let newPost = await fetch(API+`/posts`, {
        method: `POST`,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({title: `New post`, body: `My content`})
    }).then(data => data.json());

    console.log(newPost);

    let postPut = await fetch(API+`/posts/1`, {
        method: `PUT`,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({title: `hello`})
    }).then(data => data.json());

    console.log(postPut);

    let postPatch = await fetch(API+`/posts/1`, {
        method: `PATCH`,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({title: `hello`})
    }).then(data => data.json());

    console.log(postPatch);

    let postDelete = await fetch(API+`/posts/1`, {method: `DELETE`}).then(data => data.json());
    console.log(postDelete);

})()