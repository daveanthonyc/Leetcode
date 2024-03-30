type TreeNode = {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

function maxDepth(root: TreeNode | null): number {
    let depth = 0;

    return dfs(root, depth);
};

function dfs(root: TreeNode | null, depth: number): number {
    if (!root) {
        return depth;
    }

    return Math.max(dfs(root.left, depth+1), dfs(root.right, depth+1));
}
