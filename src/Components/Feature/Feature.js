import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Feature = (props) => {
  class LinkedList {
    constructor(head = null) {
      this.head = head;
    }

    addToHead(data) {
      const newHead = new Node(data);

      const currentHead = this.head;
      this.head = newHead;
      if (currentHead) {
        this.head.next = currentHead;
      }
    }

    addToTail(data) {
      let tail = this.head;
      if (!tail) {
        this.head = new Node(data);
      } else {
        while (tail.next !== null) {
          tail = tail.next;
        }
        tail.next = new Node(data);
      }
    }

    removeHead() {
      const removedHead = this.head;
      if (!removedHead) {
        return;
      }
      this.head = removedHead.next;
      return removedHead.data;
    }

    printList() {
      let currentNode = this.head;
      let output = "<head> ";
      while (currentNode !== null) {
        output += currentNode.data + " ";
        currentNode = currentNode.next;
      }
      output += "<tail>";
    }

    contains(value) {
      const predicate = (currentValue) => {
        return value === currentValue;
      };
      return this.findIf(predicate) !== null;
    }

    containsRec(value) {
      const recursiveCheck = (node) => {
        if (node === null) {
          return false;
        } else if (value === node.data) {
          return true;
        } else {
          return recursiveCheck(node.next);
        }
      };

      return recursiveCheck(this.head);
    }

    findIf(predicate) {
      let currentNode = this.head;
      while (currentNode) {
        if (predicate(currentNode.data)) {
          return currentNode.data;
        } else {
          currentNode = currentNode.next;
        }
      }
      return null;
    }

    findIfRec(predicate) {
      const check = (currentNode) => {
        if (currentNode === null) {
          return null;
        } else if (predicate(currentNode.data)) {
          return currentNode.data;
        } else {
          return check(currentNode.next);
        }
      };
      return check(this.head);
    }
  }

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  let [myList, setMyList] = useState(new LinkedList());
  let [length, setLength] = useState(0);

  let [textVersion, setTextVersion] = useState("");

  useEffect(() => {
    let newText = JSON.stringify(myList);
    setTextVersion(newText);
  }, [length]);
  return (
    <div>
      <div
        className="list_container"
        style={{
          //   overflowY: "hidden",
          //   overflowX: "auto",
          width: "fit-content",
          height: "fit-content",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{textVersion}</h1>
      </div>
      <div>
        <Button
          onClick={() => {
            let newNode = new Node(2);
            let newObject = myList;
            newObject.addToTail(newNode);
            setMyList(newObject);
            setLength(length + 1);
          }}
        >
          add node
        </Button>
      </div>
    </div>
  );
};

export default Feature;
