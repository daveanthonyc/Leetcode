function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list1Curr = list1;
    let list2Curr = list1;
    let prev = undefined;

    while (list1Curr || list2Curr) {
        if (list1Curr && list2Curr) {
            prev = (list1Curr.val < list2Curr.val) ? list1Curr : list2Curr;
            prev.next = null;
            continue;
        }     

        const newSort = (list1Curr) ? list1Curr : list2Curr;
    }
};
