addEventListener("DOMContentLoaded", () => {
    const listSection = document.querySelector("section.list");
    listSection.appendChild(createParagraph("Earn a billion dollars"));
    listSection.insertAdjacentElement(
      "beforeend",
      createParagraph("The ability to fly")
    );
    console.log(listSection.innerHTML)
let inHtml = "<div>This is a div element as a string</div>"
   const tempElement = createParagraph("");
   tempElement.innerHTML = inHtml;
    listSection.insertAdjacentElement("afterbegin", tempElement.firstChild)

    for(let x = 0; x < 3; x++){
        listSection.appendChild(createParagraph(`Adding another element: ${x+1}`))
    }
    console.log(listSection.children.length)
    document.querySelector("h2.owner").innerText = "Lucas";

    listSection.replaceChild(createParagraph("Replacing first child.."), listSection.firstChild);
    listSection.replaceChild(createParagraph("Replacing middle element.."), listSection.children[Math.floor(listSection.children.length / 2) ]);
    listSection.removeChild(listSection.lastElementChild);
  });

  const createParagraph = (text) => {
    const element = document.createElement("p");
    element.innerText = text;
    return element;
  };