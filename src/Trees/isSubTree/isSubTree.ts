/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) {
        return false;
    }

    if (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)) {
        return true;
    }

    if (subRoot) {
        if (root.val === subRoot.val) {
            return isSameTree(root, subRoot);
        }
    }

    return false;
};

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
