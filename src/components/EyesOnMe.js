// Code EyesOnMe Component Here

function Blur () {
  console.log("Hey! Eyes on me!")
}

function Focus () {
  console.log("Good!")
}

function EyesOnMe () {
  return (
    <button onBlur = {Blur} onFocus = {Focus}>Eyes on me</button>
  );
}

export default EyesOnMe;