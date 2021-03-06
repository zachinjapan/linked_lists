import "./App.css";
import Nav from "./Components/MuiNav/MuiNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import Feature from "./Components/Feature/Feature";

function App() {
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

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Linked Lists Visualized</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Feature />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
