export class Tree {
  /**
   * @description 树结构遍历
   * @param {Array<any>} tree 树对象数组
   * @param {Function} callback 回调函数
   * @param {string} 树对象的子树的属性名称
  */
  static treeForeach (tree: Array<any>, callback: (args: any) => void, children = 'children') {
    let node;
    const list = [...tree];
    while (node = list.shift()) { /* eslint-disable-line */
      callback(node);
      node[children] && list.push(...node[children]);
    }
  }
  /**
   * @description 树对象数组转为一个扁平的数组
   * @param {Array<any>} tree 树对象数组
   * @param {Array<any>} result 保存树对象数组转化后的扁平的数组
   * @param {string} 树对象的子树的属性名称
   * @param {number} _nodeLevel 表示对应元素的层级
   * @returns 返回一个数组
   */
  static treeToList (tree: Array<any>, result = [], children = 'children', _nodeLevel = 0) {
    tree.forEach(node => {
      result.push(node);
      node._nodeLevel = _nodeLevel + 1;
      node[children] && Tree.treeToList(node[children], result, children, _nodeLevel + 1);
    });
    return result;
  }
}
