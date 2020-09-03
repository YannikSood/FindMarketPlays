export const oldestSort = (json) => {
    json.sort(function(a, b){
        return new Date(b.date) - new Date(a.date);
    })
    return json;
}

export const greatestSort = (json) => {
    json.sort(function(a, b){
        return b.cost_basis - a.cost_basis;
    });
    return json;
};

export const leastSort = json => {
    json.sort(function(a, b) {
        return a.cost_basis - b.cost_basis;
    });
    return json;
}