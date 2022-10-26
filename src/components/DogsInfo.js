import react from "react"; 

const DogsInfo = () => {
    return 
    <div>
        <h2> Some info about breed </h2>
        <Picture />
        <div classname="dogsInfoBox">
        <h3> Breed name </h3>
        <h3> Origin </h3>
        </div>
        <Button> More info </Button>
    </div>
}

export { DogsInfo };