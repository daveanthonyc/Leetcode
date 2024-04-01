export function hasCycle(head: ListNode | null): boolean {
    const set = new Set();

    let curr = head;
    while (curr) {
        if (set.has(curr)) {
            return true;
        }
        set.add(curr)
        curr = curr.next;
    }

    return false;
};
