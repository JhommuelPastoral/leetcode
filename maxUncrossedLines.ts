function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    const points: number[][] = [];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                points.push([i, j]);
            }
        }
    }

    const dp = new Array(points.length).fill(1);
    let res = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < i; j++) {
            if (
                points[j][0] < points[i][0] &&
                points[j][1] < points[i][1]
            ) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        res = Math.max(res, dp[i]);
    }
    return res;
}