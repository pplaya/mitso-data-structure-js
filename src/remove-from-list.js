import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 */

 export default function removeKFromList(l, k) {
  if (!l) return null;

  while (l && l.value === k) {
    l = l.next;
  }

  if (!l) return null;

  for (let current = l; current.next !== null; ) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}
