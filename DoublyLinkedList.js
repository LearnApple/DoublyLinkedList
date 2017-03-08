function DouNode(data){
  this.data = data;
  this.next = null;
  this.previous = null;
}

function DoublyLinkedList(){
  this.head = new DouNode("head");

  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
  this.findLast = findLast;
  this.display = display;
  this.displayReverse = displayReverse;
}

function find(item){
  var cur = this.head;

  while((cur.next !== null) && (cur.data !== item)){
    cur = cur.next;
  }
  return cur;
}

function insert(newItem,item){

  var newNode = new DouNode(newItem)
  var cur = this.find(item);

  newNode.next = cur.next;
  newNode.previous = cur;
  cur.next = newNode;

}

function remove(item){
  var cur = this.find(item);

  if( cur.next !== null){

    cur.previous.next = cur.next;
    cur.next.previous = cur.previous;
    cur.next = null;
    cur.previous = null;
  }
}

function findLast(){
  var cur = this.head;
  while(cur.next !== null){
    cur = cur.next;
  }

  return cur;
}

function display(){

  var cur = this.head;
  var res = "";
  while(cur.next !== null){
    res += cur.data+"->";
    cur = cur.next;
  }
  s = res.substring(0,res.length-2);
  console.log(s);

}

function displayReverse(){
  var cur = this.findLast();
  var res = "";
  while(cur !== null){
    res += cur.data+"->";
    cur = cur.previous;
  }

  s = res.substring(0,res.length-2);
  console.log(s);
}

function findPrevious(item){
  var cur = this.head;
  while((cur.next !== null) && (cur.data !== item)){
    cur = cur.next;
  }
  return cur.previous;
}

var cites = new DoublyLinkedList();
cites.insert("a","head");
cites.insert("b","a");
cites.insert("c","b");
cites.insert("d","c");

console.log(cites.findPrevious("b").data);
cites.display();
cites.displayReverse();
