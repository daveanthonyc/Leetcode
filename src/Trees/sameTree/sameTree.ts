function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // q and p both undefined, reached the end without hitting any base cases, meaning they are same so far
    if (!q && !p) {
        return true;
    }

    // if only q or p exist, then doesn't match
    if (!(q && p)) {
        return false;
    }

    // if values don't match
    if (q.val !== p.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
