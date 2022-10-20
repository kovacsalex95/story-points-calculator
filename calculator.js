function calculatePoints() {
    let uncertainity = prompt("Uncertainity", "1 - 3");
    if (uncertainity === null || uncertainity === "") return;
    uncertainity = parseInt(uncertainity);
    if (uncertainity === NaN || uncertainity < 1 || uncertainity > 3) return;

    let complexity = prompt("Complexity", "1 - 3");
    if (complexity === null || complexity === "") return;
    complexity = parseInt(complexity);
    if (complexity === NaN || complexity < 1 || complexity > 3) return;

    let effort = prompt("Effort", "1 - 3");
    if (effort === null || effort === "") return;
    effort = parseInt(effort);
    if (effort === NaN || effort < 1 || effort > 3) return;
    
    let points = {
        "1,1,1": 1,
        "1,1,2": 2,
        "1,1,3": 5,
        "1,2,1": 2,
        "1,2,2": 3,
        "1,2,3": 5,
        "1,3,1": 3,
        "1,3,2": 5,
        "1,3,3": 8,
        "2,1,1": 3,
        "2,1,2": 5,
        "2,1,3": 8,
        "2,2,1": 5,
        "2,2,2": 5,
        "2,2,3": 8,
        "2,3,1": 5,
        "2,3,2": 8,
        "2,3,3": 8,
        "3,1,1": 5,
        "3,1,2": 8,
        "3,1,3": 8,
        "3,2,1": 8,
        "3,2,2": 8,
        "3,2,3": 13,
        "3,3,1": 8,
        "3,3,2": 13,
        "3,3,3": 13,
    };

    key = uncertainity + ',' + complexity + ',' + effort;
    if (! key in points)
        return;

    point = points[key];

    alert("Story points: " + point);
}


calculatePoints();
