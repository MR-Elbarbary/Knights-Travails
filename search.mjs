import { Queue } from "./queue.mjs";

export function knightMoves(start, end) {
    let queue = new Queue();
    queue.enqueue(start);
    while (queue.length !== 0) {
        let seen = [];
        let node = queue.deque();
        if ((node.cords[0] === end[0]) && (node.cords[1] === end[1])) {
            let path =[];
            walkBack(node, (node) =>{path.push(node.cords)});
            console.log(`the shortest path is ${path.length} steps`);
            path.forEach(cord => {
                console.log(`[${cord[0]},${cord[1]}]`);
            });
            return
        }
        seen.push(node);
        if ((node.cords[0] > 1) && (node.cords[1] > 2)) {
            queue.enqueue([node.cords[0]-1, node.cords[1]-2], node);
        }
        if ((node.cords[0] > 2) && (node.cords[1] > 1)) {
            queue.enqueue([node.cords[0]-2, node.cords[1]-1], node);
        }
        if ((node.cords[0] > 2) && (node.cords[1] < 7)) {
            queue.enqueue([node.cords[0]-2, node.cords[1]+1], node);
        }
        if ((node.cords[0] < 7) && (node.cords[1] > 2)) {
            queue.enqueue([node.cords[0]+1, node.cords[1]-2], node);
        }
        if ((node.cords[0] > 1) && (node.cords[1] < 6)) {
            queue.enqueue([node.cords[0]-1, node.cords[1]+2], node);
        }
        if ((node.cords[0] < 6) && (node.cords[1] > 1)) {
            queue.enqueue([node.cords[0]+2, node.cords[1]-1], node);
        }
        if ((node.cords[0] < 7) && (node.cords[1] < 6)) {
            queue.enqueue([node.cords[0]+1, node.cords[1]+2], node);
        }
        if ((node.cords[0] < 6) && (node.cords[1] < 7)) {
            queue.enqueue([node.cords[0]+2, node.cords[1]+1], node);
        }
    }
    console.log("can't find it");
}

function walkBack(node, callback) {
    if (node === undefined) {
        return
    }
    walkBack(node.brev, callback);
    callback(node);
}