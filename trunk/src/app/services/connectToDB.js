import {userName} from "./config";

const data = 220;

const ConnectToDB = {
  initData: (data, type) => {
    fetch(
      `https://money-control-prod-default-rtdb.europe-west1.firebasedatabase.app/${type}/${userName}.json`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );
  },

  getData: (type) => {
    return fetch(
      `https://money-control-prod-default-rtdb.europe-west1.firebasedatabase.app/${type}/${userName}.json`
    );
  },

  updateData: (data, type) => {
    return fetch(
      `https://money-control-prod-default-rtdb.europe-west1.firebasedatabase.app/${type}/${userName}.json`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        return fetch(
          `https://money-control-prod-default-rtdb.europe-west1.firebasedatabase.app/${type}/${userName}.json`,
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          }
        ).catch((e) => console.error(e));
      })
      .then((res) => res)
      .catch((e) => console.error(e));
  },
};

export default ConnectToDB;
