async function sendData(imageSrc) {
  //Convert base64 image to Bolb
  const fetchResponse = await fetch(imageSrc);
  const blob = await fetchResponse.blob();

  // Example POST request with fetch to send the image blob to the backend
  // 해당 로직은 button 클릭을 눌렀을 때 backend에 보내는 식으로 구현해야 한다.
  const formData = new FormData();
  formData.append("file", blob, "image.png");

  fetch("http://localhost:3060/api/v1/images/send", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
