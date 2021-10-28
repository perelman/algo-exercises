
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if (l1 && !l2) {
    return new ListNode(l1.val, l1.next);
  } else if (!l1 && l2) {
    return new ListNode(l2.val, l2.next);
  }
  else {
    let head = new ListNode();
    let curItem = head;
    let curRunner = false;
    while (l1 || l2) {
      if (l1 && l2) {
        if (l1.val > l2.val) {
          if (curRunner && curRunner == 'l2' && curItem.val === l2.val) {
            l2 = l2.next;
            curItem = curItem.next;
            continue;
          }
          curRunner = 'l2';
          curItem.next = l2;
          curItem = curItem.next;
          l2 = l2.next;
        } else {
          if (curRunner && curRunner == 'l1' && curItem.val === l1.val) {
            l1 = l1.next;
            curItem = curItem.next;
            continue;
          }
          curRunner = 'l1'
          curItem.next = new ListNode(l1.val, curItem.next);
          curItem = curItem.next;
          l1 = l1.next;
        }
      } else if (l1) {
        if (!curItem.next) {
          curItem.next = l1;
        }
        break;
      } else {
        if (!curItem.next) {
          curItem.next = l2;
        }
        break;
      }
    }

    return head.next;
  }
}


const example = [-1, 10, 11, 70, 70, 70, 70, 71, 71, 71, 71, 71, 71], [-2, -1, 0, 10, 10, 10, 12, 69, 70, 70, 70, 71, 72]

//Brute force solution.
//Find the which list start with the lower item
//Loop until we have the last item in the lower item list with the same value 
//If the value of the next item in the lower item list >= large item list val 
    //Put lower item list.next in temp var
    //put large item list in list.next
    //Loop until last item in the large item list with the same value
    //If the value of the next item in the list >= other list val 
    //...
//Else 
//Continue 

