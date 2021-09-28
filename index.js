// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    let distance
    if (blocks >= 42) {
    distance = blocks - 42
        } else {
            distance = 42 - blocks
        }
    return distance
    }

function distanceFromHqInFeet(blocks) {
    let distanceInFeet = distanceFromHqInBlocks(blocks) * 264
    return distanceInFeet
}

function distanceTravelledInFeet(pointA, pointB) {
    let distanceTravelled
    if (pointA >= pointB) {
        distanceTravelled = (pointA - pointB) * 264
    } else {
        distanceTravelled = (pointB - pointA) * 264
    }
    return distanceTravelled
}

function calculatesFarePrice(start, destination) {
    
    let fare;
    if (distanceTravelledInFeet(start, destination) < 400) {
        fare = 0
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        fare = (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        fare = 25
    } else if (distanceTravelledInFeet(start, destination) >= 2500) {
        fare = 'cannot travel that far'
    }
    return fare
}