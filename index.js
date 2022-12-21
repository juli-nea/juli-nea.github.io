const tiles = ['project-one', 'project-two'];
const projects = [];

tiles.forEach(function(tile){
    projects.push(document.getElementById(tile));
})

const makeBorder = (event) =>{
    event.target.style.border = "2px solid white";
}

const removeBorder = (event) => {
    event.target.style.border ="";
}

const eventAssignment = (project) => {
    project.onmousedown = () => {
        makeBorder(event);
    }

    project.onmouseup = function() {
        removeBorder(event);
    }
}

projects.forEach(eventAssignment);