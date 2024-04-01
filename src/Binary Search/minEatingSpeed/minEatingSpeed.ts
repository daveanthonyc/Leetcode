// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
// The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. 
// Each hour, she chooses some pile of bananas and eats k bananas from that pile. 

// If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.


    // [312884470], 312884469))     toBe(2);
    // 312884470 -> it defaulted to this (guess max / first element)

export function minEatingSpeed(piles: number[], h: number): number {
    let max = Math.max(...piles);

    // possible k = range[1,..., max];
    let start = 1;
    let end = max;

    do {
        const mid = start + Math.floor((end-start)/2);
        const midVal = getRequiredHours(piles, mid);

        if (midVal === h) {
            return mid;
        }

        if (midVal < h) {
            end = mid-1;
        } else {
            start = mid + 1;
        }
    } while (start <= end);

    return start;
};

function getRequiredHours(piles: number[], k: number): number {
    let reqHours = 0;
    for (const pile of piles) {
        reqHours += Math.ceil(pile / k);
    }
    return reqHours;
}
// Intution
