export async function sendData(imageBase64) {
  const response = await fetch(imageBase64);
  const blob = await response.blob();

  const formData = new FormData();
  formData.append("file", blob, "image.png");

  const fetchResponse = await fetch(
    "http://localhost:3060/api/v1/images/send",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!fetchResponse.ok) {
    throw new Error("Failed to send image");
  }

  console.log(fetchResponse);

  return await fetchResponse.json();
}
