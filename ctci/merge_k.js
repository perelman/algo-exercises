function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const listItemCount = new Map();

  for (const list of lists) {
    let curList = list;
    while (curList) {
      const item = curList.val;
      const savedLnData = listItemCount.has(item) ? listItemCount.get(item) : false;
      const fn = savedLnData ? new ListNode(item, savedLnData.fn) : new ListNode(item);
      const lnData = savedLnData ? { ...savedLnData, fn } : { ln: fn, fn }
      listItemCount.set(item, lnData);
      curList = curList.next;
    }
  }
  const ascKeys = [...listItemCount.keys()].sort((a, b) => a - b);

  const ascKeysLength = ascKeys.length;
   for (let i = 0; i < ascKeysLength; i++) {
    const lnData = listItemCount.get(ascKeys[i]);

    if (i + 1 < ascKeysLength) {
      const nextLnData = listItemCount.get(ascKeys[i + 1]);
      lnData.ln.next = nextLnData.fn;
    }
  }
  return listItemCount.get(ascKeys[0]).ln; 
};


mergeKLists([new ListNode(1, new ListNode(4)), new ListNode(1)])
