<script setup>
const API_TOKEN = '87437e5c08f64bfda83a187fd6f0f51d';

function liveness(image, callback) {
  var myHeaders = new Headers();
  myHeaders.append('token', API_TOKEN);
  console.log(myHeaders)

  var formdata = new FormData();

  if (typeof image == 'string' && image.indexOf('https://') == 0) formdata.append('photo', image);
  else formdata.append('photo', image, 'file');

  var requestOptions = {
    method: 'POST',
    headers: {
      'token': `${API_TOKEN}`
    },
    body: formdata,
    redirect: 'follow'
  };

  fetch('https://api.luxand.cloud/photo/liveness', requestOptions)
    .then((response) => response.json())
    .then((result) => callback(result))
    .catch((error) => console.log('error', error));
}

function detect_liveness() {
  var photo = document.getElementsByName('photo')[0].files[0];

  liveness(photo, function (result) {
    document.getElementById('detect-result').innerHTML = JSON.stringify(result, null, 8)
      .replace(/\ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');

    document.getElementById('detect-result')['style']['display'] = 'block';
  });
}
</script>

<template>
  <div>
    <h2>Liveness detection demo</h2>

    <div style="padding-bottom: 20px">Please choose the photo for liveness detection</div>
    <input type="file" name="photo" @change="detect_liveness" />
    <div
      id="detect-result"
      style="
        display: none;
        font-family: monospace;
        background-color: #606a94;
        color: white;
        margin-top: 20px;
        max-width: 600px;
        padding: 10px;
      "
    ></div>
  </div>
</template>
