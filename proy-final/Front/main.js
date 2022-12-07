const form = document.querySelector("#form");
const height = document.querySelector("#height");
const pyramidForm = document.querySelector("#pyramid");
const validationText = document.querySelector("#validation");

const url = "http://localhost:4567/";
const POSTUrl = "PostPyramid";
const GET = "GetAllPyramid";
const GETById = "GetPyramidById/";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const array = pyramidForm.value.split(",");
  let cont = 0;
  for (i = 0; i < height.value; i++) {
    cont = cont + (i + 1);
  }

  console.log(cont);

  console.log(array.length);
  if (array.length != cont) {
    validationText.style.display = "block";
  } else {
    const params = {
      pyramid: "",
      solution: "1,2,3,4",
    };
    params.pyramid = pyramidForm.value;
    POST(params);
  }
});

const GETPyramids = () => {
  const res = axios.get(url + GET);
  console.log(res);
};

const GETPyramidsById = (id) => {
  const res = axios.get(url + GETById + id);
  console.log(res);
};

const POST = (params) => {
  const res = axios.post(url + POSTUrl, params).then((response) => {
    if (response.status === 200) {
      console.log("SUCCES!");
    } else "ERROR!";
  });
  console.log(res);
};
