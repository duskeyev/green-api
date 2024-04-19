let getSettingsListener = document
  .getElementById("getSettings")
  .addEventListener("click", function () {
    let idInstance = document.getElementById("idInstance").value;
    let apiTokenInstance = document.getElementById("apiTokenInstance").value;
    let apiUrl = "https://7103.api.greenapi.com";

    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`,
      true
    );
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        document.getElementById("serverResponse").value = xhr.responseText;
      } else {
        document.getElementById("serverResponse").value =
          "Error: " + xhr.status;
      }
    };
    xhr.onerror = function () {
      document.getElementById("serverResponse").value = "Request failed";
    };
    xhr.send();
  });

let getStateInstanceListener = document
  .getElementById("getStateInstance")
  .addEventListener("click", function () {
    let idInstance = document.getElementById("idInstance").value;
    let apiTokenInstance = document.getElementById("apiTokenInstance").value;
    let apiUrl = "https://7103.api.greenapi.com";

    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
      true
    );
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        document.getElementById("serverResponse").value = xhr.responseText;
      } else {
        document.getElementById("serverResponse").value =
          "Error: " + xhr.status;
      }
    };
    xhr.onerror = function () {
      document.getElementById("serverResponse").value = "Request failed";
    };
    xhr.send();
  });

let sendMessageListener = document
  .getElementById("sendMessage")
  .addEventListener("click", function () {
    let idInstance = document.getElementById("idInstance").value;
    let apiTokenInstance = document.getElementById("apiTokenInstance").value;
    let chatId = document.getElementById("phoneNumberMessage").value + "@c.us";
    let message = document.getElementById("message").value;
    let apiUrl = "https://7103.api.greenapi.com";

    let xhr = new XMLHttpRequest();

    xhr.open(
      "POST",
      `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        document.getElementById("serverResponse").value = xhr.responseText;
      } else {
        document.getElementById("serverResponse").value =
          "Error: " + xhr.status;
      }
    };
    xhr.onerror = function () {
      document.getElementById("serverResponse").value = "Request failed";
    };
    let data = JSON.stringify({
      chatId: chatId,
      message: message,
    });
    xhr.send(data);
  });

let sendFileByUrlListener = document
  .getElementById("sendFileByUrl")
  .addEventListener("click", function () {
    let idInstance = document.getElementById("idInstance").value;
    let apiTokenInstance = document.getElementById("apiTokenInstance").value;
    let chatId = document.getElementById("phoneNumberFile").value + "@c.us";
    let urlFile = document.getElementById("fileUrl").value;
    let apiUrl = "https://api.green-api.com";

    let xhr = new XMLHttpRequest();

    xhr.open(
      "POST",
      `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`,
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        document.getElementById("serverResponse").value = xhr.responseText;
      } else {
        document.getElementById("serverResponse").value =
          "Error: " + xhr.status;
      }
    };
    xhr.onerror = function () {
      document.getElementById("serverResponse").value = "Request failed";
    };
    let data = JSON.stringify({
      chatId: chatId,
      urlFile: urlFile,
      fileName: "file",
      caption: "file",
    });
    xhr.send(data);
  });
