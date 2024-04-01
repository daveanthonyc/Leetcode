export function maxArea(height: number[]): number {
    let maxArea = 0;

    // for (let i = 0; i < height.length; i++) {
    //     for (let j = 0; j < height.length; j++) {
    //         const h = Math.min(height[i], height[j]);
    //         const w = Math.abs(i-j);
    //         const area = h * w;
    //         maxArea = Math.max(maxArea, area);
    //     }
    // }
    let left = 0;
    let right = height.length-1;
    
    while (left < right) {
        const heightLimit = Math.min(height[left], height[right]);
        const width = Math.abs(right - left);
        const area = heightLimit * width;
        maxArea = Math.max(area, maxArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
