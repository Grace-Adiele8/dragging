const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  console.log(item);
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = sortableList.querySelector(".dragging");
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offSetTop + sibling.offSetHeight / 2;
    // console.log(nextSibling);
  });
  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
