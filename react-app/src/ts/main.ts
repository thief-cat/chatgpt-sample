import * as lib from "./libraries";

// apiアクセス
const getMessage = async () => {
  const response = await lib.axios.get(
    lib.consts.api_path, 
    {
      headers:{
        'Content-type': 'application/json',
        'Acess-Control-Allow-Origin': "*",
        'Accept': 'application/json',
      }
    }
  )
  .catch((error: Error) => {
    console.log(error.message);
  });
  return response;
}
// $('#btn').on('click', async () => {
//   console.log("waiting...");
//   const response = await getMessage();
//   $('#message').html(response['data'].answer);
// });