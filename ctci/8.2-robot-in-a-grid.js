//We need to go from R to T
//We can move R and D only
//In order to check all the paths we need 
//A. Loop over the grid each step at a time.
//For each step we need to look if we can move right or down or both
//We need to run the check function on every allowed dir

/**
 * R,A,A,A,A,A,A
 * N,N,A,A,A,A,A
 * A,A,A,N,A,A,A
 * N,N,A,N,N,N,A
 * N,N,A,A,A,A,N
 * N,N,N,A,A,A,T
*/

const checkPath = (grid, rowIdx, columnIdx, steps = []) => {
    //console.log(steps);
    console.log('r', rowIdx);
    console.log('c', columnIdx); 
    const isLastRow = rowIdx === grid.length - 1;
    const isLastColumn = columnIdx === grid[rowIdx].length - 1;
    console.log(isLastRow, isLastColumn);
    if (isLastRow && isLastColumn) {
        console.log('end', steps);
        return steps;

    }
    const hasRight = !isLastColumn && grid[rowIdx][columnIdx + 1] === 1;
    const hasDown = !isLastRow && grid[rowIdx + 1][columnIdx] === 1;
    if (!hasRight && !hasDown) {
        return false;
    }
    if (hasRight) {
        const rSteps = checkPath(grid, rowIdx, columnIdx + 1, [...steps, 'R']);    
        if (rSteps) {
            return rSteps;
        }    
    }
    if (hasDown) {
        const dSteps = checkPath(grid, rowIdx + 1, columnIdx, [...steps, 'D']);
        if (dSteps) {
            return dSteps;
        }
    }
    return false    ;
}

const findPath = grid => {
   
   console.log(grid.length);
   console.log(grid[0].length);
   
   const result = checkPath(grid, 0, 0);
   console.log('result', result);
   return checkPath(grid, 0,0);    
};

module.exports = {
    findPath

}


/**
 * R,A,A,A,A,A,A
 * N,N,A,A,A,A,A
 * A,A,A,N,A,A,A
 * N,N,A,N,N,N,A
 * N,N,N,A,A,A,A
 * N,N,N,A,A,A,T
*/
/**
 * R,A,A,A,A,A,A
 * N,N,A,A,A,A,A
 * A,A,A,N,A,A,A
 * N,N,A,N,N,N,A
 * N,N,N,A,A,A,N
 * N,N,N,A,A,A,T
*/




