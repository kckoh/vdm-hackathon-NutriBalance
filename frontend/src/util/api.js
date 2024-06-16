export async function sendData(imageBase64) {
  console.log("whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy????????");
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

  return await fetchResponse.json();
}

export async function requestMoreInfo(dataArray) {
  try {
    const fetchMoreInfo = await fetch(
      "http://localhost:3060/api/v1/more_info/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: dataArray,
        }),
      }
    );

    if (!fetchMoreInfo.ok) {
      const error = await fetchMoreInfo.json();
      console.error("Server responded with an error", error);
      throw new Error("Failed to have more info");
    }

    return await fetchMoreInfo.json();
  } catch (error) {
    console.error("Error requesting more info", error);
    throw new Error("Failed to have more info");
  }
}
